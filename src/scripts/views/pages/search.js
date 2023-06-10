const TheMealDbSource = {
  async searchMealByName(keyword) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
    const responseJson = await response.json();
    return responseJson.meals;
  },
};

const createFoodItemTemplate = (food) => `
  <div class="food-item">
    <div class="food-item__header">
      <img class="food-item__header__poster" src="${food.strMealThumb}" alt="${food.strMeal}">
      <div class="food-item__header__floating">
        <p>⭐️<span class="food-item__header__floating__text">${food.strCategory}</span></p>
      </div>
    </div>
    <div class="food-item__content">
      <h3><a href="/#/detail/${food.idMeal}">${food.strMeal}</a></h3>
    </div>
  </div>
`;

const ListFood = {
  async render() {
    return `
    <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">HEAD</h1>
      <p class="hero__tagline">HALO DANI</p>
    </div>
  </div>
      <div class="content">
        <h2 class="content__heading">List Food</h2>
            <div class="hr-thin"></div>
        <div class="search-container">
          <input type="text" id="searchInput" class="search-input" placeholder="Search Foods">
          <button id="searchButton" class="search-button">Cari</button>
        </div>
        <div id="searchMessage" class="search-message"></div>
        <div id="foods" class="foods"></div>  
      </div>
    `;
  },

  async afterRender() {
    const foodsContainer = document.querySelector('#foods');
    const searchButton = document.querySelector('#searchButton');
    const searchInput = document.querySelector('#searchInput');
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

      // Hapus pesan "Makanan tidak ditemukan" jika ada
      if (searchMessage) {
        searchMessage.innerHTML = '';
      }
    };

    const searchFoods = async () => {
      const searchQuery = searchInput.value;
      if (searchQuery.trim() !== '') {
        try {
          // eslint-disable-next-line no-useless-concat
          searchMessage.innerHTML = 'Mencari makanan...' + '<br><img class="image-search-message" src="./images/loader.gif" alt="">';
          const foods = await TheMealDbSource.searchMealByName(searchQuery);
          renderFoods(foods);

          if (foods === null || foods.length === 0) {
            // eslint-disable-next-line no-useless-concat
            searchMessage.innerHTML = `Makanan "${searchQuery}" tidak ditemukan` + '<br><img class="image-notfound" src="./images/notfound.png" alt="">';
          } else {
            searchMessage.innerHTML = `Menampilkan pencarian dari kata kunci: "${searchQuery}"`;
          }
        } catch (error) {
          console.error(error);
          // eslint-disable-next-line no-useless-concat
          searchMessage.innerHTML = 'Tidak bisa memuat data' + '<br><img class="image-notfound" src="./images/errorsearch.png" alt="">';
        }
      } else {
        searchMessage.innerHTML = 'Masukan kata kunci terlebih dahulu';
      }
    };

    searchButton.addEventListener('click', searchFoods);

    searchInput.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchFoods();
      }
    });

    renderFoods([]); // Tampilkan daftar kosong saat halaman dibuka
  },
};

export default ListFood;
