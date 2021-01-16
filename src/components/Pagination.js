import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import allActions from '../actions/index';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filtersReducer.currentPage);
  const pagLinksRef = useRef();

  useEffect(() => {
    const clickHandler = (e) => {
      switch (e.target.name) {
        case 'next':
          dispatch(allActions.filtersActions.pagination(1));
          break;
        case 'prev':
          dispatch(allActions.filtersActions.pagination(-1));
          break;
        default:
      }
    };
    function propaginations() {
      pagLinksRef.current
        .querySelectorAll('a.page-link')
        .forEach((pagLink) => pagLink.addEventListener('click', clickHandler));
    }
    propaginations();
  }, []);

  return (
    <div className="pagination">
      <ul ref={pagLinksRef}>
        <li>
          <a className="page-link" name="prev">
            &laquo;
          </a>
        </li>
        <li>
          <span>{currentPage}</span>
        </li>
        <li>
          <a className="page-link" name="next">
            &raquo;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
