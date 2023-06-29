# The Pizzaria API

## Intro

This is the pizzaria API to be used during unit 2.

This api allows you to use all CRUD functions and has the theme of Pizzas.

Feel free to edit and deploy as you see fit.

Basically the students can either use the API key to make unauthenticated requests to the app, or can signup and sign in and use the JWT to authenticate.

API Documentation is [here](./Pizzaria_API_Documentation.md) and should be distributed to the students.

---

## Instructor Key

For seeding the Database you will need to pass the instructor key as the query string instructorkey:

```txt
INSTRUCTOR_KEY = kTz8BWsfmggm00a7FkQlkWzhSj8y6YRjazLD
```

---

### Authentication

Assuming you have seeded the database all resources will be created under the 'admin' user. when using the API key

When not using the API key the JWT will attach the resources to the relevant user.

---

### Prior to all lessons Seed The Database

This will drop all Users, and All Pizzas.

User `admin` will be created, with password `admin`
5 pizzas will be created with dummy data, and `admin` as the user

Method: POST

URL: /api/seed-db?instructorkey=kTz8BWsfmggm00a7FkQlkWzhSj8y6YRjazLD

Response: 200 OK

Response Body: "message": "Created 5 Pizzas, Happy Hacking"
