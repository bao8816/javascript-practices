const endpoint = 'http://localhost:3000/api/products';

export default async function main() {
    await fetch(endpoint)
        .then(response => response.json())

    await fetch('http://localhost:3000/api/products/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({isInStock: false})
    })

    await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: 'Eggs', price: 5.99, isInStock: true})
    })

    await fetch('http://localhost:3000/api/products/21', {
        method: 'DELETE'
    })

    let products = [
        {name: 'Bread', price: 1.99, isInStock: true},
        {name: 'Carrots', price: 2.99, isInStock: true}
    ];

    //for each product in the array, create a new product
    await Promise.all(products.map((product) => {
        return fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }))

    //get all products that are in stock and price is less than 2
    await fetch('http://localhost:3000/api/products?isInStock=true&price_lte=2')

    // return a promise that will be fulfilled with the names of the products
    return fetch('http://localhost:3000/api/products?isInStock=true&price_lte=2')
        .then(response => response.json())
        .then(products => products.map(product => product.name))

}
// DONE
// Check practice 06
