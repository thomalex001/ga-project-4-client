import axios from 'axios';
import { AUTH } from './auth';

const getHeaders = () => ({
  headers: { Authorization: `Bearer ${AUTH.getToken()}` }
});

const ENDPOINTS = {
  register: '/api/auth/register/',
  login: '/api/auth/login/',
  allProducts: '/api/products/',
  productsAddedToCart: '/api/cart/',
  allGenreNames: '/api/genres/names',
  createUserCart: `/api/cart/`,
  cloudinary: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
  // search: (query) => `/api/books/search?q=${query}`,
  updateUserCart: (cartId) => `/api/cart/${cartId}/`,
};

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint, body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };

// urlpatterns = [
//   path('admin/', admin.site.urls),
//   path('api/products/', include('products.urls')),
//   path('api/types/', include('type.urls')),
//   path('api/cart/', include('cart.urls')),
//   path('api/auth/', include('jwt_auth.urls'))
// ];
