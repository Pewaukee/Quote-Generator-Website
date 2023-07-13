'use client';
import React, { useEffect, useState } from 'react';
import GenerateQuote from './components/GenerateQuote';

export default function Home() {
  return (
    <>
      <div>
        <GenerateQuote prompt="Tell me a joke" />
      </div>
    </>
  );
}
