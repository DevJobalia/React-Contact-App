import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContacList";


function App() {
  const LCOAL_STORAGE_KEY = 'contacts';
  const [contacts, setContact] = useState([]);
  const addContactHandler = (Contact) => {
    setContact([...contacts, Contact]);
  };

  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LCOAL_STORAGE_KEY));
    if (retriveContacts) setContact(retriveContacts);
  },[]);

  useEffect(()=>{
    if(!localStorage.getItem(LCOAL_STORAGE_KEY) || JSON.parse(localStorage.getItem(LCOAL_STORAGE_KEY)).length === 0){
      localStorage.setItem(LCOAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  },[contacts]);
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
