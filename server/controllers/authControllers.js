const jwt = require("jsonwebtoken");
const User = require('./../models/UserModel');
const { promisify } = require('util');

exports.signup = async (req,res) => {

    const newUser = await User.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password
    });

    const token = jwt.sign({id : newUser._id} , process.env.JWT_SECRET , {expiresIn: '90d'});
    res.status(201).json({
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
            res.status(201).json({
                status: 'success',
                token
            });
        }
    } 
};

exports.protect = async (req, res, next) => {
  try {
    
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'You are not logged in! Please log in to get access!',
      });
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const freshUser = await User.findById(decoded.id);
    if (!freshUser) {
      return res.status(401).json({
        status: 'fail',
        message: 'The user no longer exists!',
      });
    }

    req.user = freshUser; 
    next();

  } catch (err) {
    return res.status(401).json({
      status: 'fail',
      message:
        err.name === 'TokenExpiredError'
          ? 'Token expired! Please log in again.'
          : 'Invalid token. Please log in again.',
    });
  }
};