import type { NextPage } from 'next';

import Layout from '../components/Layout/Layout';

import NoteSection from '../components/NoteSection/NoteSection';
import Sidebar from '../components/Sidebar/Sidebar';

const Home: NextPage = () => {
  return (
    <Layout>
      <NoteSection />
    </Layout>
  );
};

export default Home;
