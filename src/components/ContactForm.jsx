import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Імпортуємо Yup для валідації
import styles from './ContactForm.module.css'; // Імпортуємо CSS-модуль

function ContactForm({ onSubmit }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required').min(3, 'Name must be at least 3 characters').max(50, 'Name cannot exceed 50 characters'),
    number: Yup.string().required('Required').min(3, 'Number must be at least 3 characters').max(50, 'Number cannot exceed 50 characters')
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema} // Додаємо схему валідації Yup
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
