import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { pagination } from '../actions/index';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const pagLinksRef = useRef();

  useEffect(() => {
    const clickHandler = (e) => {
      switch (e.target.name) {
        case 'next':
          dispatch(pagination(1));
          break;
        case 'prev':
          dispatch(pagination(-1));
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
          <span>{currentPage + 1}</span>
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
