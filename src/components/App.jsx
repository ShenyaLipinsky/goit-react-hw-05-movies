import fetchMovies from './services/API-MovieDB';

export const App = () => {
  console.log(fetchMovies('trending', 'all/week').then(res => res));
  return <div>Hello</div>;
};
