const jwt = require("jsonwebtoken");
const User = require('./../models/UserModel');

exports.signup = async (req,res) => {

    const newUser = await User.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password
    });

    const token = jwt.sign({id : newUser._id} , process.env.JWT_SECRET , {expiresIn: '90d'});
    res.status(204).json({
        status: 'success',
        token,
        data: {
            newUser
        }
    });
};

exports.login = async (req,res) => {

    const { email , password } = req.body;
    if(!email || !password) {
        res.status(404).json({
        status: 'fail',
        message: "You should insert your email & password"
        });
    }else{
        const user = await User.findOne({ email }).select('+password');
        if(!user || !(await user.correctPassword(password, user.password))){
            res.status(404).json({
            status: 'fail',
            message: "Incorrect email or password"
            });
        }else{
            const token = jwt.sign({id : user._id} , process.env.JWT_SECRET , {expiresIn: '90d'});
            res.status(204).json({
                status: 'success',
                token
            });
        }
    } 
};