<h1>Task Manager</h1>

# Project Overview
<ul>
  <li>implemented user authentication using JWT.</li>
  <li>Users can sign up, login, logout</li>
  <li>Users can create ,edit,delete task with title,description,status,priority,due date.</li>
  <li>Users can change status by clicking on checkbox</li>
  <li>Users can change status by clicking on checkbox</li>
</ul>

 ### Frontend-
 preview link- https://task-manager-gjwi.vercel.app/
   React JS is used.
   Redux Toolkit, createAsyncThunk, tailwind CSS, etc. used

### Backend-
preview link- https://task-manager-three-silk.vercel.app/
  Node JS and Express JS are used for making REST Api.


# Available Scripts
## Backend
In the server directory, you can run:
### `npm init`

installs all the necessary package.

### `.env`
create a .env file in server directory.

add:- <br/>
JWT_SECRET="#your secret key" <br/>
MONGODB_URI= "#your mongo uri"
 
### `node server.js`

starts the server and runs the api

## Frontend

in the client directory, you can run
### `npm init`
installs all the necessary package.

### .env
create a .env file in server directory.

add:- <br/>
  REACT_APP_URL="#Rest api base url" (optional)

### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.



# API Documentation

This API provides endpoints for managing tasks and user authentication.

## API Endpoints

| Endpoint | Method | URL Path | Request Body | Response Format | Authentication |
|---|---|---|---|---|---|
| Create a task | POST | /tasks | { title, content, dueDate, priority } | { task } | Required |
| Retrieve all tasks | GET | /tasks |  | { tasks } | Required |
| Retrieve a single task | GET | /tasks/:id |  | { task } | Required |
| Update a task | PUT | /tasks/:id | { title, content, dueDate, status, priority } | { task } | Required |
| Update task status | PATCH | /tasks/status/:id | { status } | { task } | Required |
| Delete a task | DELETE | /tasks/:id |  | { message: "Task deleted" } | Required |
| Delete all tasks | DELETE | /tasks/deleteAll |  | { message: "All tasks deleted" } | Required |
| Sign up a user | POST | /signup | { name, email, password } | { user } | Not required |
| Log in a user | POST | /login | { email, password } | { token } | Not required |
| Delete a user | DELETE | /delete |  | { message: "User deleted" } | Required |

