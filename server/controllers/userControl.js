import jwt from 'jsonwebtoken';
import db from '../db';
import config from '../jwt/config';
import UserQuery from '../queries/userQuery';
import validate from '../helpers/extra';

/**
 * Class User - Handles the User controller
 */
class User {
    /**
     * Signup controller
     * @param {Object} req - Parses all values in the route request body
     * @param {Object} resp - Contains response object for route
     */
    static signup (req,resp) {
        db.query(UserQuery.signupQuery(
            validate.randNumb('USR'),
            req.fullname,
            req.email,
            req.phone,
            req.address,
            req.password
        ))
        .then((res) => {
            const [user] = res.rows;
            const token = jwt.sign({id: user.refid }, config, {
                expiresIn: 86400 * 365
            });
            return resp.status(201).send({
                status: 'success',
                message: 'Your sign up was successful',
                token: token
            })
        })
    }
    /**
     * Login Controller
     * @param {req} req - Parses all values in the route request body
     * @param {resp} resp - Contains response object for route
     */
    static login (req,resp) {
        db.query(UserQuery.loginQuery(
            req.email
        ))
        .then((res) => {
            const [user] = res.rows;
            const token = jwt.sign({ id: user.refid }, config, {
                expiresIn: 86400 * 365
            });
            return resp.status(209).send({
                status: 'success',
                message: 'Login Successful',
                token: token
            });
        })
        .catch((err) => {
            return resp.status(400).send({
                status:'error',
                message:'There was an error in your form'
            });
        });
    }
}

export default User;
