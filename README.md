\# Barakah Posts API



A RESTful CRUD API for creating, reading, updating, and deleting posts. Built with Node.js, Express, MongoDB, and Mongoose.



\## Features



\- Create a post

\- List all posts, newest first

\- Read a post by ID

\- Update a post

\- Delete a post

\- Validate required fields and return useful error statuses



\## Tech stack



\- Node.js

\- Express

\- MongoDB Atlas

\- Mongoose

\- Postman



\## Setup



1\. Install dependencies:



&#x20;  ```bash

&#x20;  npm install

2. Create a .env file in the project root:

PORT=5000

MONGODB\_URI=your\_mongodb\_connection\_string



3\. Start the development server:

npm run dev

The API runs at http://localhost:5000.



API endpoints

| Method | Endpoint | Purpose |

|---|---|---|

| GET | `/` | Check that the API is running |

| POST | `/api/posts` | Create a post |

| GET | `/api/posts` | List all posts |

| GET | `/api/posts/:id` | Read one post |

| PUT | `/api/posts/:id` | Update a post |

| DELETE | `/api/posts/:id` | Delete a post |



Post fields

{

&#x20; "title": "My post title",

&#x20; "content": "Post content goes here.",

&#x20; "author": "Author name"

}

All three fields are required.



Error handling

\- 400 Bad Request for invalid IDs or invalid post data

\- 404 Not Found when a valid post ID has no matching post



Project structure

src/

&#x20; models/

&#x20;   Post.js

&#x20; server.js

.env

.gitignore

package.json

README.md



Testing

The endpoints were tested in Postman, including:

\- Successful create, list, read, update, and delete requests

\- Missing required fields

\- A valid ID with no matching post

\- A malformed post ID

