# Media Showcase 🎬

Media Showcase is a simple and scalable React app built with TypeScript that showcases a list of movies and series, and allows users to view detailed information about each item by clicking on them. The project follows modern architectural principles with an extensible folder structure for easy scaling and maintainability.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [API Integration](#api-integration)

## Project Structure

This app is built following a modular approach, organizing the code by feature (Movies, Series, etc.), and leveraging best practices for scalable React applications.

## Features

- Display a list of trending and top rated movies (or series)
- View detailed information about each movie on a dedicated page

## Getting Started

To get started with the project, follow the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

````bash
git clone https://github.com/your-username/movie-app.git
````

2. Navigate into the project directory:

````bash
cd movie-app
````

3. Install the dependencies:

````bash
npm install
# or if using yarn
yarn install
````

### Running the Project
Once the dependencies are installed, you can run the app locally:

````bash
npm start
# or if using yarn
yarn start
````

This will start the development server. Open http://localhost:3000 in your browser to view the app. 5. API Integration
The app uses an external API to fetch movies and series data. You can replace the API_BASE_URL and API_KEY in src/utils/config.ts with your own API endpoint.

### API Integration
````bash
export const API_BASE_URL: string | undefined =
"https://api.themoviedb.org/3";
export const API_KEY: string | undefined = <your_api_key>;

````

This will start the development server. Open http://localhost:3000 in your browser to view the app.
