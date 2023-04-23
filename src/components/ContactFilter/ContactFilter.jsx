import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
// import { selectVisibleContacts } from 'redux/selectors';

export const ContactFilter = () => {
  // const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
        <div>
          <h2>Contacts</h2>
          <label >Find contacts by name </label>
          <input
            type="text"
            name="filter"
            onChange={e => {
              const { value } = e.target;
              const action = filterContact(value);
              dispatch(action);
            }}
          />
        </div>
    </>
  );
};

