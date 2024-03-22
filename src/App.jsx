import React, { useState, useEffect } from 'react';
import { Contact, ContactList } from './components/ContactList';

import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Імпортуємо faPhone
import styles from './components/App.module.css'; // імпорт CSS-модулю для стилізації App

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={searchQuery} onChange={setSearchQuery} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} faPhone={faPhone} /> {/* Передаємо faPhone до ContactList */}
    </div>
  );
}

export default App;
