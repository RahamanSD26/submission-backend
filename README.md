# submission-backend (For source code check master branch)
This is the backend of SlidelyAI assignment.

# TypeScript Backend Project

## Description

This project is a backend application built using TypeScript. It provides APIs for managing submissions, including creating and reading submissions. 

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository

To clone the repository, use the following command:

```sh
git clone https://github.com/your-username/your-repository.git
cd your-repository

####Install Dependencies

npm install
# or
yarn install

PORT=5000

Running the Application
To start the application in development mode, use:

sh
Copy code
npm run dev
# or
yarn dev
To build the application for production, use:

sh
Copy code
npm run build
# or
yarn build
To start the application in production mode, use:

npm start
# or
yarn start


#API Documentation

Endpoints
GET /read?index=: Fetches a submission by index.
POST /create: Creates a new submission.

Example Usage
Fetch Submission
sh
Copy code
curl -X GET "http://localhost:5000/read?index=1"

Create Submission
sh

curl -X POST "http://localhost:5000/create" -H "Content-Type: application/json" -d '{
    "name": "Rahaman",
    "email": "rahaman86tech@gmail.com",
    "phone": "1234567890",
    "github_link": "https://github.com/RahamanSD26",
    "stopwatch_time": 3600
}'

##ping
http://localhost:5000/ping
