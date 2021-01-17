import { appActionsType } from '../constants';

const initState = {
  authors: [],
};

const authorsReducer = (state = initState, action) => {
  switch (action.type) {
    case appActionsType.GET_ALL_AUTHORS:
      return {
        ...state,
        authors: action.authors,
      };

    default:
      return state;
  }
};

export default authorsReducer;
