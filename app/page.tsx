'use client';
import React, { useEffect, useState } from 'react';
import GenerateQuote from './components/GenerateQuote';

export default function Home() {
  const [message, setMessage] = useState('Loading...');
  const [quote, setQuote] = useState('Generating Quote...');

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/python/test')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMessage(data.message);
  //     })
  //     .catch((err) => console.log(err));
  // }, []); // empty array for useEffect means only runs once

  return (
    <>
      <div>
        <p>{message}</p>
      </div>
      <div>
        <GenerateQuote prompt="Tell me a joke" />
      </div>
    </>
  );
}
