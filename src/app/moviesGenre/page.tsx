'use client';

import style from './style.min.module.css';
import { useEffect, useState } from 'react';
import { tmdb, Ttdmb, genres } from '@/api/tmdbApi';
import MovieCard from '@/components/MovieCard';

const MoviesGenre = () => {
  const [movieGenre, setMovieGenre] = useState([]);
  const [genresSelected, setGenresSelected] = useState([] as string[]);

  const getMovie = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovieGenre(data.results);
  };

  const handleGenres = (el: HTMLElement) => {
    if (genresSelected.length == 0) {
      setGenresSelected([el.id]);
      el.classList.toggle('style_min_active__om9Y0');
    } else if (genresSelected.includes(el.id)) {
      setGenresSelected((antigo) => antigo.filter((id) => id != el.id));
      el.classList.toggle('style_min_active__om9Y0');
    } else {
      setGenresSelected((antigo) => [...antigo, el.id]);
      el.classList.toggle('style_min_active__om9Y0');
    }
  };

  useEffect(() => {
    const urlGenreMovie = `${tmdb.API_MOVIE_GENRE}${encodeURI(
      genresSelected.join(',')
    )}&${tmdb.API_KEY}${tmdb.API_LANG}`;

    getMovie(urlGenreMovie);
  }, [genresSelected]);

  return (
    <main className={style.main}>
      <section>
        <div id={style.genres}>
          {genres.map((genre) => (
            <div
              key={genre.id}
              id={`${genre.id}`}
              className={style.genre}
              onClick={(e) => handleGenres(e.target as HTMLElement)}
            >
              {genre.name}
            </div>
          ))}
        </div>
        <div className={style.container_genres}>
          {movieGenre &&
            movieGenre.map((movie: Ttdmb) => (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                title={movie.title}
                vote_count={movie.vote_count}
                overview={movie.overview}
                id={movie.id}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default MoviesGenre;
