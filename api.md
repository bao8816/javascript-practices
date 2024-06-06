# The RESTful API

We will use [json-server](https://github.com/typicode/json-server) to serve the API.

Run the following command to start the server

```
npm start
```

The API server will be run at `http://localhost:3000/api/`

## How to access the API

- See the document of json-server  
  https://github.com/typicode/json-server#routes

## Example: `products` resource

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | /api/products     | Get all products    |
| GET    | /api/products/:id | Get a product by id |
| POST   | /api/products     | Add a product       |
| PUT    | /api/products/:id | Update a product    |
| DELETE | /api/products/:id | Delete a product    |
