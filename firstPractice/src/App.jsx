import './App.css';
import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const URL_ENDPOINT = `https://cataas.com/cat/`;
export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        setFact(data.fact);
        const threeFirstWords = fact?.split(' ', 3).join(' ');
        console.log(threeFirstWords);

        fetch(
          `${URL_ENDPOINT}/says/${threeFirstWords}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { _id } = response;
            setImageUrl(URL_ENDPOINT + _id);
          });
      });
  }, []);

  return (
    <main>
      <h1>Hello App</h1>
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
