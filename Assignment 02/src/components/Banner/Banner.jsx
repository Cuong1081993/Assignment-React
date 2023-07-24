import classes from "./Banner.module.css";
import React, { useEffect, useState } from "react";
import { requests } from "../RequestApi";
const Banner = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchNetflixOriginals}`
      );

      // kiem tra lay du lieu tu api co fail hay k
      if (!response) {
        throw new Error("Some thing went wrong !");
      }
      const dataMovies = await response.json();

      // neu ket qua tra ve ok thi luu vao results
      let results = dataMovies.results;

      // kiem tra trong mang img co chua thuoc tinh backdrop hay khong
      const imgs = results.filter((item) => item.backdrop_path !== null);
      // neu co thi lay ra phan tu random trong mang imgs
      const img = imgs[Math.floor(Math.random() * imgs.length)];

      // set lai movie = gia tri nhung phan tu moi lay duoc
      setMovies(img);
      setIsLoading(false);
    };
    fetchMovies().catch((error)=>{
        setIsLoading(false);
        setHttpError(error.message)
    });
  }, []);

  if(isLoading){
    return(
        <section className={classes.FilmsLoading}>
            <p>Loading...</p>
        </section>
    )
  }
  if(httpError){
    return(
        <section className={classes.FilmsError}>
            <p>{httpError}</p>
        </section>
    )
  }

  return (
    <section>
       <img
        className={classes.navBarImg}
        src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
        alt="films"
      />
      <div className={classes.information}>
        <h1 className={classes.textMovie}>{movies.name}</h1>
        <section className={classes.listBtn}>
          <button className={classes.btnPlay}>Play</button>
          <button className={classes.btnList}>My List</button>
        </section>
        <p>{movies.overview}</p>
      </div>
    </section>
  );
};
export default Banner;
