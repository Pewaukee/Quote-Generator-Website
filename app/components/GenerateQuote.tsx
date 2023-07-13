'use client';

import React, { useEffect, useState } from 'react';

export default function GenerateQuote(
  { prompt }: 
  { prompt: string }
  ) {
  
  const [quote, setQuote] = useState('Generating Quote...'); // [state, function to update state]
  useEffect(() => {
    fetch(`http://localhost:8080/api/python/generate?prompt=${encodeURIComponent(prompt)}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.quote);
      })
      .catch((err) => console.log(err));
  }, []); // empty array for useEffect means only runs once

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
}
