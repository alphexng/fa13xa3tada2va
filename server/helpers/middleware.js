import bcrypt from 'bcryptjs';
import validate from './extra';

/**
 * Class Middleware - Handles all endpoint validation
 */
class Middleware {
    /**
     * Validate all parameters supplied in request body
     * @param {Object} req - Parses all values in the route request body
     * @param {Object} resp - Contains response object for route
     * @param {function} next - handles middlewares
     */
    static validateUserSignup (req,resp,next) {
        const fullname = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const address = req.body.address;
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if (fullname==null
            || fullname.length===0
            || validate.hasWhiteSpace(fullname)) {
            return resp.status(400).send({
                status: "error",
                message: "Name field cannot be left empty"
            })
        }
        if (validate.validateInput(fullname,3,50)===false) {
            return resp.status(400).send({
                status: "error",
                message: "Name: Min Character - 3,Max character - 50"
            })
        }
        if (email==null
            || email.length===0
            || validate.hasWhiteSpace(email)) {
            return resp.status(400).send({
                status: "error",
                message: "Email field cannot be left empty"
            })
        }
        if (validate.validateEmail(email)===false){
            return resp.status(400).send({
                status: "error",
                message: "Invalid email syntax"
            })
        }
        if (validate.validateInput(email,8,50)===false) {
            return resp.status(400).send({
                status: "error",
                message: "Email: Min Character - 8,Max character - 50"
            })
        }
        if (phone==null
            || phone.length===0
            || validate.hasWhiteSpace(phone)) {
            return resp.status(400).send({
                status: "error",
                message: "Phone field cannot be left empty"
            })
        }
        if (isNaN(phone)) {
            return resp.status(400).send({
                status: "error",
                message: "Phone Number cannot be a string character"
            })
        }
        if (validate.validateInput(phone,11,15)===false) {
            return resp.status(400).send({
                status: "error",
                message: "Phone Number: Min Character - 11,Max character - 15"
            })
        }
        if (address==null
            || address.length===0
            || validate.hasWhiteSpace(address)) {
            return resp.status(400).send({
                status: "error",
                message: "Address field cannot be left empty"
            })
        }
        if (password==null
            || password.length===0
            || validate.hasWhiteSpace(password)) {
            return resp.status(400).send({
                status: "error",
                message: "Password field cannot be left empty"
            })
        }
        if (cpassword==null
            || cpassword.length===0
            || validate.hasWhiteSpace(cpassword)) {
            return resp.status(400).send({
                status: "error",
                message: "Confirm Password field cannot be left empty"
            })
        }
        if (validate.validateInput(password,8,20)===false) {
            return resp.status(400).send({
                status: "error",
                message: "Password: Min Character - 8,Max character - 20"
            })
        }
        if (password!==cpassword) {
            return resp.status(400).send({
                status: "error",
                message: "Passwords do not match"
            })
        }
        req.fullname = fullname;
        req.email = email;
        req.phone = phone;
        req.address = address;
        req.password = bcrypt.hashSync(password);

        next();
    }
}

export default Middleware;
