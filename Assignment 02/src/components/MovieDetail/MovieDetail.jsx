import React, { Fragment, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./MovieDetail.module.css";
import { API_KEY } from "../RequestApi";
import YouTube from "react-youtube";

const MovieDetail = (props) => {
  const [trailer, setTrailer] = useState([]);

  const inforMovie = props.imgInfor;

  useEffect(() => {
    const fetchApiTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${inforMovie.id}/videos?api_key=${API_KEY}`
      );
      console.log(inforMovie.id);
      const dataTrailer = await response.json();
      setTrailer(dataTrailer.results);
    };
    fetchApiTrailer().catch(console.err);
  }, [inforMovie]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const movieRender =
    trailer &&
    trailer.find((movie) => 
      movie.site === "Youtube" && movie.type === "Trailer"
        ? movie.type === "Trailer"
        : movie.type === "Teaser"
    );

    return (
      <Modal onClose={props.onClose}>
        <Fragment>
          {inforMovie && movieRender ? (
            <div className={classes.trailer}>
              <div className={classes.content_left}>
                <p className={classes.title}>{inforMovie.title}</p>
                <hr />
                <p></p>
                <p>
                  <span>Release Date: </span>
                  {inforMovie.release_date}
                </p>
                <p>
                  <span>Vote: </span>
                  {inforMovie.vote_average} / 10
                </p>
                <p>{inforMovie.overview}</p>
              </div>
              <YouTube
                videoId={movieRender.key}
                id={movieRender.id}
                opts={opts}
                type={movieRender.trailer}
                site={movieRender.YouTube}
              />
            </div>
          ) : (
            <div className={classes.trailer}>
              <div className={classes.content_left}>
                <p className={classes.title}>{inforMovie.title}</p>
                <hr />
                <p></p>
                <p>
                  <span>Release Date: </span>
                  {inforMovie.release_date}
                </p>
                <p>
                  <span>Vote: </span>
                  {inforMovie.vote_average} / 10
                </p>
                <p>{inforMovie.overview}</p>
                <p>Sever Error Trailer or Teaser</p>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500${inforMovie.backdrop_path}`}
                alt="img_backdrop_path"
                style={{
                  width: "100%",
                }}
              />
            </div>
          )}
        </Fragment>
      </Modal>
    );
  };

export default MovieDetail;
