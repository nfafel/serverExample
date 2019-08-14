const jwt = require('jsonwebtoken');

const Users = require('../models/users');

exports.contextFunc = async( req ) => {
    try {
        const token = req.body.variables.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.decode(token);
        const phoneNumber = decoded.payload.phoneNumber;
        const user = await Users.findOne({phoneNumber: phoneNumber});
        const verified = jwt.verify(token, user.secret);
        return verified.payload;

    } catch(err) {
        return {authenticationError: err}
    }
}
