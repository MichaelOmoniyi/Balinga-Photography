import React from 'react'
import Head from 'next/head'
import Video from '../components/video/Video'

const page = () => {
  return (
    <>
      <head>
        <title>Videos - Balinga Photography</title>
        <meta name="description" content="Capturing your best moments" />
      </head>
      <Video />
    </>
  );
}

export default page