import React from "react";
import Head from "next/head";
import Links from "../components/linksPage/Links";
import "../components/linksPage/style.css"

const page = () => {
  return (
    <>
      <head>
        <title>Links - Balinga Photography</title>
        <meta name="description" content="Capturing your best moments" />
      </head>
      <Links />
    </>
  );
};

export default page;
