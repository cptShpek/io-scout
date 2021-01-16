import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import HomePage from './Pages/HomePage';
import getAllActions from './actions/index';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActions.authorsActions.getAllAuthors());
    dispatch(getAllActions.filtersActions.init());
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
