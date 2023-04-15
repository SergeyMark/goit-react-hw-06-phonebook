import { useDispatch, useSelector } from "react-redux"; 
import { filterContact } from "redux/filterSlice";
import { selectVisibleContacts } from "redux/selectors";


export const ContactFilter = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return(
    <>
      {contacts.length > 0 && (
        <div>
            <label>Find contacts by name </label>
              <input
                type="text"
                name="filter"
                onChange={event => {
                  const { value } = event.target;
                  const action = filterContact(value)
                  dispatch(action)
                }}
              />
        </div>
      )}
    </>
  )
}



  
