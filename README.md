# Create an API that will proxy all client requests to the appropriate GitHub endpoint. The following endpoints must be provided:

GET - /api/users?since={number} This endpoint must return a list of GitHub users and the link for the next page.

GET - /api/users/:username/details This endpoint must return the details of a GitHub user

GET - /api/users/:username/repos This endpoint must return a list with all user repositories

# Create tests for your application covering all endpoints.

- Made using jest

# How to run?

- npm install
- npm run dev

### routes:

- http://localhost:8080/api/users
- http://localhost:8080/api/users/:username/details
- http://localhost:8080/api/users/:username/repos
