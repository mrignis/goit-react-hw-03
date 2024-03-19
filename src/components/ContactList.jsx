import React from 'react';
import styles from './ContactList.module.css'; // Імпортуємо CSS-модуль

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}> {/* Додаємо клас з CSS-модуля */}
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}> {/* Додаємо клас з CSS-модуля */}
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
