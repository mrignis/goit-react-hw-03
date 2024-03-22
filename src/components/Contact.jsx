// Contact.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactList.module.css';

function Contact({ contact, onDeleteContact }) {
  return (
    <li className={styles.contactItem}>
      <div>
        <span className={styles.contactName}>
          <FontAwesomeIcon icon={faUser} /> {contact.name}
        </span>
      </div>
      <div>
        <span className={styles.contactNumber}>
          <FontAwesomeIcon icon={faPhone} /> {contact.number}
        </span>
      </div>
      <button className={styles.deleteButton} onClick={() => onDeleteContact(contact.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}

export default Contact;
