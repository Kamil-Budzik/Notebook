import React from 'react';
import Button from '../components/Button/Button';

const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <section>
        <div className="">
          <form className="flex min-h-[500px] flex-col items-center justify-evenly rounded px-24 shadow">
            <div>
              <div className="mb-6 flex flex-col">
                <label htmlFor="signup-email">Email</label>
                <input
                  className="mb-5 w-full rounded border-2 border-gray-600 p-1 shadow-sm outline-sky-500"
                  type="email"
                  id="signup-email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  className="mb-5 w-full rounded border-2 border-gray-600 p-1 shadow-sm outline-sky-500"
                  type="password"
                />
              </div>
            </div>
            <Button submit>Log in</Button>
            <Button submit variant="yellow" small>
              Sign up
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
