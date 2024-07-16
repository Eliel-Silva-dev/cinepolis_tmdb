'use client';

import style from './style.min.module.css';
import { BiSearchAlt } from 'react-icons/bi';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { tmdb, Ttdmb } from '@/api/tmdbApi';
import MovieCard from '@/components/MovieCard';

const SearchMovie = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const TMDB = tmdb;

  const [movieSearch, setMovieSearch] = useState([]);

  const searchQuery = (value: string) => {
    const sp = new URLSearchParams(searchParams);
    sp.set('q', value);
    router.push(`${pathname}?${sp.toString()}`);
  };

  const getMovie = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovieSearch(data.results);
  };
  const query = searchParams.get('q');

  useEffect(() => {
    const urlSearchMovie = `${TMDB.API_MOVIE_SEARCH}?query=${query}&${TMDB.API_KEY}${TMDB.API_LANG}`;
    getMovie(urlSearchMovie);
  }, [query]);

  return (

      <main className={style.main}>
        <section>
          <form className={style.form_query} id={style.search}>
            <input
              id="lupa"
              type="text"
              onChange={(e) => searchQuery(e.target.value)}
              placeholder="Buscar filme..."
            />
            <BiSearchAlt />
          </form>
          <div className={style.container_search}>
            {movieSearch &&
              movieSearch.map((movie: Ttdmb) => (
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

export default SearchMovie;
