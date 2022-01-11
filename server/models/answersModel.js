//--------- Including all the external packages -----------
const mongoose = require('mongoose');

//--------- Functional code for this file ---------
const answersSchema = new mongoose.Schema({
	userAnswerer : {
		type: String,
		required: [true, 'The user should have a name']
	},
	answer: {
		type: String,
		required: [true, 'The answer should have minimum of 1 character']
	},
	upvotes: {
		type: Number,
		default: 0
	},
	downvotes: {
		type: Number,
		default: 0
	},
},
{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

const Answers = mongoose.model('Answers', answersSchema);

//--------- Post function Assignment ---------------
module.exports = Answers;