import axios from 'axios';

const moviesAPI = axios.create({

  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'en-EN',
    api_key: 'eecc6888fd7a4429ce4b34caef158975'
  }
});

export default moviesAPI;
