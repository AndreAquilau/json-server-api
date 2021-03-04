## CREATE API WITH JSON-SERVER AND TYPESCRIPT

```bash
yarn add json-server && yarn add -D @types/json-server
```

#### Create file json with name database.json
```json
// Content
{
    "products": [
        {
            "id": 1,
            "name": "Caneta BIC Preta",
            "price": 5.89
        },
        {
            "id": 2,
            "name": "Notebook Mac Pro",
            "price": 1200.00
        },
        {
            "id": 3,
            "name": "Samsung S20",
            "price": 5000.00
        }
    ]
}
```
#### Script Start
```json
{
  "scripts": {
    "start": "json-server --watch database.json --port 3001"
  }
}
```

#### Starting JSON-SERVER
```bash
$ yarn start

json-server --watch db.json --port 3001

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3001/products

  Home
  http://localhost:3001
```

#### Request Get Wih Query
```json
{
  "uri": "http://localhost:3001/products?id=1"
}

// Response

[
  {
    "id": 1,
    "name": "Caneta BIC Preta",
    "price": 5.89
  }
]
```

#### Request Type Post
```json
// In Body

//This "id" is auto-increment not is required in body

{
  "name": "Geladeira",
  "price": 1900.00
}

// Response POST

{
    "name": "Geladeira",
    "price": 1900,
    "id": 4
}
```

#### Request For Update Products
PUT altera o objeto inteiro.
```json
//query
{
  "uri": "http://localhost:3001/products/3"
}

// new data in body
{
  "name": "Samsung S20",
  "price": 7.89
}
```
#### Request For Delete Products
```bash
{
  "uri": "http://localhost:3001/products/3"
}
```
