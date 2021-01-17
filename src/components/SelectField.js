import React, { useState } from 'react';
import { filteredBy } from '../actions/index';
import { useDispatch } from 'react-redux';
import { Select, Row, Col } from 'antd';
const { Option } = Select;

function SelectField() {
  const dispatch = useDispatch();

  function handleChange(val) {
    dispatch(filteredBy(val));
  }

  return (
    <Row className="select">
      <Col span={12}>
        <Select
          bordered={false}
          dropdownClassName="filtersOptionsMenu"
          showArrow={false}
          onChange={handleChange}
          defaultValue="Сортировать"
        >
          <Option value="PAGEVIEWSUP">Просмотры по возрастанию</Option>
          <Option value="PAGEVIEWSDOWN">Просмотры по убыванию</Option>
          <Option value="NAMEUP">Имя от А до Я</Option>
          <Option value="NAMEDOWN">Имя от Я до А</Option>
        </Select>
      </Col>
    </Row>
  );
}

export default SelectField;
