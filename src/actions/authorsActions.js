import { appActionsType } from '../constants';

const getAllAuthors = () => {
  return (dispatch) => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((authors) => {
        const pagesCount = Math.ceil(authors.length / 10);
        authors.sort((a, b) => b.pageviews - a.pageviews);
        for (let i = 0; i < 3; i++) {
          authors[i].id = `${i + 1}`;
        }
        return dispatch({ type: appActionsType.GET_ALL_AUTHORS, authors, pagesCount });
      })
      .catch((err) => console.log(err));
  };
};

export default {
  getAllAuthors,
};
