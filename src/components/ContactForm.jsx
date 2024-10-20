import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsOps";

import classes from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};
const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("Required")
    .matches(phoneRegExp, "Number is not valid"),
});

function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const newContact = { name, number };

    dispatch(addContact(newContact));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      valdateOnBlur={false}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={classes["contact-form"]}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage
          className={classes["error-message"]}
          name="name"
          component="span"
        />

        <label htmlFor={numberId}>Number</label>
        <Field type="tel" name="number" id={numberId} />
        <ErrorMessage
          className={classes["error-message"]}
          name="number"
          component="span"
        />

        <button className={classes["add-button"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
