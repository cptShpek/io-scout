import React from 'react';
import { useDispatch } from 'react-redux';

import { findByName } from '../actions/index';
import { Input } from 'antd';

function InputField() {
  const dispatch = useDispatch();

  function changeHandler(e) {
    dispatch(findByName(e.target.value));
  }

  const search = <img src="/media/images/search.png" />;
  return (
    <Input
      bordered={false}
      onChange={changeHandler}
      className="input"
      prefix={search}
      placeholder="Поиск авторов по имени"
    />
  );
}

export default InputField;
