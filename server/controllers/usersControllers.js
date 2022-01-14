const Users = require('../models/usersModel.js');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/appError.js');

exports.getAllUsers = catchAsync(async (req, res, next) => {
	const users = await Users.find();

	res.status(200).json({
		status: 'success',
    result: users.length,
		requestedAt: req.requestTime,
		data: {
			users
		}
	});
});

exports.getMe = (req, res, next) => {
	req.params.id = req.user.id;
	next();
}

exports.getSingleUser = catchAsync (async (req, res, next) => {
	const user = await Users.findById(req.params.id);

	if(!user) {
		return next(new AppError('User with the given id was not found. Please recheck the user id', 404));
	}

	res.status(200).json({
		status: 'success',
		requestedAt: req.requestTime,
		data: {
			user
		}
	})
});

exports.updateMe = (req, res, next) => {
  //1) Create error if the user updates the password data
  if (req.body.password || req.body.passConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updatePassword route',
        400
      )
    );
  }

  //3) Filetring out the body in the request with permitted fields
  const filteredBody = finterObj(req.body, 'name', 'email');

  //2) Update user document
  const updatedUser = Users.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
};

exports.deleteMe = catchAsync(async (req, res, next) => {
  await Users.findByIdAndUpdate(req.user.id, {active: false});

  res.status(204).json({
    status: 'success',
    data: null
  })
});
