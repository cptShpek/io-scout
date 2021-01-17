import { appActionsType } from '../constants';

const initState = {
  filteredAuthors: [],
  authors: [],
  currentPage: 0,
  pagesCount: 0,
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case appActionsType.GET_ALL_AUTHORS:
      return {
        ...state,
        currentPage: 1,
        authors: action.authors,
        filteredAuthors: action.authors,
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
      let filteredAuthors = state.authors.filter(
        (author) =>
          author.name.slice(0, name.length) === name || author.name.split(' ')[1].slice(0, name.length) === name,
      );
      const pagesCount = Math.ceil(filteredAuthors.length / 10);
      filteredAuthors = filteredAuthors.length > 0 ? filteredAuthors : [];
      return {
        ...state,
        currentPage: 1,
        filteredAuthors,
        pagesCount,
      };
    }

    case appActionsType.PAGEVIEWSUP: {
      const filteredAuthors = state.authors;
      filteredAuthors.sort((a, b) => a.pageviews - b.pageviews);
      return {
        ...state,
        filteredAuthors,
      };
    }

    case appActionsType.PAGEVIEWSDOWN: {
      const filteredAuthors = state.authors;
      filteredAuthors.sort((a, b) => b.pageviews - a.pageviews);
      return {
        ...state,
        filteredAuthors,
      };
    }

    case appActionsType.NAMEUP: {
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

    case appActionsType.NAMEDOWN: {
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
