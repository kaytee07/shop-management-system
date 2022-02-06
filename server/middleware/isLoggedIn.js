const AppError = require('../utils/AppError');

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        throw new AppError("you must be logged in first")
    }
    next()
}