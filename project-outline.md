# Project Outline

## Endpoints

- POST /student (create student)
  - Requires admin_key
  - should return user ID (this can be passed as an student_key)
  - Should have no frontend or get

- DELETE /student (Destroy Student)
  - requires admin_key
  - requires student_key
  - requires student email in body.

- GET /topping (topping Index)
  - Can be with or without student key
  - returns full list of toppings

- GET Pizza (pizza index)
  - No student_key, return only admin's pizzas
  - With student_key, should return user's name, and user's pizzas.

- GET /pizza/:id (pizza)

- POST /pizza (create)
  - student_key required

- PATCH /pizza (update)
  - student_key required

- DELETE /pizza (delete)
  - student_key required
  