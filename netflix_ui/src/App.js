import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import './App.css';

import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData]

  useEffect(() => {
    const loadAll = async () => {
      // Pegando toda a lista de filmes

      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      <FeaturedMovie />

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}