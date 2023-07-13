'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // for post request

export default function GenerateQuote({ prompt }: { prompt: string }) {
  // determine the correct url to get the request from
  // based on production or development
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://quote-generator-website-blue.vercel.app'
      : 'http://localhost:8080';

  const url = `${baseUrl}/api/python/generate`;

  console.log(url);

  const [quote, setQuote] = useState('Generating Quote...'); // [state, function to update state]
  useEffect(() => {
    axios
      .post(url, {
        prompt: prompt,
      })
      .then((response) => {
        setQuote(response.data.quote);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // empty array for useEffect means only runs once

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
}
