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

    /**
     * Validate all parameters supplied in request body
     * @param {req} req - Parses all values in the route request body
     * @param {resp} resp - Contains response object for route
     * @param {next} next - Handles Middleware
     */
    static validateUserLogin(req,resp,next){
        const email = req.body.email;
        const password = req.body.password;
        let errors = [];
        if (email == null
            || email.length === 0
            || validate.hasWhiteSpace(email)) {
            errors.push({
                status: "error",
                message: "Email field cannot be left empty"
            })
        }
        if (validate.validateEmail(email) === false) {
            errors.push({
                status: "error",
                message: "Invalid email syntax"
            })
        }
        if (validate.validateInput(email, 8, 50) === false) {
            errors.push({
                status: "error",
                message: "Email: Min Character - 8,Max character - 50"
            })
        }
        if (password == null
            || password.length === 0
            || validate.hasWhiteSpace(password)) {
            errors.push({
                status: "error",
                message: "Password field cannot be left empty"
            })
        }
        if(errors == undefined || errors.length < 1){
            req.email = email;
            req.password = password;
            next();
        }else {
            return resp.status(400).send(errors[0]);
        }
    }
    /**
     * Validate all parameters supplied in request body
     * @param {req} req - Parses all values in the route request body
     * @param {resp} resp - Contains response object for route
     * @param {next} next - Handles Middleware
     */
    static validateContact (req,resp,next) {
        const fullname = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const message = req.body.message;
        const city = req.body.city;
        let errors = [];
        if (fullname == null
            || fullname.length === 0
            || validate.hasWhiteSpace(fullname)) {
            errors.push({
                status: "error",
                message: "Name field cannot be left empty"
            })
        }
        if (validate.validateInput(fullname, 3, 50) === false) {
            errors.push({
                status: "error",
                message: "Name: Min Character - 3,Max character - 50"
            })
        }
        if (email == null
            || email.length === 0
            || validate.hasWhiteSpace(email)) {
            errors.push({
                status: "error",
                message: "Email field cannot be left empty"
            })
        }
        if (validate.validateEmail(email) === false) {
            errors.push({
                status: "error",
                message: "Invalid email syntax"
            })
        }
        if (validate.validateInput(email, 8, 50) === false) {
            errors.push({
                status: "error",
                message: "Email: Min Character - 8,Max character - 50"
            })
        }
        if (phone == null
            || phone.length === 0
            || validate.hasWhiteSpace(phone)) {
            errors.push({
                status: "error",
                message: "Phone field cannot be left empty"
            })
        }
        if (isNaN(phone)) {
            errors.push({
                status: "error",
                message: "Phone Number cannot be a string character"
            })
        }
        if (validate.validateInput(phone, 11, 15) === false) {
            errors.push({
                status: "error",
                message: "Phone Number: Min Character - 11,Max character - 15"
            })
        }
        if (message == null
            || message.length === 0
            || validate.hasWhiteSpace(message)) {
            errors.push({
                status: "error",
                message: "Message field cannot be left empty"
            })
        }
        if (city == null
            || city.length === 0
            || validate.hasWhiteSpace(city)) {
            errors.push({
                status: "error",
                message: "City field cannot be left empty"
            })
        }
        if (errors == undefined || errors.length < 1) {
            req.fullname = fullname;
            req.email = email;
            req.phone = phone;
            req.message = message;
            req.city = city;
            next();
        } else {
            return resp.status(400).send(errors[0]);
        }
    }
}

export default Middleware;
