import './App.css';
import { useEffect, useState } from 'react';
import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from './hooks/useCatImage';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const URL_ENDPOINT = `https://cataas.com/cat/`;
export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Hello App</h1>
      <button onClick={handleClick}>Change Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image based in the first three words of ${fact} `}
        ></img>
      )}
    </main>
  );
}
