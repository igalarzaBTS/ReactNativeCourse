# Movies App

This project consumes a Movie API to get information about the current movies in the theaters. The project aims to implement networking, parse requests and responses, explore more about the UI, as the carrousel component, and show all the information about the movie.


## Instructions

To use the application you need a secret key of TMDB and set in the 'movieAPI.tsx'

```
import axios from 'axios';

const moviesAPI = axios.create({

  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'en-EN',
    api_key: '<ENTER-YOUR-KEY>'
  }
});

export default moviesAPI;

```


