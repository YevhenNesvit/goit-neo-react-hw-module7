import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Required"),
    number: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <div className={styles.contactFormContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.contactForm}>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field id="number" name="number" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
