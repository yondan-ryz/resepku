import ListFood from '../views/pages/search';
import Detail from '../views/pages/detail';
import AboutUs from '../views/pages/tentang-kami';
import CategoryFood from '../views/pages/category';

const routes = {
  '/': ListFood, // default page
  '/home': ListFood,
  '/detail/:id': Detail,
  '/about-us': AboutUs,
  '/category/:id': CategoryFood,
};

export default routes;
