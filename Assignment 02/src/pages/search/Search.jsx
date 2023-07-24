import React, { useEffect, useState } from "react";
import classes from "./Search.module.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultSearch from "../../components/ResultSearch/ResultSearch";
import { API_KEY } from "../../components/RequestApi";

const Search = () => {
  const [resultMovies, setResultsMovie] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true); 
  const [httpError, setHttpError] = useState();

  const handlerSearch = (value) => {
    setValueSearch(value);
  };

  // Fetch Api lấy dữ liệu từ người dùng, kiểm tra có dữ liệu thì trả về
  const fetchSearchApi = async () => {
    const respone = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${valueSearch}`
    );
    if (!respone.ok) {
      throw new Error("Something went wrong !");
    }
    const data = await respone.json();

    setResultsMovie(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSearchApi().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [valueSearch]);

  if (isLoading) {
    return (
      <section className={classes.FilmsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.FilmsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <div className={classes.app}>
      <Navbar />
      <SearchForm onHandlerSearch={handlerSearch} />
      <ResultSearch resultMovies={resultMovies} />
    </div>
  );
};

export default Search;
