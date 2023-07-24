import  { useEffect, useState } from "react";

export const API_KEY = "5e7170c1b0f24b881578b2ee91d9627a";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

export const Apis = () => {
  const [trendDings, setTrendDings] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

  // Fetch Api Original
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchNetflixOriginals}`
      );
      const dataMoviesNetflixOriginals = await response.json();
      setNetflixOriginals(dataMoviesNetflixOriginals.results);
    };
    fetchMovies();
  }, []);

  //Fetch Api Trending
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchTrending}`
      );
      const dataMovies = await response.json();
      setTrendDings(dataMovies.results);
    };
    fetchMovies();
  }, []);

  //Fetch Api Toprated
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchTopRated}`
      );
      const dataMovies = await response.json();
      setTopRated(dataMovies.results);
    };
    fetchMovies();
  }, []);

  //Fetch Actions Movie Api
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchActionMovies}`
      );
      const dataMovies = await response.json();
      setActionMovies(dataMovies.results);
    };
    fetchMovies();
  }, []);

  //Fetch Comedy Movies
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchComedyMovies}`
      );
      const dataMovies = await response.json();
      setComedyMovies(dataMovies.results);
    };
    fetchMovies();
  }, []);

  //Fetch HorrorMovies
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchHorrorMovies}`
      );
      const dataMovies = await response.json();
      setHorrorMovies(dataMovies.results);
    };
    fetchMovies();
  }, []);

  //Fetch Romance Movies
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchRomanceMovies}`
      );
      const dataMovies = await response.json();
      setRomanceMovies(dataMovies.results);
    };
    fetchMovies();
  }, []);

  //Fetch Documentary Movies
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchDocumentaries}`
      );
      const dataMovies = await response.json();
      setDocumentaries(dataMovies.results);
    };
    fetchMovies();
  }, []);
  return {
    trendDings,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  };
};
