import { useEffect } from 'react';
import { useState } from 'react';
import fetchMovies from './services/API-MovieDB';

export const App = () => {
  const [hits, setHits] = useState([]);
  // const [page, setPage] = useState(1);
  // const [endpoint, setEndpoint] = useState('');
  // const [queue, setQueue] = useState('');

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const movies = await fetchMovies('trending', 'all/week');
        setHits(movies);
      } catch (error) {}
    }
    fetchMovieData();
    return;
  }, []);
  console.log(hits);
  return (
    <>
      <div>Hello</div>
      <ul>
        {hits.map(({ id, original_title, name }) => {
          return <li key={id}>{original_title || name}</li>;
        })}
      </ul>
    </>
  );
};
