const endpoint = 'http://localhost:3000/api/products';

export default function main() {
    return fetch(endpoint)
        .then((response) => response.json())
        .then(() => {
            return fetch('http://localhost:3000/api/products/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({isInStock: false})
            })
        })
        .then(() => {
            return fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: 'Eggs', price: 5.99, isInStock: true})
            })
        })
        .then(() => {
            return fetch('http://localhost:3000/api/products/21', {
                method: 'DELETE'
            })
        })
        .then(() => {
            let products = [
                {name: 'Bread', price: 1.99, isInStock: true},
                {name: 'Carrots', price: 2.99, isInStock: true}
            ];

            //for each product in the array, create a new product
            return Promise.all(products.map((product) => {
                return fetch('http://localhost:3000/api/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
            }))
        })
        .then(() => {
            //get all products that are in stock and price is less than 2
            return fetch('http://localhost:3000/api/products?isInStock=true&price_lte=2')
        })
        // return a promise that will be fulfilled with the names of the products
        .then((response) => response.json())
        .then((products) => {
            return products.map((product) => product.name);
        })
}

// DONE
// But should optimize step 4 and step 7 so that the test could run multiple time without resetting db.json file
