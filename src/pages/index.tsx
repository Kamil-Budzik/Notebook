import type { NextPage } from 'next';
import Head from 'next/head';

import Sidebar from '../components/Sidebar/Sidebar';

const Home: NextPage = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-center py-2">
      <Head>
        <title>Notebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-100 m-auto flex max-w-[800px]">
        <Sidebar />
        <section className="w-3/5 px-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod
          adipisci libero inventore ab ipsam cum deleniti officiis deserunt
          expedita esse, autem totam! Impedit pariatur quis molestias! Quia, quo
          dicta? Veritatis illo fugiat eum debitis qui! Distinctio pariatur
          ducimus porro rem, soluta excepturi? Porro fugit officiis eligendi
          accusantium ratione. Minus quam quisquam consequatur tenetur est non
          delectus! Iusto, nam. Iusto. Quaerat molestiae, porro fugiat nemo
          laborum sint inventore totam suscipit? Itaque recusandae nesciunt
          cumque at molestiae, exercitationem ullam deserunt libero illum
          quibusdam ad similique dolores aut dolorum aspernatur veritatis a.
          Accusamus quidem quo delectus repudiandae tenetur asperiores,
          praesentium, natus temporibus beatae quam voluptas excepturi earum
          laborum commodi dolorem eos? Molestias cumque illum nulla voluptatibus
          suscipit quasi quod ducimus ratione mollitia? Accusantium, nemo earum.
          Dignissimos quos cum inventore ad laudantium eveniet quod commodi,
          rerum similique, atque, aliquam possimus esse numquam tempora. Ipsa,
          expedita. Natus nihil deleniti ipsa at unde dignissimos placeat!
        </section>
      </main>
    </div>
  );
};

export default Home;
