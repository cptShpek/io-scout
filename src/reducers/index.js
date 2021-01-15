import { appActionsType } from '../constants';

const initState = {
  topAuthors: [],
  authors: [],
  currentPage: 0,
  pagesCount: 0,
  filteredAuthors: [],
  searching: false,
};

const authorsReducer = (state = initState, action) => {
  switch (action.type) {
    case appActionsType.GET_ALL_AUTHORS:
      return {
        ...state,
        authors: action.authors,
        topAuthors: action.topAuthors,
        pagesCount: action.pagesCount,
      };

    case appActionsType.PAGINATION: {
      let goToPage = state.currentPage + action.dirrection;
      if (goToPage < 0) {
        goToPage = 0;
      }
      if (goToPage > state.pagesCount) {
        goToPage = state.pagesCount;
      }
      return {
        ...state,
        currentPage: goToPage,
      };
    }

    case appActionsType.FIND_BY_NAME: {
      const filteredAuthors = state.authors.filter(
        (author) => author.name.slice(0, action.name.length) === action.name,
      );
      const pagesCount = Math.ceil(filteredAuthors.length / 10);
      return {
        ...state,
        searching: true,
        currentPage: 0,
        filteredAuthors,
        pagesCount,
      };
    }

    default:
      return state;
  }
};

export default authorsReducer;
