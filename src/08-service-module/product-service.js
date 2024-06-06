const endpoint = 'http://localhost:3000/api/products';

export const getProduct = id => {
    return fetch(endpoint + '/' + id.toString())
        .then(response => response.json())
};

export const getProducts = () => {
    return fetch(endpoint)
        .then(response => response.json())

};

export const getInStockProducts = () => {
    return fetch(endpoint + '?isInStock=true')
        .then(response => response.json())
};

export const addProduct = product => {
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
};

export const updateProduct = () => {
    return fetch(endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({isInStock: false})
    })
        .then(response => response.json())
};

export const deleteProduct = id => {
    return fetch(endpoint + '/' + id.toString(), {
        method: 'DELETE'
    })
        .then(response => response.json())
};

// DONE
// Cannot get product 2 after deleting it
