const API_KEY = '24e96504b327056e2c906bc351aaeb8c';

export default {
  fetchTrending: `/trending/all/week?api_key=$&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=24e96504b327056e2c906bc351aaeb8c&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=24e96504b327056e2c906bc351aaeb8c&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=24e96504b327056e2c906bc351aaeb8c&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=24e96504b327056e2c906bc351aaeb8c&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=24e96504b327056e2c906bc351aaeb8c&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=24e96504b327056e2c906bc351aaeb8c&with_genres=9648`,
  fetchScifi: `/discover/movie?api_key=24e96504b327056e2c906bc351aaeb8c&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=24e96504b327056e2c906bc351aaeb8c&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=24e96504b327056e2c906bc351aaeb8c&with_genres=16`,
  fetchTV: `/discover/movie?api_key=24e96504b327056e2c906bc351aaeb8c&with_genres=10770`,
};
