# Employee Management API

## Overview

This project implements a RESTful API for an employee management system using Node.js, Express, and MongoDB. It provides endpoints to create, read, update, and delete employee records.  
[Postman api documentation](https://documenter.getpostman.com/view/33004289/2sA2xjyVyL)

## Setup

1. **Install Dependencies:**
    ```bash
    npm install
2. **Set Environment Variables:**  
Create a .env file in the root directory with the following content:
    ```bash
    PORT=your_port_number
    CONNECTION_URL=your_mongodb_connection_url
3. **Run the Application:**  
    ```bash
    npm start
4. **Api Endpoints:**  
**Base url:** https://employee-management-backend-a7lv.onrender.com 
    - Create User:

      - Endpoint: /users
      - Method: POST
      - Description: Create a new employee user.

    - Get All Users:

      - Endpoint: /users
      - Method: GET
      - Description: Get a list of all employee users.

    - Get User by ID:

      - Endpoint: /users/:id
      - Method: GET
      - Description: Get a specific employee user by ID.

    - Update User by ID:

      - Endpoint: /users/:id
      - Method: PATCH
      - Description: Update specific fields of an employee user by ID.
    - Delete User by ID:

      - Endpoint: /users/:id
      - Method: DELETE
      - Description: Delete an employee user by ID.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose