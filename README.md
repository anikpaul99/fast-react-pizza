# Fast React Pizza Co.

Fast React Pizza Co. is a fictional pizza delivery service where users can order pizzas online for delivery to their homes. This project is a simple front-end application built using React, designed to allow customers to browse a dynamic pizza menu, add items to their cart, and place orders with minimal user input.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Functionality](#project-functionality)
- [Features & Pages](#features--pages)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Contact](#contact)

## Project Overview

The 'Fast React Pizza Co.' application was developed to provide a seamless experience for users to order pizzas from a dynamic menu, without the need for user accounts or login. The application allows users to add multiple pizzas to their cart, provide necessary delivery details, and place their order. Additionally, users have the option to mark their order as "priority" for an extra charge. This README file provides a comprehensive overview of the project, including its functionality, features, and setup instructions.

## Project Functionality

The application includes the following functionality:

- **Menu Loading:** The pizza menu is dynamically loaded from an API, allowing for easy updates to the menu items.
- **Order Placement:** Users can add pizzas to their cart and place an order by providing their name, phone number, and delivery address. GPS location can also be provided to assist with delivery.
- **Cart Management:** Users can view and manage the contents of their cart before placing an order.
- **Priority Orders:** Users can mark their order as a "priority" for an additional 20% of the cart price, even after the order has been placed.
- **Order Confirmation:** Each order is assigned a unique ID, which is displayed to the user for future reference.

## Features & Pages

The application is divided into the following key features and corresponding pages:

| **Feature Categories** | **Necessary Pages**                        |
| ---------------------- | ------------------------------------------ |
| User                   | 1. Homepage (`/`)                          |
| Menu                   | 2. Pizza menu (`/menu`)                    |
| Cart                   | 3. Cart (`/cart`)                          |
| Order                  | 4. Placing a new order (`/order/new`)      |
| Order                  | 5. Looking up an order (`/order/:orderId`) |

- **Homepage (`/`)**: The landing page where users start their journey.
- **Pizza Menu (`/menu`)**: A dynamic list of available pizzas where users can browse and add items to their cart.
- **Cart (`/cart`)**: A summary page displaying the pizzas selected by the user, with options to modify the cart before proceeding to checkout.
- **Placing a New Order (`/order/new`)**: A form where users input their delivery details and confirm their order.
- **Looking Up an Order (`/order/:orderId`)**: A page that allows users to retrieve and view the details of their previous orders using their unique order ID.

## Screenshots

Here are some screenshots of the application to give you a visual overview:

1. **Homepage (`/`)**
   ![Homepage Screenshot](screenshots/home%20page.png)

2. **Pizza Menu (`/menu`)**
   ![Menu Page Screenshot](screenshots/menu%20page.png)

3. **Pizza Menu After Adding to Cart (`/menu`)**
   ![Menu After Adding to Cart Screenshot](screenshots/menu%20page%20after%20adding%20to%20cart.png)

4. **Cart (`/cart`)**
   ![Cart Page Screenshot](screenshots/cart%20page.png)

5. **Placing a New Order (`/order/new`)**
   ![New Order Screenshot](screenshots/order%20page.png)

6. **Looking Up an Order (`/order/:orderId`)**
   ![Order Lookup Screenshot](screenshots/order%20status%20page.png)

_Note: Replace `path_to_screenshot.png` with the actual path to your images._

## Technologies Used

The project utilizes the following technologies and tools:

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat) **React 18**: The core library for building the user interface.
- ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat) **Vite**: A fast build tool that offers a great development experience.
- ![React Router](https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router&logoColor=white&style=flat) **React Router**: Used for managing routing and navigation between different pages.
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat) **Tailwind CSS**: A utility-first CSS framework for styling the application.
- ![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white&style=flat) **Redux**: For managing the application's UI state.
- ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?logo=react-query&logoColor=white&style=flat) **React Query**: For managing remote state and handling server communication.

## Project Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/fast-react-pizza.git
   cd fast-react-pizza
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

4. **Building for production**:
   ```bash
   npm run build
   ```
   This will create an optimized production build.

## Contact

If you have any questions or feedback, feel free to reach out:

- 📧 **Email**: [hello@paulanik.com](mailto:hello@paulanik.com)
- 🌐 **Portfolio**: [paulanik.com](https://paulanik.com)
- 💼 **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/anik-paul-dev/)
- 📝 **Dev.to**: [Dev.to Profile](https://dev.to/anikpaul)
