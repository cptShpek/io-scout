import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'antd';
import { pagination } from '../actions/index';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filtersReducer.currentPage);
  const authorsCount = useSelector((state) => state.filtersReducer.filteredAuthors.length);
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
    <Row justify="center" className="pagination" ref={pagLinksRef}>
      <Col span={1} className="pagination-item arrow">
        <a className="page-link" name="prev">
          &laquo;
        </a>
      </Col>

      <Col span={6} className="pagination-item">
        <span className="itemCounter">
          {currentPage * 10 - 10 === 0 ? 1 : currentPage * 10 - 10} -{' '}
          {currentPage * 10 > authorsCount ? authorsCount : currentPage * 10}
        </span>
      </Col>

      <Col span={1} className="pagination-item arrow">
        <a className="page-link" name="next">
          &raquo;
        </a>
      </Col>
    </Row>
  );
};

export default Pagination;
