import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from '../SearchBox/SearchBox';
import { fetchMovieById, searchMovies } from 'components/services/API-MovieDB';
import MovieList from 'components/MovieList/MovieLIst';

const Movies = () => {
  const location = useLocation();
  const [foundedFilms, setFoundedFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queueParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queueParam === '') {
      return;
    }
    searchMovies(queueParam).then(setFoundedFilms);
  }, [queueParam]);
  const changeSearchValue = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <SearchBox value={queueParam} onSubmit={changeSearchValue} />
      {foundedFilms.length > 0 && (
        <>
          <MovieList
            data={foundedFilms}
            moreDetails={fetchMovieById}
            location={location}
            state={{ from: location }}
          />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};
export default Movies;
