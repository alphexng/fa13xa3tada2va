/**
 * Class UserQuery - Handles every user query
 */
class UserQuery {
    /**
     * Inserts a new user bio-data into the database
     * @param {string} ref - User unique ID
     * @param {string} fullname - User Full name
     * @param {string} email - User Email Address
     * @param {number} phone - User Phone Number
     * @param {string} address - User Address
     * @param {string} password - User Password
     */
    static signupQuery (ref,fullname,email,phone,address,password) {
        return {
            text: `
            INSERT INTO users
            (
                refid,
                name,
                email,
                phone,
                address,
                password,
                verify_status
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            values: [ref,fullname,email,phone,address,password,false]
        }
    }

    /**
     * Checks if a user already exists on signup
     * @param {string} email - email to be queried
     */
    static checkIfUserExistsQuery (email) {
        return {
            text: `
            SELECT * FROM users WHERE email = $1`,
            values: [email]
        }
    }
}

export default UserQuery;
