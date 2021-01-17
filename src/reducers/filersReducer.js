import { appActionsType } from '../constants';

// helper //

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//

const initState = {
  filteredAuthors: [],
  authors: [],
  currentPage: 0,
  pagesCount: 0,
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case appActionsType.GET_ALL_AUTHORS:
      const authors = action.authors;
      const pagesCount = Math.ceil(authors.length / 10);
      authors.sort((a, b) => b.pageviews - a.pageviews);
      for (let i = 0; i < 3; i++) {
        authors[i].id = `${i + 1}`;
      }
      authors.forEach((author) => {
        author.color = getRandomColor();
      });
      return {
        ...state,
        currentPage: 1,
        authors,
        filteredAuthors: authors,
        pagesCount: pagesCount,
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
          author.name.slice(0, name.length).toLowerCase() === name.toLowerCase() ||
          author.name.split(' ')[1].slice(0, name.length).toLowerCase() === name.toLowerCase(),
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
