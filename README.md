# Movie Search App

[![Netlify Status](https://api.netlify.com/api/v1/badges/28972b63-e405-420f-bc9c-16b620ca1051/deploy-status.svg?branch=main)](https://aesthetic-sable-094114.netlify.app/)

## Description
A movie search application that allows users to search for movies, view trending movies, and display movie details. The app fetches data from The Movie Database (TMDb) API.

```bash
# TMDb don't work in india so use vpn
```

## Features
- Search for movies by title.
- Display a list of trending movies.
- Show loading indicators and error messages.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Atulmishra22/MovieApp_react.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173` to view the app.

## Environment Variables
Make sure to set the following environment variable in your `.env` file:
- `VITE_TMDB_API_KEY`: Your API key for The Movie Database.
- `VITE_APPWRITE_API_KEY`: Your API key for Appwrite.

## License
This project is licensed under the MIT License.
