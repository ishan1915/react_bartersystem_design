# E-Commerce Website with Django and React

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Backend (Django)](#backend-django)
  - [Frontend (React)](#frontend-react)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is an e-commerce website built using Django for the backend and React for the frontend. The application allows users to browse products, add them to a cart, and proceed to checkout. Admin users can manage products, orders, and users.

## Technologies Used

- **Backend:**
  - Django
  - Django REST Framework
  - PostgreSQL (or SQLite for development)

- **Frontend:**
  - React
  - Redux (for state management)
  - Axios (for API calls)

## Installation

### Backend (Django)

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-django-react.git
   cd ecommerce-django-react/backend
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up your database. If using PostgreSQL, create a database and update `settings.py` accordingly. For SQLite, the default configuration works out of the box.

5. Run migrations:

   ```bash
   python manage.py migrate
   ```

6. Create a superuser (optional, for admin access):

   ```bash
   python manage.py createsuperuser
   ```

7. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

## Usage

- Access the backend API at `http://localhost:8000/api/`.
- Access the frontend application at `http://localhost:3000/`.
- Use the Django admin panel at `http://localhost:8000/admin/` to manage products and orders.

## API Endpoints

- **GET /api/products/** - List all products
- **GET /api/products/<id>/** - Retrieve a single product
- **POST /api/products/** - Create a new product (admin only)
- **PUT /api/products/<id>/** - Update a product (admin only)
- **DELETE /api/products/<id>/** - Delete a product (admin only)
- **POST /api/orders/** - Create a new order

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. 

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

 
