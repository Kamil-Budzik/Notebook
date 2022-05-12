import React, { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import Button from '../components/Button/Button';
import Layout from '../components/Layout/Layout';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const defaultState = {
  title: '',
  category: '',
  date: new Date(),
  content: '',
};

//TODO use FORMIK in a near future!!!!

const NoteManager = () => {
  const [note, setNote] = useState(defaultState);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(note);
    setNote(defaultState);
  };

  return (
    <Layout>
      <form className="px-12 md:w-3/5" onSubmit={handleSubmit}>
        <header>
          <input
            className="border-b-2 text-4xl font-bold outline-none"
            placeholder="Title"
            value={note.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNote({ ...note, title: e.target.value })
            }
          />
          <div className="my-2 inline-flex items-center font-semibold">
            <select
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-state"
              placeholder="Select a Category"
              onSelect={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setNote({ ...note, category: e.target.value })
              }
            >
              <option value="Work">Work</option>
              <option value="Studying">Studying</option>
              <option value="Passion">Passion</option>
            </select>
            <span className="text-2xl">
              <BsDot />
            </span>
            <DatePicker
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              selected={note.date}
              onChange={(date) => setNote({ ...note, date: date! })}
              maxDate={new Date()}
            />
          </div>
        </header>
        <div className="mb-24">
          <textarea
            value={note.content}
            className="min-h-[500px] w-full resize-none border-2 px-2 py-4 outline-none"
            placeholder="Write a note..."
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setNote({ ...note, content: e.target.value })
            }
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    </Layout>
  );
};

export default NoteManager;
