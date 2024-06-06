import ProductList from './ProductList';

const productList = new ProductList();
const id = productList.add('Milk', 2.99, true);

console.log(id);
