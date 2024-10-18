import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
