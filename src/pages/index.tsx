import type { NextPage } from 'next';
import Head from 'next/head';

import NoteSection from '../components/NoteSection/NoteSection';
import Sidebar from '../components/Sidebar/Sidebar';

const Home: NextPage = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-center py-2">
      <Head>
        <title>Notebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-100 m-auto flex max-w-[1020px] flex-col md:flex-row">
        <Sidebar />
        <NoteSection />
      </main>
    </div>
  );
};

export default Home;
