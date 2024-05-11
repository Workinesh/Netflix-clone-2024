const API_KEY="process.env.REACT_APP_API_KEY";
const Requests={
    fetchTrending:`/trending/all/week?api-key=$(API-KEY)&language=en-us`,
    fetchNetflixOriginals:`/discover/tv?api-key=$(API-KEY)&with-networks=213`,
    fetchTopRatedMovies:`/movie/top-rated?api-key=$(API-KEY)&language=en-us`,
    fetchActionMoveis:`/discover/movies?api-key=$(API-KEY)&with-generes=28`,
    fetchComedyMovies:`/discover/movies?api-key=$(API-KEY)&with-generes=35`,
    fetchHorrorMovies:`/discover/movies?api-key=$(API-KEY)&with-generes=27`,
    fetchRomanceMovies:`/discover/movies?api-key=$(API-KEY)&with-generes=10749`,
    fetchDocumentaries:`/discover/movies?api-key=$(API-KEY)&with-generes=99`,
    fetchTvShow:`tv/popular?api-key=$(API-KEY)&language=en-us&page=1`,
}
export default Requests