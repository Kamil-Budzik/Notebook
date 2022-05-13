import React from 'react';
import { BsDot } from 'react-icons/bs';
import dateFormat from 'dateformat';

import Button from '../Button/Button';

interface Props {
  title: string;
  category: string;
  date: Date;
  content: string;
}

const NoteSection = ({ title, category, date, content }: Props) => {
  return (
    <section className="px-12 md:w-3/5">
      <header>
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="my-2 inline-flex items-center font-semibold">
          <p>{category}</p>
          <span className="text-2xl">
            <BsDot />
          </span>
          <p>{dateFormat(date, 'dd.mm.yy')}</p>
        </div>
      </header>
      <article className="mb-24">
        <p>{content}</p>
      </article>
      <Button>Edit</Button>
      <span className="ml-12">
        <Button variant="red">Delete</Button>
      </span>
    </section>
  );
};

export default NoteSection;
