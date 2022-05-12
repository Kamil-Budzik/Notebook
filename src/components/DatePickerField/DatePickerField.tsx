import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ name }: { name: string }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField({ name });
  return (
    <DatePicker
      {...field}
      name={name}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white  focus:text-gray-500 focus:outline-none"
      maxDate={new Date()}
    />
  );
};

export default DatePickerField;
