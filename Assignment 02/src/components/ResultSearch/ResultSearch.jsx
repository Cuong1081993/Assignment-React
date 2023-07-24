import React, { Fragment, useState } from "react";
import classes from "./ResultSearch.module.css";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
function ResultSearch(props) {
  const [imgInfor, setImgInfor] = useState("");
  const [showMovie, setShowMovie] = useState(false);

  const showDetailMovieHandler = () => {
    setShowMovie(true);
  };
  const hideDetailMovieHandler = () => {
    setShowMovie(false);
  };
  return (
    <Fragment>
      <div className={classes.container}>
        <h1>Search Result</h1>
        <div className={classes.movie_list}>
          {/* hàm kiểm tra xem kết quả trả về có dữ liệu, nếu có thì in ra giao diện */}
          {props.resultMovies &&
            props.resultMovies.map((movie) => {
              return (
                <section key={movie.id}>
                  {/* Hàm kiểm tra có dữ liệu trong poster không, nếu có thì in ra giao diện */}
                  {movie.poster_path && (
                    <img
                      className={classes.movieImg}
                      key={movie.id}
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt="imgFilms"
                      onClick={() => {
                        setImgInfor(movie);
                        showDetailMovieHandler();
                      }}
                    />
                  )}
                </section>
              );
            })}
        </div>
      </div>
      {showMovie && (
        <MovieDetail imgInfor={imgInfor} onClose={hideDetailMovieHandler} />
      )}
    </Fragment>
  );
}

export default ResultSearch;
