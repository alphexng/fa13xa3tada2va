/**
 * Class Extra - Contains every relevant function for app
 */
class Extra {
    /**
     * Checks if a string has white spaces
     * @param {string} str - string to be validated
     * @returns true or false
     */
	static hasWhiteSpace(str) {
		return (!str || str.length === 0 || /^\s*$/.test(str))
    }
    
    /**
     * Checks if a string meets the conditions of an email address
     * @param {string} email - email address to be validated
     * @returns true or false
     */
	static validateEmail(email) {
		const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return re.test(String(email).toLowerCase());
    }
    
    /**
     * Checks the minimum and maximum character of a string
     * @param {string} str - input to be validated
     * @param {number} start - minimum number of characters for string
     * @param {number} stop - maximum number of characters for string
     * @returns true or false
     */
	static validateInput(str,start,stop) {
		if (str.length > stop) {
			return false;
		}else if (str.length < start) {
			return false;
		}else{
			return true;
		}
    }
    
    /**
     * Returns a unique string
     * @param {string} str - string to be concatenated to the return value
     */
    static randNumb (str) {
        const rand =  Math.floor(Math.random() * 100000) + 10000;
        return `${str}${rand}`;
	}
}

export default Extra;
