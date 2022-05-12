import React, { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import { Formik, Field, Form } from 'formik';

import Button from '../components/Button/Button';
import Layout from '../components/Layout/Layout';
import DatePickerField from '../components/DatePickerField/DatePickerField';

interface Values {
  title: string;
  category: string;
  date: Date;
  content: string;
}

const NoteManager = () => {
  return (
    <Layout>
      <Formik
        initialValues={{
          title: '',
          category: '',
          date: new Date(),
          content: '',
        }}
        onSubmit={(values: Values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <Form className="px-12 md:w-3/5">
          <header>
            <Field
              name="title"
              className="border-b-2 text-4xl font-bold outline-none"
              placeholder="Title"
            />
            <div className="my-2 inline-flex items-center font-semibold">
              <Field
                component="select"
                name="category"
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                placeholder="Select a Category"
              >
                <option value="Work">Work</option>
                <option value="Studying">Studying</option>
                <option value="Passion">Passion</option>
              </Field>
              <span className="text-2xl">
                <BsDot />
              </span>
              <DatePickerField name="date" />
            </div>
          </header>
          <div className="mb-24">
            <Field
              component="textarea"
              className="min-h-[500px] w-full resize-none border-2 px-2 py-4 outline-none"
              placeholder="Write a note..."
              name="content"
            />
          </div>
          <Button type="submit">Add</Button>
        </Form>
      </Formik>
    </Layout>
  );
};

export default NoteManager;
