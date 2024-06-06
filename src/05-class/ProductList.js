export default class ProductList {
    products = [];

    constructor() {

    }

    getMaxId() {
        return this.products.length;
    }

    add(name, price, isInStock) {
        let product = new Product(name, price, isInStock);

        product.id = this.getMaxId() + 1;

        this.products.push(product);

        return product.id;
    }

    getById(id) {
        let i = 0;

        for (i; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return this.products[i];
            }
        }

        if (i === this.products.length)
            throw new Error('The product does not exist');
    }

    getInStock() {
        let inStock = [];

        this.products.forEach(product => {
            if (product.isInStock === true)
                inStock.push(product);
        })

        return inStock;
    }

    removeById(id) {
        let i = 0, deleted = 0;
        for (i; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                this.products.splice(i, 1);
                deleted++;
            }
        }

        if (i === this.products.length - deleted)
            throw new Error('The product does not exist')
    }
}

class Product {
    id
    name
    price
    isInStock

    constructor(name, price, isInStock) {
        this.name = name;
        this.price = price;
        this.isInStock = isInStock;
    }
}

// DONE
