import React from "react";

import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from "./ContactList/ContactList";

import css from './App.module.css'; 

export const App = () => {
  return(
      <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm/>
          <h2>Contacts</h2>
           <ContactFilter/>
          <ContactList/> 
      </div>
  )
}


