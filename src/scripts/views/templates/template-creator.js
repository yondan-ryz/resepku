/* eslint-disable no-nested-ternary */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (food) => `
  <h2 class="food__title">${food.strMeal}</h2>
  <img class="food__poster" src="${CONFIG.BASE_IMAGE_URL + food.pictureId}" alt="${food.name}" />
  <div class="food__info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${food.address}</p>
    <h4>City</h4>
    <p>${food.city}</p>
    <h4>Rating</h4>
    <p>${food.rating}</p>
  </div>
  </div>
`;

const createRestaurantItemTemplate = (food) => `
  <div class="food-item">
    <div class="food-item__header">
      <img class="food-item__header__poster" alt="${food.strMeal}"
           src="${food.strMealThumb}">
      <div class="food-item__header__floating">
        <p>🎌<span class="food-item__header__floating__text">${food.strArea}</span></p>
      </div>
    </div>
    <div class="food-item__content">
      <h3><a href="/#/detail/${food.idMeal}">${food.strMeal}</a></h3>
    </div>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
};
