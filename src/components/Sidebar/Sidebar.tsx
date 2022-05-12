import Link from 'next/link';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import mockedData from '../../data/mockedData';

import Input from '../Input/Input';
import Navlink from '../Navlink/Navlink';

const Sidebar = () => {
  const links = mockedData.map(({ title, id }) => ({ id, title }));

  return (
    <aside>
      <Input />
      <div className="flex items-center justify-between pb-8">
        <Link href="/">
          <a>
            <h1 className="text-4xl font-bold transition hover:text-sky-500">
              All Notes
            </h1>
          </a>
        </Link>
        <Link href="/note-manager">
          <a>
            <AiOutlinePlus className="cursor-pointer text-4xl transition hover:text-sky-500" />
          </a>
        </Link>
      </div>
      <ul>
        {links?.map(({ id, title }) => (
          <Navlink key={id} id={id} content={title} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
