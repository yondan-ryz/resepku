import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async foodlist() {
    const response = await fetch(API_ENDPOINT.SEARCH_FOOD);
    const responseJson = await response.json();
    return responseJson.meals;
  }

  static async detailfood(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.meals;
  }
}

export default TheRestaurantDbSource;
