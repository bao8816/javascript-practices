export default function ProductList() {
    this.products = [];

    this.add = (name, price, isInStock) => {
        let prod = new Product(name, price, isInStock);

        prod.id = getMaxId(this.products) + 1;

        this.products.push(prod);

        return prod.id;
    }

    this.getById = (id) => {
        let i = 0;

        for (i; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return this.products[i];
            }
        }

        if (i === this.products.length)
            throw new Error('The product does not exist');
    }

    this.getInStock = () => {
        let inStock = [];

        this.products.forEach(product => {
            if (product.isInStock === true)
                inStock.push(product);
        })

        return inStock;
    }

    this.removeById = (id) => {
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

function getMaxId(prodList) {
    return prodList.length;
}

function Product(name, price, isInStock) {
    this.id = '';
    this.name = name;
    this.price = price;
    this.isInStock = isInStock;
}

//DONE
