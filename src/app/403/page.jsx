// app/403/page.js
import React from 'react';

const Forbidden = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">403</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uetssss!</p>

        <p className="mt-4 text-gray-500">Unathorized.</p>

        <a
          href="/dashboard"
          className="btn mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Forbidden;
