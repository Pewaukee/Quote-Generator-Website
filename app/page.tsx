'use client';
import React, { useEffect, useState } from 'react'

export default function Home() {

  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:8080/api/python')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMessage(data.message);
    })
    .catch(err => console.log(err))
  }, []); // empty array for useEffect only runs once

  return (
    <div>{message}</div>
  )
}
