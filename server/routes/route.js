import Middleware from "../helpers/middleware";
import User from "../controllers/userControl";
import HelpUser from "../helpers/user";

/**
 * Route - holds every endpoint to be used by the app
 * @param {function} app - Holds the express instant
 */
const Route = (app) => {
    app.post(
        '/api/auth/signup',
        Middleware.validateUserSignup,
        HelpUser.checkIfUserExists,
        User.signup
    );
    app.post(
        '/api/auth/login',
        Middleware.validateUserLogin,
        HelpUser.checkIfEmailExists,
        User.login
    );
}

export default Route;
