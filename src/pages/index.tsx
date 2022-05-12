import React from 'react';
import { BsDot } from 'react-icons/bs';
import Layout from '../components/Layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <section className="px-12 md:w-3/5">
        <header>
          <h1 className="text-4xl font-bold">Welcome</h1>
        </header>
        <article className="my-24 text-2xl font-semibold">
          <p>I will add app introduction/documentation here</p>
        </article>
      </section>
    </Layout>
  );
};

export default HomePage;
