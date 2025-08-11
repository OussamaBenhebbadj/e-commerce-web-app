const User = require('./../models/UserModel');


exports.getAllusers = async (req,res) => {
    const users = await User.find();

    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
        users
        }
    });
};