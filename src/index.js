import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './index.css';
import '../node_modules/modern-normalize/modern-normalize.css';
// import PaginatedItems from 'components/services/Pagination(not_Work)';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* goit-react-hw-05-movies */}
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById('container')).render(
//   <React.StrictMode>
//     <PaginatedItems itemsPerPage={4} />
//   </React.StrictMode>
// );
