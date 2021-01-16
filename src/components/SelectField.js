import React, { useState } from 'react';
import allActions from '../actions/index';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';
const { Option } = Select;

function SelectField() {
  const dispatch = useDispatch();

  function handleChange(val) {
    dispatch(allActions.filtersActions.filteredBy(val));
  }

  return (
    <>
      <Select onChange={handleChange} defaultValue="Сортировать" style={{ width: 120 }}>
        <Option value="pageviewsup">Просмотры по возрастанию</Option>
        <Option value="pageviewsdown">Просмотры по убыванию</Option>
        <Option value="nameup">Имя от А до Я</Option>
        <Option value="namedown">Имя от Я до А</Option>
      </Select>
    </>
  );
}

export default SelectField;
