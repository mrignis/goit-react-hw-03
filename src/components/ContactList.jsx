import React from 'react';
import Contact from './Contact';
import styles from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact, index) => (
        <Contact key={index} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
}

export default ContactList;
