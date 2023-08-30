# E-Commerce Website using MERN Stack
Welcome to the README for our E-Commerce Website project built using the MERN (MongoDB, Express, React, Node.js) stack! This repository contains all the code, resources, and documentation necessary to understand, develop, and deploy our feature-rich online shopping platform.

## Features
* **User Authentication and Authorization:** Secure user registration and login system with authentication checks for access control to different parts of the application.

* **Product Catalog:** A comprehensive collection of products, organized into categories, with detailed product pages displaying images, descriptions, prices, and user reviews.

* **Shopping Cart:** Interactive shopping cart that allows users to add, remove, or update quantities of products before proceeding to checkout.

* **Checkout and Payments:** Smooth checkout process with support for multiple payment methods, ensuring the security of user financial information.

* **User Profiles:** User-specific profiles where customers can track their order history, manage account details, and review their favorite products.

* **Responsive Design:** A mobile-friendly interface that provides an optimal experience across various devices and screen sizes.

## Tech Stack
* **Frontend:** Built using React.js, the frontend offers a dynamic and interactive user interface, ensuring a seamless browsing and shopping experience.

* **Backend:** The backend is powered by Node.js and Express, providing a robust server structure to handle requests, manage user sessions, and communicate with the database.

* **Database:** MongoDB is used to store product information, user data, order history, and more.

* Authentication:** User authentication is implemented using JWT (JSON Web Tokens) to ensure secure access to user accounts and functionalities.

## Getting Started
Follow these steps to set up the project locally on your machine:

* Clone the repository: git clone https://github.com/sawaira-dev/project-backend.git
* Navigate to the project directory: cd your-project
* Install dependencies for both frontend and backend: npm install
* Configure environment variables for database connection, authentication, and payment gateway.
* Run the development server: npm run dev
* Open your browser and access the application at `http://localhost:1234`
## API Routes
API cyclic live URL => https://careful-rose-centipede.cyclic.cloud/api/getallusers

### Category API Routes;
* **Get Categories** => `/get-all-category`
  To get all categories
* **Create Category** => `/create-categories`
  To create a Category
  {
  "categoryName" :  "",
  "categoryImage" : ""
  }
* **Delete Product** => `/delete-products-by-category`
  To delete product by its category
* **Update Brand** => `/update-category/:id`
  To update Category by its ID
* **Get Category by Name** => `/get-category-by-name`
  To get a brand by its name
* **Get Category by ID** => `/get-category-by-id`
  To get a brand by its ID

### Users API Routes;
* **Signup** => `/signup`
  To authenticate or register a user.
  
  {
  
  "username" : "",
  
  "email" : "",
  
  "password" : ""
  
  }
* **Login** => `/login`
  To create a Category
* **Get Users** => `/getallusers`
  To get all users
**Get Users by email** => `/userbyemail/:email`
  To get  sers by its email
* **Update User** => `/updateuser/:id`
  To update user by its ID
  
### Brands API Routes;
* **Get Brand** => `/get-brand`
  To all get all brands
* **Create Brand** => `/create-brands`
  To create a brand.
  
  {

  "brand" : "",
  
  "Image" : ""
  
  }
* **Delete Product** => `/delete-products-by-brand`
  To delete product by its brand
* **Update Brand** => `/update-brand/:id`
  To update brand by its ID
* **Get Brand by ID** => `/get-brand-by-id`
  To get a brand by its ID

### Brands API Routes;
* **Get a Product** => `/get-product`
  To get a product
  * **Get all Products** => `/get-all-products`
  To get all products
* **Get Product by Category** => `/product-by-category`
  To get a product by its category
* **Get Product by Brand** => `/product-by-brand`
  To get a product by its Brand
* **Create Product** => `/create-products`
  To create a Product
  
  {
  
  "productName" : "",
  
  "price" : ""
  
  "brand" : "",
  
  "category" : "",
  
  "description" : "",
 
   "rating" : "",
  
   "Images" : "",
  
   "thumbnail" : "",
  
   "product_colors" : "",
  
   "product_type" : ""
  
  }
* **Delete Product** => `/delete-products-by-brand`
  To delete product by its brand
* **Delete Product by ID** => `/delete-product/:_id`
  To delete product by its ID
* **Update Product** => `/update-product/:id`
  To update a product by its ID
* **Get Product by ID** => `/product-by-id`
  To get a product by its ID



