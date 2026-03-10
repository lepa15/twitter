# Twitter 

A full-stack Twitter-like application where users can create and manage posts.
The project demonstrates building a REST API, authentication flow, and a modern React frontend.

---

## 🚀 Tech Stack

### Frontend

* React
* TypeScript
* Redux Toolkit
* RTK Query
* Vite

### Backend

* Node.js
* Express
* PostgreSQL
* JWT Authentication

---

## ✨ Features

* User authentication
* Create posts
* Delete posts
* Posts feed

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/lepa15/twitter
cd twitter
```

Install dependencies:

```bash
npm install
```

---

## 🛠 Development

Run frontend and backend simultaneously:

```bash
npm run dev
```

---

## 📜 Available Scripts

| Script               | Description                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| **npm run dev**      | Runs frontend and backend simultaneously using `concurrently`.                                 |
| **npm run frontend** | Starts the frontend development server with Vite.                                              |
| **npm run server**   | Starts the backend server (`server/app.js`) with Nodemon for automatic reload on file changes. |
| **npm run build**    | Builds the production version of the frontend.                                                 |
| **npm run preview**  | Runs a local server to preview the production build.                                           |
| **npm run clean**    | Removes the `dist` folder containing build artifacts.                                          |
| **npm run test**     | Runs tests using Jest.                                                                         |
| **npm run lint**     | Lints the code in the `src` directory using ESLint.                                            |
| **npm run fix**      | Automatically fixes ESLint issues in the `src` directory.                                      |

---

## 📡 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/posts`     | Get posts feed    |
| POST   | `/posts`     | Create a new post |
| PUT    | `/posts/:id` | Update a post     |
| DELETE | `/posts/:id` | Delete a post     |

---

## 🗄 Database

PostgreSQL is used as the database.
Tables include:

* `users`
* `posts`

Posts are linked to users via `user_id`.

---

