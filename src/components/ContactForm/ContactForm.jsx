import { useState } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contactsSlice";

import css from '../App.module.css'; 

export const ContactForm = () => {

  const contacts = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = event => {
        const { name, value } = event.target;
    
        if (name === 'name') {
            setName(value);
          } else if (name === 'number') {
            setNumber(value);
          } else {
            return;
          }
  }

  const handleSubmit = event  => {
      event.preventDefault();

      const contactInList = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())

      if(contactInList){
        alert(`contact ${name} already`)
        return;
      };

      const contact = {
        name,
        number,
        id: nanoid(),
      };

      dispatch(addContact(contact));
      resetInput();
  };
  
  const resetInput = () =>{
      setName('');
      setNumber('');
  };

  return(
              <form
                className={css.container}
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <label >
                  Name
                  <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleInput}
                    value={name}
                  />
                </label>
                <label>
                  Number
                  <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleInput}
                    value={number}
                  />
                </label>
                <button type="submit">
                  Add contact
                </button>
              </form>
  )
}





















// export const ContactForm = ({handleSubmit}) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleInput = event => {
//     const { name, value } = event.target;

//     if (name === 'name') {
//         setName(value);
//       } else if (name === 'number') {
//         setNumber(value);
//       } else {
//         return;
//       }
//   }

//   const onSubmit = event  => {
//      event.preventDefault();
//      handleSubmit(name, number);
//      resetInput();
//   }

//   const resetInput = () =>{
//     setName('');
//     setNumber('');
//   }

//   return (
//               <form
//                 className={css.container}
//                 autoComplete="off"
//                 onSubmit={onSubmit}
//               >
//                 <label >
//                   Name
//                   <input
//                     type="text"
//                     name="name"
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                     required
//                     onChange={handleInput}
//                     value={name}
//                   />
//                 </label>
//                 <label>
//                   Number
//                   <input
//                     type="tel"
//                     name="number"
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                     required
//                     onChange={handleInput}
//                     value={number}
//                   />
//                 </label>
//                 <button type="submit">
//                   Add contact
//                 </button>
//               </form>
//             );
// }













