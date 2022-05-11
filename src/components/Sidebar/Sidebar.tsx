import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import Input from '../Input/Input';

const Sidebar = () => {
  return (
    <aside>
      <Input />
      <div className="flex items-center justify-between pb-8">
        <h1 className="text-4xl font-bold">All Notes</h1>
        <span>
          <AiOutlinePlus className="cursor-pointer text-4xl transition hover:text-sky-500" />
        </span>
      </div>
      <ul>
        <li className="cursor-pointer py-2 text-lg transition hover:text-sky-500">
          Drunken driving is a serious problem.
        </li>
        <li className="cursor-pointer py-2 text-lg transition hover:text-sky-500">
          Drunken driving is a serious problem.
        </li>
        <li className="cursor-pointer py-2 text-lg transition hover:text-sky-500">
          Drunken driving is a serious problem.
        </li>
        <li className="cursor-pointer py-2 text-lg transition hover:text-sky-500">
          Drunken driving is a serious problem.
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
