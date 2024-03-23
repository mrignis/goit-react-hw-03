import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import { nanoid } from 'nanoid'; // Імпорт функції для генерації унікальних ідентифікаторів
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Імпорт іконки телефону
import styles from './components/App.module.css'; // Імпорт CSS-модулю для стилізації App

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
  const [idCounter, setIdCounter] = useState(5); // Початкове значення лічильника ідентифікаторів

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addContact = newContact => {
    const newContactWithId = { ...newContact, id: `id-${idCounter}` };
    setContacts(prevContacts => [...prevContacts, newContactWithId]);
    setIdCounter(prevCounter => prevCounter + 1); // Збільшуємо лічильник на одиницю
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={searchQuery} onChange={setSearchQuery} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
