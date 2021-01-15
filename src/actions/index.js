import { appActionsType } from '../constants';

export const getAllAuthors = () => {
  return (dispatch) => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((authors) => {
        const pagesCount = Math.ceil(authors.length / 10);
        authors.sort((a, b) => b.pageviews - a.pageviews);
        const topAuthors = [];
        for (let i = 0; i < 3; i++) {
          topAuthors.push(authors.shift());
        }
        return dispatch({ type: appActionsType.GET_ALL_AUTHORS, authors, topAuthors, pagesCount });
      })
      .catch((err) => console.log(err));
  };
};

export const findByName = (name) => ({
  type: appActionsType.FIND_BY_NAME,
  name,
});

export const pagination = (dirrection) => ({
  type: appActionsType.PAGINATION,
  dirrection,
});
