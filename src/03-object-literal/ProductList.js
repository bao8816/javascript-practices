const ProductList = {
    products: [], // store a list of product

    getMaxId() {
        let idArray = [];

        if (this.products.length === 0)
            return 0;

        for (let i = 0; i < this.products.length; i++) {
            idArray.push(this.products[i].id);
        }
        return Math.max.apply(null, idArray)
    },

    add(name, price, isInStock) {
        let id = this.getMaxId() + 1;

        this.products.push(
            {
                id: id,
                name: name,
                price: price,
                isInStock: isInStock
            }
        )

        return id;
    },

    getById(id) {
        let i = 0
        for (i; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return this.products[i];
            }
        }

        if (i === this.products.length)
            throw new Error('The product does not exist')
    },

    getInStock() {
        let inStock = [];

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].isInStock === true) {
                inStock.push(this.products[i])
            }
        }

        return inStock;
    },

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
};

export {ProductList as default};

//DONE
