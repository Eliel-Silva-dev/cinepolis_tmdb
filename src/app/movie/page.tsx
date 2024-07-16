'use client';

import style from './style.min.module.css';
import { useSearchParams } from 'next/navigation';
import { tmdb_api, TtmdbId } from '@/api/tmdbApi';
import { useEffect, useState } from 'react';
import { FaFilm, FaMoneyBillAlt, FaScroll, FaStar } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import {
  numberFix,
  formatCurrency,
  formatDecimal,
} from '@/scripts/formatNum';

const Movie = () => {
  const moviesURL = tmdb_api.API__MOVIE_URL;
  const apiKey = tmdb_api.API_KEY;
  const apiImg_w500 = tmdb_api.API_IMG_w500;

  const searchParams = useSearchParams();
  const id = searchParams.get('id') as string;

  const [movie, setMovie] = useState({} as TtmdbId);

  const getMovie = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieIdUrl = `${moviesURL}${id}?${apiKey}${tmdb_api.API_LANGBR}`;

    getMovie(movieIdUrl);
  }, [id]);

  return (
    <main className={style.main}>
      <section className={style.movie_page}>
        {movie && (
          <>
            <div className={style.poster_path}>
              <img
                src={
                  movie.poster_path
                    ? apiImg_w500 + movie.poster_path
                    : 'img/placeholder_w500.jpg'
                }
                alt={movie.title}
              />
            </div>
            <div className={style.info_movie}>
              <div>
                <h2 className={style.title}>{movie.title}</h2>
                <p className={style.tagline}>{movie.tagline}</p>
              </div>
              <div>
                <p>
                  Numero de votos:{' '}
                  <span>
                    <FaPeopleGroup />
                    {formatDecimal(movie.vote_count)}
                  </span>
                </p>
                <p>
                  Nota:{' '}
                  <span className={style.span}>
                    <FaStar /> {numberFix(movie.vote_average)}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Duração do filme:{' '}
                  <span>
                    <FaFilm /> {movie.runtime} minutos
                  </span>
                </p>
                <p>
                  Orçamento:{' '}
                  <span>
                    <FaMoneyBillAlt />
                    {formatCurrency(movie.budget)}
                  </span>
                </p>

                <p>
                  Receita:{' '}
                  <span>
                    <FaMoneyBillAlt />
                    {formatCurrency(movie.revenue)}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <FaScroll />
                    Resumo:{' '}
                  </span>
                </p>
                <p>{movie.overview}</p>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Movie;
