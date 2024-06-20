# Pizaria API Documentation

Welcome to the Pizzaria API, the perfect backend to learn React.

This api allows you to keep a personal databse of all the pizzas that you love. You'll be able to create, read, update, and delete pizzas.

Be aware, that whilst the API is set up to be personal to you, your instructors will be able to see what you create on the backend, and it is linked to you. So please have fun and make funny names, but let's steer clear of offensive.

## Contents

- [Student Key](#student-key)
- [Pizzas Get Deleted](#important-note)
- [Get all pizzas](#get-all-pizzas)
- [Get single pizza](#get-single-pizza)
- [Add a Pizza](#add-a-new-pizza)
- [Edit a Pizza](#edit-a-pizza)
- [Delete a Pizza](#delete-a-pizza)

---

## Student Key

You will have had your student key emailed to you, or sent to you in Slack via private message. If you have not recieved it, please first double check your emails, and your slack DMs then if it's not there message or talk to your tutor, they will get it for you.

For the majority of these API calls, you will need to add your student key as a query string.

For example `http://URL.com/api/pizza?student_key=1L0v£P1&&A`

---

### Important Note

The Pizzas database gets completely deleted on the 16th of every month at midnight (UTC). If you create a pizza on or before the 16th, it will not exist afterwards.

## Get all Pizzas

To get all of the pizzas in the database

### Method

`GET`

### URL

`/api/pizza`

### Query Strings

No Query strings: Five default pizzas are returned.
With `student_key`: All of your added Pizzas as well as the five default pizzas are returned.

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
    "_id": "667463a8af0b45436a1531a0",
    "name": "Hawaiian",
    "toppings": [
        "Ham",
        "Mushroom",
        "Pineapple"
    ],
    "sauce": "Marinara",
    "crust": "Thin",
    "image": "https://imgur.com/gallery/sdanNp8",
    "size": 8,
    "heatRating": 0,
    "isVegetarian": false,
    "isVegan": false
}
```

---

## Add a New Pizza

Add a new pizza to the Database

### Method

`POST`

### URL

`/api/pizza`

### Query Strings

`student_key` Is required

### JSON Body

```json
{
    "name": String,
    "toppings": [
        "Array of Strings"
    ],
    "sauce": String,
    "crust": String,
    "image": String,
    "size": Number (min of 4),
    "heatRating": Number (0, 1, 2, or 3),
    "isVegetarian": Boolean,
    "isVegan": Boolean
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

### Query Strings

`student_key` is Required

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

### Query Strings

`student_key` is Required

### JSON Body

`None`

### Response

Expected Status Code: `200 OK`

```json
{
    "message": "<id Of Pizza> has been deleted"
}
```
