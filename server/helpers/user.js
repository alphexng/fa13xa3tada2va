import db from '../db';
import UserQuery from "../queries/userQuery";
import bcrypt from 'bcryptjs';

/**
 * Class HelpUser - Middleware to handle every server validation for users
 */
class HelpUser {
    /**
     * Validate all parameters supplied in request body
     * @param {Object} req - Parses all values in the route request body
     * @param {Object} resp - Contains response object for route
     * @param {function} next - handles middlewares
     */
    static checkIfUserExists (req,resp,next) {
		db.query(
			UserQuery.checkIfUserExistsQuery(req.email),
			(err,res) => {
                if (res.rows.length > 0) {
                    return resp.status(400).send({
                        status: 'error',
                        message: 'This email already exists'
                    })
                }else{
                    next();
                }
			}
		)
    }
    /**
     * Validate all parameters supplied in request body
     * @param {req} req - Parses all values in the route request body
     * @param {resp} resp - Contains response object for route
     * @param {next} next - handles middlewares
     */
    static checkIfEmailExists (req,resp,next) {
        db.query(
            UserQuery.checkIfUserExistsQuery(req.email),
            (err,res) => {
                if(res.rows.length < 1){
                    return resp.status(400).send({
                        status:'error',
                        message: 'Email doesnt exist in our records'
                    });
                }else {
                    if (bcrypt.compareSync(req.password,res.rows[0].password)) {
                        next();
                    } else {
                        return resp.status(400).send({
                            status:'error',
                            message: 'Incorrect Password'
                        });
                    }
                }
            }
        );
    }
}

export default HelpUser;
