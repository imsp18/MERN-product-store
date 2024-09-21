# MERN Product Store

This is a full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) application for managing products in an online store. The front-end is built using **Vite** and styled with Chakra UI, while the back-end API is powered by Express and MongoDB.

## Features

- **Product Management**: Add, view, update, and delete products.
- **Responsive Design**: Uses Chakra UI for a fully responsive design.
- **RESTful API**: Backend API handles CRUD operations for product data.
- **Vite**: The frontend is powered by Vite for faster builds and an enhanced development experience.

## Folder Structure

### Backend
The `backend/` folder contains the Node.js and Express API, handling all requests and communication with MongoDB.

- **Technologies**: 
  - Node.js
  - Express.js
  - MongoDB (Mongoose ORM)
  
- **Main Features**:
  - REST API to manage products.
  - Environment variables managed securely via `.env`.

### Frontend
The `frontend/` folder contains the React.js application, styled with **Chakra UI**, and using **Vite** for fast and optimized builds.

- **Technologies**:
  - Vite
  - React.js
  - Chakra UI for styling
  - React Router for client-side navigation
  
- **Main Features**:
  - Product listing and management UI.
  - Responsive design using Chakra UI.
  - Fast development and optimized builds with Vite.

## Getting Started

### Prerequisites

- **Node.js** (version >= 14.x)
- **MongoDB** (locally or through MongoDB Atlas)
- **npm** (or **yarn**)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/imsp18/MERN-product-store.git
   cd MERN-product-store

2. **Backend setup: Navigate to the `backend/` directory and install the dependencies:**

    ```bash
    cd backend
    npm install

3. **Create a `.env` file and add the following variables:**

    ```bash
    MONGO_URI=your-mongo-db-uri
    PORT=5000

4. **Start the backend server:**

   ```bash
   npm run dev

5. **Frontend setup: Navigate to the `frontend/` directory and install the dependencies:**

    ```bash
    cd frontend
    npm install

6. **Start the Vite development server:**
   ```bash
   npm run dev
   
7. **Run both backend and frontend:**
  After following the steps above, you can access the app at:
  Frontend: `http://localhost:5173`
  Backend API: `http://localhost:5000`

## API Endpoints

- GET `/api/products/:id` Fetch a single product by ID.
- POST `/api/products:` Create a new product.
- PUT `/api/products/:id` Update a product by ID.
- DELETE `/api/products/:id` Delete a product by ID.

## Future Improvements

- Implement pagination for product listings.
- Add sorting and filtering options for better product navigation.
- Explore additional Chakra UI components for enhancing the UI.
