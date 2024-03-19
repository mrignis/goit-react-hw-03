import React from 'react';
import styles from './ContactList.module.css'; // Імпортуємо CSS-модуль


function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}> {/* Додаємо клас з CSS-модуля */}
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}> {/* Додаємо клас з CSS-модуля */}
          <div>
            <span className={styles.contactName}>{contact.name}:</span>
          </div>
          <div>
            <span className={styles.contactNumber}>{contact.number}</span>
          </div>
          <button className={styles.deleteButton} onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

