import React from 'react';
import { useSelector } from 'react-redux';

import InputField from './InputField';
import AuthorsList from './AuthorsList';
import Pagination from './Pagination';
import SelectField from './SelectField';

function Home() {
  const state = useSelector((state) => state.filtersReducer);
  const currentPage = state.currentPage;
  const filteredAuthors = state.filteredAuthors;

  const AuthorsOnPage = filteredAuthors.slice(currentPage * 10 - 10, currentPage * 10);

  return (
    <>
      <div className="Authors">
        <InputField />
        <SelectField />
        <AuthorsList authors={AuthorsOnPage} />
      </div>
      <Pagination />
    </>
  );
}

export default Home;
