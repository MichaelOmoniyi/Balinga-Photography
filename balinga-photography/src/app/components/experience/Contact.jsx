import React from 'react'
import dynamic from 'next/dynamic';
import { Section } from 'lucide-react';

const Form = dynamic(() => import("@/app/components/contact/Form"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Contact = () => {
  return (
    <div className='section'>
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white font-serif mb-4">
        Get in Touch Now
      </h1>
      <Form />
    </div>
  );
}

export default Contact