// import { useEffect } from 'react';
// import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Layout/Layout';
import Cast from './Pages/FilmDetails/Cast';
import FilmDetails from './Pages/FilmDetails/FilmDetails';
import Home from './Pages/Home/Home';
// import fetchMovies from './services/API-MovieDB';

export const App = () => {
  // const [hits, setHits] = useState([]);
  // const [links, setLinks] = useState('');
  // const [page, setPage] = useState(1);
  // const [endpoint, setEndpoint] = useState('');
  // const [queue, setQueue] = useState(null);
  const location = useLocation();

  return (
    <Routes>
      {location.pathname === '/' ? (
        <Route
          path="/"
          element={
            <>
              <Layout />
              <Home />
            </>
          }
        ></Route>
      ) : (
        <Route path="/" element={<Layout />}>
          <Route path="movies/:id" element={<FilmDetails />}>
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
      )}
      {/* <Route path="/" element={<Layout />}> */}
      {/* <Route index element={<Navigate to="home" />} /> */}
      {/* <Route path="home" element={<Home />}> */}
      {/* <Route path=":id" element={<FilmDetails />}> */}
      {/* </Route> */}
      {/* <Route path="movies/:id" element={<FilmDetails />}>
        <Route path="cast" element={<Cast />} />
      </Route> */}

      {/* </Route> */}
      {/* </Route> */}
    </Routes>
  );
};
