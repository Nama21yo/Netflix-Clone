const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTVShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,

  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
};
export default requests;
