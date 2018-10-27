/**
 * Class ContactQuery - Handles every contact query
 */
class ContactQuery {
  /**
     * Inserts Contact message to the database
     * @param {string} ref - Contact Unique ID
     * @param {string} fullname  - Sender;s Name
     * @param {string} email  - Sender's Email
     * @param {number} phone  - Sender's Phone Number
     * @param {string} city  - Sender's Location(City)
     * @param {string} message  - Sender's Message
     */
  static addContactMsgQuery(ref,fullname, email, phone, city, message) {
    return {
      text: `
            INSERT INTO contactus
            (
                refid,
                sender,
                email,
                phone,
                city,
                message,
                read
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      values: [ref,fullname, email, phone, city, message, false]
    }
  }
}

export default ContactQuery;