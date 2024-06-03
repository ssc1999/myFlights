# myFlights ✈️

<br>

## Overview

**myFlights** is a sophisticated web application designed to assist users in finding the most economical flights by aggregating data from multiple sources. It supports comprehensive flight research for individual travelers, groups, and groups originating from different cities, providing an all-encompassing solution for flight searches.

<br>

## Tech Stack 🛠️

- **Frontend:**
  - React with React Router

- **Backend:**
  - Express.js
  - Axios

- **Database:**
  - MongoDB

- **Deployment:**
  - Render.com (backend, frontend, and database)
  - Cloudflare for DNS and DDOS protection

<br>

## Features 🌟

- **Economic Flight Search:**
  - Aggregates and compares flight data from various sources to find the best prices.
  
- **Group Search:**
  - Facilitates flight searches for groups, including those with members departing from different cities.
  
- **API Integration:**
  - Utilizes the Amadeus API for real-time flight status and offer searches, ensuring up-to-date and accurate information.

<br>

## Project Structure 📂

### Frontend (React with React Router)
- **Pages and Components:**
  - Leverages React Router for dynamic routing (e.g., flight search, results display).
  - Utilizes reusable components to build a cohesive and interactive UI.
  
- **State Management:**
  - Implements efficient state management to handle user interactions and data flow seamlessly.

### Backend (Express.js and Axios)
- **REST API:**
  - Develops a RESTful API with Express.js to manage requests from the frontend, including interactions with external APIs such as Amadeus.
  - Uses Axios for making HTTP requests to external APIs, ensuring efficient and reliable communication.
  
- **Authentication and Authorization:**
  - Incorporates secure authentication and authorization mechanisms to protect user data and manage access controls.

### Database (MongoDB)
- **Data Storage:**
  - Employs MongoDB for persistent data storage, such as user search histories and preferences.
  
- **Mongoose Integration:**
  - Utilizes Mongoose for data modeling, simplifying database operations and ensuring data consistency.

### Server (Node.js)
- **Node.js Server:**
  - Runs the Express server using Node.js to handle client requests and manage server-side logic.

<br>

## Deployment 🚀

- **Platform:**
  - [Render.com](http://render.com) is used for deploying the frontend, backend, and database, ensuring a seamless and scalable deployment process.
  
- **Security:**
  - Cloudflare is integrated for DNS management and DDOS protection, enhancing the application's security and reliability.

<br>

## Diagrams and Use Cases 📊

- **Architecture Diagram:** [To be provided]
- **Class Diagram:** [To be provided]
- **Sequence Diagram:** [To be provided]
- **Use Cases:** [To be provided]

<br>

## Useful References 🔗

### Amadeus API Documentation
- [Amadeus API Flight Status](https://developers.amadeus.com/self-service/category/flights/api-doc/on-demand-flight-status)
- [Amadeus API Flight Offers Search](https://developers.amadeus.com/self-service/category/flights/api-doc/flight-offers-search)

### Render.com Deployment Guides
- [Demystifying Deployment: A Step-by-Step Guide to Deploying Your MERN Stack App on Render](https://medium.com/linkit-intecs/demystifying-deployment-a-step-by-step-guide-to-deploying-your-mern-stack-app-on-render-86cbf76661d0)
- [Deploy a MERN STACK app on Render platform in 2024](https://www.youtube.com/watch?v=ZsFwpjFmpFQ)

<br>

## Getting Started 🚀

To get started with the myFlights project, clone the repository and follow the instructions provided in the setup guide.

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To start only the backend server:
```bash
npm run server
# or
yarn run server
# or
pnpm run server
# or
bun run server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br>

## Contribution 🤝

Contributions are welcome! Please open an issue or submit a pull request with your improvements or bug fixes.

## License 📄

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using myFlights. Happy travels! ✈️
