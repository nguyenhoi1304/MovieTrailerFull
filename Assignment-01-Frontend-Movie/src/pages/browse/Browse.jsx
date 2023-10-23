import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import MovieList from "../../components/MovieList/MovieList";
import { Apis } from "../../components/RequestApi";
import classes from "./Browse.module.css";
import MovieForAll from "../../components/MovieForAll/MovieForAll";

function Browse(props) {
  // import Apis và gọi hàm để lấy về các mảng api tương ứng với từng APi
  const { MovieAll } = Apis();

  return (
    <div className="app">
      {/* Phần Navbar */}
      <Navbar />

      <section className={classes.container}>
        <span className={classes.title}></span>
        <MovieList />
      </section>

      {/*danh sách phim Xu hướng */}
      <section className={classes.container}>
        <span className={classes.title}>All Movie List</span>
        <MovieForAll movies={MovieAll} />
      </section>
    </div>
  );
}

export default Browse;
