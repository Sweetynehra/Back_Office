import React from 'react';
import './Contact.css';

const facultyContacts = [
  { name: 'Professor Abhishek Gaur (CSE Dept)', number: '9530188107' },
  // Add more faculty contacts as needed
];

const studentContacts = [
  { name: 'Priya Garg', number: '6367202155' },
  { name: 'Sweety Nehra', number: '9782370333' },
  // Add more student contacts as needed
];

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact List</h2>
      <div className="contact-list">
        <h4>Faculty :</h4>
        {facultyContacts.map((contact, index) => (
          <div key={index} className="contact-box">
            <h4>{contact.name}</h4>
            <p>{contact.number}</p>
          </div>
        ))}
        <h4>Students :</h4>
        {studentContacts.map((contact, index) => (
          <div key={index} className="contact-box">
            <h4>{contact.name}</h4>
            <p>{contact.number}</p>
          </div>
        ))}
      </div>

      <div className="footer">
      <p>For technical isuue contact us at: <a href="mailto:supportoff@gmail.com">supportoff@gmail.com</a></p>
    </div>
    </div>
  );
};

export default Contact;
