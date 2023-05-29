import CONFIG from './config';

const API_ENDPOINT = {
  SEARCH_FOOD: `${CONFIG.BASE_URL}search.php?s=Arr`,
  DETAIL: (id) => `${CONFIG.BASE_URL}lookup.php?i=${id}`,
};

export default API_ENDPOINT;
