import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons'; // Імпортуємо необхідні іконки
import styles from './ContactList.module.css'; // Імпортуємо CSS-модуль

function Contact({ contact, onDeleteContact }) {
  return (
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
      <button className={styles.deleteButton} onClick={() => onDeleteContact(contact.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
}

export { Contact, ContactList };
