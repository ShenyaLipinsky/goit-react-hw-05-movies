import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchCrew } from './API-MovieDB';

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map(item => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}
let fetchItems = [];
export async function crewDataPagination(id) {
  await fetchCrew(Number(id)).then(res => {
    // console.log(fetchItems);
    return (fetchItems = res);
  });
}

function PaginatedItems({ itemsPerPage = 4 }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState(fetchItems);

  //   console.log(items);

  useEffect(() => {
    setItems(fetchItems);
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    console.log(items);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default PaginatedItems;
