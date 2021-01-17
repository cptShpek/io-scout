import { appActionsType } from '../constants';

export const getAllAuthors = () => {
  return (dispatch) => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((authors) => {
        return dispatch({ type: appActionsType.GET_ALL_AUTHORS, authors });
      })
      .catch((err) => console.log(err));
  };
};

export const findByName = (name) => ({
  type: appActionsType.FIND_BY_NAME,
  name,
});

export const findBy = (options) => ({
  type: appActionsType.FILTERED_BY,
  options,
});

export const filteredBy = (value) => {
  return { type: value };
};

export const pagination = (dirrection) => ({
  type: appActionsType.PAGINATION,
  dirrection,
});
