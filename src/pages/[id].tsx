import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout/Layout';
import NoteSection from '../components/NoteSection/NoteSection';
import { useAppSelector } from '../store/hooks';

const NoteDisplay = () => {
  const router = useRouter();
  const { id } = router.query;
  const { notes } = useAppSelector((state) => state.notes);
  const note = notes.filter((item) => item.id === id)[0];

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
