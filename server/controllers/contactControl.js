import db from '../db';
import ContactQuery from '../queries/contactQuery';
import validate from '../helpers/extra';

/**
 * Class Contact - Handles the Contact controller
 */
class Contact {
  /**
     * Send Contact Message Controller
     * @param {req} req - Parses all values in the route request body
     * @param {resp} resp - Contains response object for route
     */
  static sendContactMessage(req, resp) {
    db.query(ContactQuery.addContactMsgQuery(
      validate.randNumb('COT'),
      req.fullname,
      req.email,
      req.phone,
      req.city,
      req.message
    ))
      .then((res) => {
        return resp.status(201).send({
          status: 'success',
          message: 'Message sent Successfully'
        });
      })
      .catch((err) => {
        return resp.status(400).send({
          status: 'error',
          message: 'There was an error in your contact form'
        });
      });
  }
}

export default Contact;