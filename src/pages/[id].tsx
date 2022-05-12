import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout/Layout';
import NoteSection from '../components/NoteSection/NoteSection';
import mockedData from '../data/mockedData';

const NoteDisplay = () => {
  const router = useRouter();
  const { id } = router.query;

  const note = mockedData.filter((item) => item.id === id)[0];

  return (
    <Layout>
      <NoteSection
        title={note?.title}
        category={note?.category}
        date={note?.date}
        content={note?.content}
      />
    </Layout>
  );
};

export default NoteDisplay;
