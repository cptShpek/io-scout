import { appActionsType } from '../constants';
import authorsActions from './authorsActions';

const init = () => authorsActions.getAllAuthors();

const findByName = (name) => ({
  type: appActionsType.FIND_BY_NAME,
  name,
});

const findBy = (options) => ({
  type: appActionsType.FILTERED_BY,
  options,
});

const filteredBy = (value) => {
  console.log(value);
  return { type: value };
};

const pagination = (dirrection) => ({
  type: appActionsType.PAGINATION,
  dirrection,
});

export default {
  findByName,
  findBy,
  filteredBy,
  init,
  pagination,
};
