import React, { useState } from "react";
import classes from "./MovieList.module.css";
import MovieDetail from "../MovieDetail/MovieDetail";

const MovieList = (props) => {
  const [imgInfor, setImgInfor] = useState("");
  const [showMovie, setShowMovie] = useState(false);


  const showDetailMovieHandler = () => {
    setShowMovie(true);
  };

  const hideDetailMovieHandler = () => {
    setShowMovie(false);
  };

  
  return (
    <div className={classes.container}>
      <section className={classes.content}>
        <div className={classes.item}>
          {/* Render data ra giao dien va check co du lieu hay khong */}
          {props.movies &&
            props.movies.map((movie) => (
                <section key={movie.id}>
                {movie.backdrop_path && (
                  <img
                    className={classes.movieImg}
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt="imgFilms"
                    onClick={() => {
                      setImgInfor(movie);
                      showDetailMovieHandler();
                    }}
                  />
                )}
              </section>
            ))};
        </div>
      </section>
      {showMovie && (<MovieDetail imgInfor={imgInfor} onClose={hideDetailMovieHandler}/>)}
    </div>
  );
};

export default MovieList;
