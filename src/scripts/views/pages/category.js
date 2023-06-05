const TheMealDbSource = {
  async searchMealByCategory(category) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const responseJson = await response.json();
    return responseJson.meals;
  },
};

const createFoodItemTemplate = (food) => `
  <div class="food-item">
    <div class="food-item__header">
      <img class="food-item__header__poster" src="${food.strMealThumb}" alt="${food.strMeal}">
      <div class="food-item__header__rating">
        <p>⭐️<span class="food-item__header__rating__score">${food.strCategory}</span></p>
      </div>
    </div>
    <div class="food-item__content">
      <h3><a href="/#/detail/${food.idMeal}">${food.strMeal}</a></h3>
    </div>
  </div>
`;

const CategoryFood = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">List Food</h2>
        <div class="search-container">
          <select id="categorySelect" class="category-select">
            <option value="" selected>All Categories</option>
            <option value="Beef">Beef</option>
            <option value="Chicken">Chicken</option>
            <option value="Dessert">Dessert</option>
            <!-- Tambahkan opsi kategori lainnya sesuai kebutuhan -->
          </select>
          <button id="searchButton" class="search-button">Search</button>
        </div>
        <div id="searchMessage" class="search-message"></div>
        <div id="foods" class="foods"></div>  
      </div>
    `;
  },

  async afterRender() {
    const foodsContainer = document.querySelector('#foods');
    const categorySelect = document.querySelector('#categorySelect');
    const searchButton = document.querySelector('#searchButton');
    const searchMessage = document.querySelector('#searchMessage');

    const renderFoods = async (foods) => {
      foodsContainer.innerHTML = '';

      if (foods === null) {
        searchMessage.innerHTML = '';
      } else if (foods.length > 0) {
        foods.forEach((food) => {
          foodsContainer.innerHTML += createFoodItemTemplate(food);
        });
      }

      if (searchMessage) {
        searchMessage.innerHTML = '';
      }
    };

    const searchFoods = async () => {
      const selectedCategory = categorySelect.value;
      if (selectedCategory.trim() !== '') {
        try {
          searchMessage.innerHTML = 'Searching...';

          const foods = await TheMealDbSource.searchMealByCategory(selectedCategory);
          renderFoods(foods);

          if (foods === null || foods.length === 0) {
            searchMessage.innerHTML = `No meals found in the "${selectedCategory}" category`;
          } else {
            searchMessage.innerHTML = `Showing results for category: "${selectedCategory}"`;
          }
        } catch (error) {
          console.error(error);
          searchMessage.innerHTML = 'Failed to fetch data';
        }
      } else {
        searchMessage.innerHTML = 'Please select a category';
      }
    };

    searchButton.addEventListener('click', searchFoods);

    categorySelect.addEventListener('change', searchFoods);

    renderFoods([]);
  },
};

export default CategoryFood;
