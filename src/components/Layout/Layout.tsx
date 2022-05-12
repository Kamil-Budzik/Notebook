import React from 'react';
import Head from 'next/head';

import Sidebar from '../Sidebar/Sidebar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="mt-16">
      <Head>
        <title>Notebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-100 m-auto flex max-w-[1024px] flex-col md:flex-row">
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
