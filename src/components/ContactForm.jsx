import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css'; // Імпортуємо CSS-модуль

function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.number) {
          errors.number = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" className={styles.inputField} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="number">Number:</label>
          <Field type="text" id="number" name="number" className={styles.inputField} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button type="submit" className={styles.submitButton}>Add Contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
