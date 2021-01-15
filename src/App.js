import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import HomePage from './Pages/HomePage';
import { getAllAuthors } from './actions/index';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
