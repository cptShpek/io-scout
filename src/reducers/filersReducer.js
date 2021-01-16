import { appActionsType } from '../constants';

const initState = {
  filteredAuthors: [],
  authors: [],
  currentPage: 0,
  pagesCount: 0,
};

const filtersReducer = (state = initState, action) => {
  const authors = state.authors;
  switch (action.type) {
    case appActionsType.GET_ALL_AUTHORS:
      return {
        ...state,
        currentPage: 1,
        authors: action.authors,
        filteredAuthors: [],
        pagesCount: action.pagesCount,
      };

    case appActionsType.PAGINATION: {
      let goToPage = state.currentPage + action.dirrection;
      if (goToPage < 1) {
        goToPage = 1;
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
      const name = action.name;
      const filteredAuthors = state.authors.filter(
        (author) =>
          author.name.slice(0, name.length) === name || author.name.split(' ')[1].slice(0, name.length) === name,
      );
      const pagesCount = Math.ceil(filteredAuthors.length / 10);
      return {
        ...state,
        currentPage: 1,
        filteredAuthors,
        pagesCount,
      };
    }

    case 'pageviewsup': {
      const filteredAuthors = state.authors;
      filteredAuthors.sort((a, b) => a.pageviews - b.pageviews);
      return {
        ...state,
        filteredAuthors,
      };
    }

    case 'pageviewsdown': {
      const filteredAuthors = state.authors;
      filteredAuthors.sort((a, b) => b.pageviews - a.pageviews);
      return {
        ...state,
        filteredAuthors,
      };
    }

    case 'nameup': {
      const filteredAuthors = state.authors;
      filteredAuthors.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        filteredAuthors,
      };
    }

    case 'namedown': {
      const filteredAuthors = state.authors;
      filteredAuthors.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        filteredAuthors,
      };
    }
    default:
      return state;
  }
};

export default filtersReducer;
