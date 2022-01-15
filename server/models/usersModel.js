//--------- Including all the external packages -----------
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

//--------- Functional code for this file ---------
const usersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'User should have a name']
	},
	email: {
		type: String,
		required: [true, 'User should have an email'],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, 'Please provide a valid email']
	},
	about: String,
	yearOfAdmission: {
		type: Number,
		required: [true, 'Please provide your year of Admission']
	},
	courseYear: {
		type: String,
		required: [true, 'Please provide your course year. Any one of these -> FY/ SY/ TY. If a professor please enter -> Prof'],
		enum: ['FY', 'SY', 'TY', 'Prof']
	},
	currentStatus: {
		type: String,
		enum: ['Student', 'Passout',  'Dropout', 'Professor'],
		default: 'Student'
	},
	role: {
		type: String,
		enum: ['Student', 'Professor', 'Admin'],
		default: 'Student'
	},
	questionsAsked: [String],
	questionsAnswered: {
		type: Number,
		default: 0
	},
	password: {
		type: String,
		required: [true, 'Please provide a password'],
		minlength: 8
	},
	passwordConfirm: {
		type: String,
		required: [true, 'Please confirm the password'],
		validate: {
			validator: function(passwordForConfirmation) {
				return passwordForConfirmation === this.password;
			},
			message: 'The password does not match please try again'
		}
	},
	passwordChangedAt: Date,
	passwordResetToken: String,
	passwordResetExpires: Date,
	active: {
		type: String,
		default: true
	}
});

//We will encrypt the password before storing into database
usersSchema.pre('save', async function (next) {
	this.password = await bcrypt.hash(this.password, 1);
	this.passwordConfirm = undefined;
	next();
});

//In password confirm we will check if entered password and database passwords match
usersSchema.methods.correctPassword = async function (enteredPassword, databasePassword) {
	return await bcrypt.compare(enteredPassword, databasePassword);
}

//We will record the time when the password was changed
usersSchema.methods.passwordChangedAfter = function(tokenTimestamp) {
	if(this.passwordChangedAt) {

		const changedTimeStamp = parseInt(this.passwordChangedAt.getTime()/1000,10);
		
		console.log(tokenTimestamp, this.passwordChangedAt);
		return tokenTimestamp < changedTimeStamp;
	}

	return false;
}

//Creating token for resetting password
usersSchema.methods.createPasswordResetToken = function() {
	const resetToken = crypto.randomBytes(32).toString('hex');

	this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
	this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

	return resetToken;
}

//This will filter only active users
usersSchema.pre(/^find/, function(next) {
	this.find({active: {$ne: false}});
	next();
});

const Users = mongoose.model('Users', usersSchema);

//--------- Post function Assignment ---------------
module.exports = Users;
