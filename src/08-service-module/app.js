import { getProduct } from './product-service.js';

getProduct(1).then(product => {
  console.log(product);
});
