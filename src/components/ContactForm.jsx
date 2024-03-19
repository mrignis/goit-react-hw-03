// ContactForm.jsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css'; // імпортуємо CSS-модуль

function ContactForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(50, 'Name must be at most 50 characters'),
    number: Yup.string().required('Number is required').min(3, 'Number must be at least 3 characters').max(50, 'Number must be at most 50 characters'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit({ id: Math.random().toString(36).substr(2, 9), ...values }); // Генерація випадкового ідентифікатора
    resetForm(); // Очищення форми після відправлення
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className={styles.contactForm}> {/* Додаємо клас з CSS-модуля */}
        <div className={styles.formGroup}> {/* Додаємо клас з CSS-модуля */}
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" className={styles.inputField} /> {/* Додаємо клас з CSS-модуля */}
          <ErrorMessage name="name" component="div" className={styles.error} /> {/* Додаємо клас з CSS-модуля */}
        </div>
        <div className={styles.formGroup}> {/* Додаємо клас з CSS-модуля */}
          <label htmlFor="number">Number:</label>
          <Field type="text" id="number" name="number" className={styles.inputField} /> {/* Додаємо клас з CSS-модуля */}
          <ErrorMessage name="number" component="div" className={styles.error} /> {/* Додаємо клас з CSS-модуля */}
        </div>
        <button type="submit" className={`${styles.submitButton} ${styles.btn}`}>Add contact</button> {/* Додаємо класи з CSS-модуля */}
      </Form>
    </Formik>
  );
}

export default ContactForm;
