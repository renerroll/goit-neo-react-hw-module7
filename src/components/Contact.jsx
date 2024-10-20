/* eslint-disable react/prop-types */
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsOps";

import classes from "./Contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact));
  };

  return (
    <div className={classes["contact"]}>
      <div className={classes["contact-info"]}>
        <FaUser />
        <span className={classes["contactName"]}>{contact.name}</span>
        <FaPhoneAlt />
        <span className={classes["contactNumber"]}>{contact.number}</span>
      </div>
      <button
        onClick={handleDelete}
        className={classes["contact-delete"]}
        type="button"
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
