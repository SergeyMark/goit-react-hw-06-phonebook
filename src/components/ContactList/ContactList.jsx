import { useDispatch, useSelector } from "react-redux"; 
import { deleteContact } from "redux/contactsSlice";
import { selectVisibleContacts } from "redux/selectors";


export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 && (
        <ul>
            {contacts.map (({id, name, number}) => (
                <li key={id}>
                  {name} : {number}
                    <button
                      type="button"
                      onClick={() => {
                        const action = deleteContact(id);
                        dispatch(action);
                      }}
                    >
                      Delete
                    </button>
                </li>
            ))}
        </ul>
      )}
    </>
  )
}







// export const ContactList = ({ contacts, handleDelete }) => {
//     return (
//       <ul >
//         {contacts.map((contact, id) => (
//           <li key={id} >
//             {contact.name} : {contact.number}
//             <button
//               type="button"
//               onClick={() => handleDelete(contact.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     );
//   };
  
