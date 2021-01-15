import React from 'react';
import { useSelector } from 'react-redux';

import InputField from './InputField';
import AuthorsList from './AuthorsList';
import Pagination from './Pagination';

function Home() {
  const searching = useSelector((state) => state.searching);
  let authors;
  searching
    ? (authors = useSelector((state) => state.filteredAuthors))
    : (authors = useSelector((state) => state.authors));

  const topAuthors = useSelector((state) => state.topAuthors);
  const currentPage = useSelector((state) => state.currentPage);
  let AuthorsOnPage = [];

  if (currentPage === 0) {
    AuthorsOnPage = authors.slice(0, 7);
  } else {
    AuthorsOnPage = authors.slice(currentPage * 10 - 10, currentPage * 10);
  }

  return (
    <>
      <div className="Authors">
        <InputField />
        {currentPage === 0 ? <AuthorsList authors={topAuthors} /> : null}
        <AuthorsList authors={AuthorsOnPage} />
      </div>
      <Pagination />
    </>
  );
}

export default Home;
