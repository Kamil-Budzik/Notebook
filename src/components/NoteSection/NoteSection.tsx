import React from 'react';
import { BsDot } from 'react-icons/bs';

import Button from '../Button/Button';

const NoteSection = () => {
  return (
    <section className="px-12 md:w-3/5">
      <header>
        <h1 className="text-4xl font-bold">Is this love?</h1>
        <div className="my-2 inline-flex items-center font-semibold">
          <p>Category</p>
          <span className="text-2xl">
            <BsDot />
          </span>
          <p>Date</p>
        </div>
      </header>
      <article className="mb-24">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor,
          reprehenderit quasi impedit, doloribus magni rem laudantium voluptatem
          ipsam veritatis rerum quae vitae esse asperiores repellat voluptas!
          Nihil, quos magni! Voluptates molestiae soluta facere dolorem,
          obcaecati aspernatur voluptatem ab esse incidunt reprehenderit
          consectetur pariatur corrupti nam error alias sint accusamus.
          Laboriosam, in! Rem officiis qui amet repudiandae iste quibusdam.
          Esse! Laborum alias cupiditate impedit inventore voluptates officiis
          aut perferendis quae eum facere explicabo magni saepe, pariatur
          asperiores tenetur, facilis dolor quidem possimus non. Harum rerum
          dolore aliquam quae sed error? Aliquam cumque perferendis est et
          laborum quas magnam id, quo amet totam accusamus, repellat quidem
          unde, tempore nisi illum animi voluptas quod voluptates mollitia quasi
          saepe quibusdam fuga. Est, corrupti. Nihil amet ipsam, excepturi nulla
          fugit at iusto autem dolore atque quas eos a assumenda vero totam!
          Vero, magnam? Eum vero sapiente sunt in modi quaerat quisquam rerum
          ab. Quidem!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor,
          reprehenderit quasi impedit, doloribus magni rem laudantium voluptatem
          ipsam veritatis rerum quae vitae esse asperiores repellat voluptas!
          Nihil, quos magni! Voluptates molestiae soluta facere dolorem,
          obcaecati aspernatur voluptatem ab esse incidunt reprehenderit
          consectetur pariatur corrupti nam error alias sint accusamus.
        </p>
      </article>
      <Button>Edit</Button>
      <span className="ml-12">
        <Button variant="red">Delete</Button>
      </span>
    </section>
  );
};

export default NoteSection;
