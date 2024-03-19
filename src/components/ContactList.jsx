import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons'; // Імпортуємо необхідні іконки
import styles from './ContactList.module.css'; // Імпортуємо CSS-модуль

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
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
          <button className={styles.deleteButton} onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
