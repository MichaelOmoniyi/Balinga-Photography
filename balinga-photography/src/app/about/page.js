import React from "react";
import Head from "next/head";
import About from "@/app/components/about/About";
import "../components/contact/style.css";

const Page = () => {
  return (
    <>
      <Head>
        <title>Know More About Balinga - Balinga Photography</title>
        <meta name="description" content="Info about Balinga" />
      </Head>
      <About />
    </>
  );
};

export default Page;
