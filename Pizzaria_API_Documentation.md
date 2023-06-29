# Pizaria API Documentation

Welcome to the Pizzaria API, the perfect backend to learn React.

## Contents

- [Get all pizzas](#get-all-pizzas)
- [Get single pizza](#get-single-pizza)
- [Add a Pizza](#add-a-new-pizza)
- [Edit a Pizza](#edit-a-pizza)
- [Delete a Pizza](#delete-a-pizza)
- [Sign Up](#sign-up-a-new-user)
- [Sign In](#sign-in-an-existing-user)

---

```txt
API Key: OeNLfmxednrNbUwWiAdtnjeX7tieIVQC2Nx7
```

---

## Get all Pizzas

To get all of the pizzas in the database

### Method

`GET`

### URL

`/api/pizza/index`

### Query Strings

`None`

### JSON Body

`None`

### Response

Expected Status Code: `200 OK`

A JSON Array containing Objects in the following format.

```json
[
    {
        "_id": "649d8041640c3f0dafb55d38",
        "name": "Meat Feast",
        "image": "https://unsplash.com/photos/Xt84tIHbjRY"
    },
]
```

---

## Get Single Pizza

Get a more detailed response of a single Pizza

### Method

`GET`

### URL

`/api/pizza/<id of pizza>`

### Query Strings

`None`

### JSON Body

`None`

### Response

Expected Status Code: `200 OK`

A JSON Object in the following format:

```json
{
    "_id": "649d8041640c3f0dafb55d38",
    "name": "Meat Feast",
    "toppings": [ "Sausage", "Bacon", "Beef", "Chicken" ],
    "base": "Deep Dish",
    "image": "https://unsplash.com/photos/Xt84tIHbjRY"
}
```

---

## Add a New Pizza

Add a new pizza to the Database

### Method

`POST`

### URL

`/api/pizza`

### Headers

For use with API key:

```txt
Authentication - <API Key>
```

For use when signed in and you have a JWT

```txt
Authentication - Bearer <JSON Web Token>
```

### JSON Body

```json
{
    "name": String,
    "toppings": [String],
    "base": String,
    "image": String
}
```

### Response

Expected Status Code: `201 Created`

A JSON Object containing the created pizza details See [Get Single Pizza](#get-single-pizza) for reference

## Edit a Pizza

Edit the fields on a pizza that exists within the Database

### Method

`PUT`

### URL

`/api/pizza/<id of pizza>`

### Headers

For use with API key (you will be able to edit ALL pizzas):

```txt
Authentication - <API Key>
```

For use when signed in and you have a JWT (You will be able to edit your own pizzas)

```txt
Authentication - Bearer <JSON Web Token>
```

### JSON Body

All fields are optional, the fields that you add will be updated.

```json
{
    "name": String,
    "toppings": [String],
    "base": String,
    "image": String
}
```

### Response

Expected Status Code: `201 Created`

A JSON Object containing the edited pizza details See [Get Single Pizza](#get-single-pizza) for reference.

---

## Delete a Pizza

Delete a pizza in the database

Warning, this will completely and irreversably destroy the pizza that you choose. It will not ask for confirmation.

### Method

`DELETE`

### URL

`/api/pizza/<id of pizza>`

### Headers

For use with API key (you will be able to edit ALL pizzas):

```txt
Authentication - <API Key>
```

For use when signed in and you have a JWT (You will be able to edit your own pizzas)

```txt
Authentication - Bearer <JSON Web Token>
```

### JSON Body

`None`

### Response

Expected Status Code: `200 OK`

```json
{
    "message": "<id Of Pizza> has been deleted"
}
```

---

## Sign Up A New User

So far you have been using the API key to do CRUD operations. Now you can sign up a new user. this user will be able to only edit and delete their own pizzas, but will be able to view everybody's pizzas.

### Method

`POST`

### URL

`/api/auth/signup`

### Headers

`None`

### JSON Body

```json
{
    "firstName": String,
    "lastName": String,
    "emailAddress": String,
    "password": String
}
```

### Response

Expected Status Code: `201 Created`

```json
{
    "message": "User created successfully!"
}
```

---

## Sign In an Existing User

Once a user has been signed up you can then sign in to get a JWT

### Method

`POST`

### URL

`/api/auth/signin`

### Headers

`None`

### JSON Body

```json
{
    "emailAddress": "george@mail.com",
    "password": "password"
}
```

### Response

Expected Status Code: `200 OK`

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YzMwZWYyMzg1NTI1ZThlYjU4MzY3In0sImlhdCI6MTY4Nzk1NzgzMywiZXhwIjoxNzIzOTU3ODMzfQ.pz-PbHFdEOsnEXCSYmEdHSOmvRllYFMxTaLkSBPtD7o"
}
```
