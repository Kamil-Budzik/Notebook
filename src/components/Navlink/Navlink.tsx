import Link from 'next/link';
import React from 'react';

interface Props {
  content: string;
  id: string;
}

const Navlink = ({ content, id }: Props) => {
  return (
    <Link href={`/${id}`}>
      <a>
        <li className="cursor-pointer py-2 text-lg font-semibold transition hover:text-sky-500">
          {content}
        </li>
      </a>
    </Link>
  );
};

export default Navlink;
