# IOT

Blog App
Welcome to the Blog App! This full-stack application allows users to create, read, edit, and delete blog posts. Built with the MERN stack (MongoDB, Express, React, and Node.js), it features a simple blog management system.

Features
Create, Edit, and Delete Blog Posts: Users can easily manage their blog posts.
Responsive UI: Built using React and TailwindCSS, providing a responsive and modern UI.
Architecture Overview
This application follows a typical MERN (MongoDB, Express, React, Node.js) architecture.

Frontend:

Built with React for a dynamic, responsive, and interactive UI.
Styled using TailwindCSS for utility-first styling.
Backend:

Built with Node.js and Express to create the RESTful API for handling post operations (CRUD).
JWT Authentication for user login and session management.
MongoDB (using Mongoose ORM) for storing user and blog post data.
Database:

MongoDB stores blog post data and user authentication information.
The backend is connected to the database using Mongoose.
API Endpoints:

POST /api/posts: Create a new blog post.
GET /api/posts: Retrieve all blog posts.
GET /api/posts/:id: Retrieve a single blog post by ID.
DELETE /api/posts/:id: Delete a blog post.
Prerequisites
Ensure you have the following software installed:

Node.js (v14 or higher)
MongoDB (or MongoDB Atlas for cloud database)
Git (for version control)
Setup Instructions
Follow the steps below to set up and run the Blog App locally.
