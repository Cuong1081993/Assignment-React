import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Apis } from "../../components/RequestApi";
import Banner from "../../components/Banner/Banner";
import classes from "./Browse.module.css";
import MovieList from "../../components/MovieList/MovieList";

const Browse = () => {
  const {
    trendDings,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  } = Apis();
  return (
    <div className={classes.app} >
      {/* NavBar Website */}
      <Navbar />

      {/* Banner Website */}
      <Banner />

      {/* Categories films */}

      {/* NetFlix originals  */}

      <section className={classes.container}>
        <span className={classes.title}></span>
        <MovieList movies={netflixOriginals} />
      </section>

      {/* Trending section */}

      <section className={classes.container}>
        <span className={classes.title}>Trendings</span>
        <MovieList movies={trendDings} />
      </section>

      {/* Top Rated Section */}

      <section className={classes.container}>
        <span className={classes.title}>Top Rated</span>
        <MovieList movies={topRated} />
      </section>

      {/* Action Movies Section */}

      <section className={classes.container}>
        <span className={classes.title}>Action Movies</span>
        <MovieList movies={actionMovies} />
      </section>

      {/* Comedy Section */}

      <section className={classes.container}>
        <span className={classes.title}>Comedy Movies</span>
        <MovieList movies={comedyMovies} />
      </section>

      {/* Horror Movies */}

      <section className={classes.container}>
        <span className={classes.title}>Horror Movies</span>
        <MovieList movies={horrorMovies} />
      </section>

      {/* Romance Movies */}

      <section className={classes.container}>
        <span className={classes.title}>Romance Movies</span>
        <MovieList movies={romanceMovies} />
      </section>

      {/* Documentaries Section */}

      <section className={classes.container}>
        <span className={classes.title}>Documentaries</span>
        <MovieList movies={documentaries} />
      </section>
    </div>
  );
};

export default Browse;
