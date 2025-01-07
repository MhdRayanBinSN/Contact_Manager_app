import React from 'react';
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactCard from "./ContactCard"
import ContactList from "./ContactList"

function App() {
  const contacts =[ {
    "id":1,
    "name":"rayan",
    "email":"rayan6203@gmail.com"
  }, {
    "id":2,
    "name":"raihan",
    "email":"raihan6203@gmail.com"
  }]
  return (
    <div className='ui container center'>
      <Header />
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
    
  );
}

export default App;
