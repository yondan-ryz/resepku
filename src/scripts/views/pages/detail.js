const DetailFood = {
  async render() {
    return `
      <div class="content">
        <div id="detailFood" class="detailFood"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = window.location.hash.slice(1).toLowerCase();
    const urlParams = url.split('/');
    const detailId = urlParams[2];

    const foodDetailContainer = document.querySelector('#detailFood');
    foodDetailContainer.innerHTML = '';

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailId}`);
      const responseJson = await response.json();
      const foodDetail = responseJson.meals[0];

      if (foodDetail) {
        // Menampilkan elemen detail-item
        /* eslint-disable no-use-before-define */
        foodDetailContainer.innerHTML = `
          <div class="detail-item">
                        <h3 class="detail-item__title">${foodDetail.strMeal}</h3>
                        <div class="hr-thin"></div>
            <div class="detail-item__header">
              <img class="detail-item__header__poster" src="${foodDetail.strMealThumb}" alt="${foodDetail.strMeal}">
            </div>
            <div class="hr-line"></div>
            <div class="detail-item__content">
              <br>
              <h3>Intruksi:</h3>
              <p>${foodDetail.strInstructions}</p>
              <h3>Resep:</h3>
              <p>${foodDetail.strIngredient1}</p>
              <p>${foodDetail.strIngredient2}</p>
              <p>${foodDetail.strIngredient3}</p>
              <p>${foodDetail.strIngredient4}</p>
              <p>${foodDetail.strIngredient5}</p>
              <p>${foodDetail.strIngredient6}</p>
              <p>${foodDetail.strIngredient7}</p>
              <p>${foodDetail.strIngredient8}</p>
              <p>${foodDetail.strIngredient9}</p>
              <p>${foodDetail.strIngredient10}</p>
              <p>${foodDetail.strIngredient11}</p>
              <p>${foodDetail.strIngredient12}</p>
              <p>${foodDetail.strIngredient13}</p>
              <p>${foodDetail.strIngredient14}</p>
              <p>${foodDetail.strIngredient15}</p>
              <p>${foodDetail.strIngredient16}</p>
              <p>${foodDetail.strIngredient17}</p>
              <p>${foodDetail.strIngredient18}</p>
              <p>${foodDetail.strIngredient19}</p>
              <p>${foodDetail.strIngredient20}</p>
              <h3>Category</h3>
              <p>${foodDetail.strCategory}</p>
              <h3>Area:</h3>
              <p>${foodDetail.strArea}</p>
              <h3>Tag:</h3>
              <p>${foodDetail.strTags}</p>
              
              <h3>Video Youtube:</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${getYouTubeVideoId(foodDetail.strYoutube)}" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        `;
      } else {
        // Menampilkan pesan "Makanan tidak ditemukan"
        foodDetailContainer.innerHTML = '<p>Makanan tidak ditemukan.</p>';
      }
    } catch (error) {
      console.log('Error:', error);
      foodDetailContainer.innerHTML = '<p>Terjadi kesalahan saat memuat data.</p>';
    }
  },
};

// Function to extract YouTube video ID from the URL
function getYouTubeVideoId(url) {
  const videoIdRegex = /(?:https?:\/\/(?:www\.)?)?youtu(?:\.be\/|be\.com\/(?:watch\?v=|embed\/|v\/))([^&?/\s]+)/;
  const match = url.match(videoIdRegex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

export default DetailFood;
