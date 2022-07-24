import { useState } from 'react';
import propTypes from 'prop-types';

export const SearchBox = ({ value, onSubmit }) => {
  const [queue, setQueue] = useState(value);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(queue);
      }}
    >
      <input
        type="text"
        value={queue === value ? value : queue}
        onChange={e => setQueue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
SearchBox.propTypes = {
  value: propTypes.string,
  onSubmit: propTypes.func,
};
