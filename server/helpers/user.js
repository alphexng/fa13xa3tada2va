import db from '../db';
import UserQuery from "../queries/userQuery";

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
}

export default HelpUser;
