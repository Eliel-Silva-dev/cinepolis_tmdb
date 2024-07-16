'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import MovieCard from '@/components/MovieCard';
import { tmdb_api, Ttdmb } from '@/api/tmdbApi';
import { FaStar } from 'react-icons/fa';
import MovieInfo from '@/components/buttons/InfoMore';
import { numberFix, formatDecimal } from '@/scripts/formatNum';
import Slider from '@/components/Slider';

const TMBD = tmdb_api;

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [firstMovie, setFirstMovie] = useState<Ttdmb>({} as Ttdmb);

  const getMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);

    setFirstMovie(data.results[0]);
  };

  const mudaFundo = (urlImg: string) => {
    const headerImg = document.getElementById('header') as HTMLElement;

    headerImg.style.backgroundImage = `url('${urlImg}')`;
  };

  useEffect(() => {
    const moviesNowPlaying = TMBD.API_NOW_PLAYING + TMBD.API_LANGBR;

    getMovies(moviesNowPlaying);
  }, []);

  useEffect(() => {
    if (!firstMovie) {
      return;
    } else {
      const urlposter = firstMovie.backdrop_path;

      if (urlposter) {
        const imgH = TMBD.API_IMG_original + urlposter;

        mudaFundo(imgH);
      }
    }
  }, [firstMovie]);

  return (
    <main className={styles.main}>
      {firstMovie.poster_path && (
        <section id="header" className={styles.header}>
          <div>
            <h2>{firstMovie.title}</h2>
            <p className={styles.clasification}>
              <FaStar /> {numberFix(firstMovie.vote_average)} |{' '}
              {`Numero de votos: ${formatDecimal(firstMovie.vote_count)}`}
            </p>
            <p className={styles.decript}>{firstMovie.overview}</p>
            <MovieInfo id_movie={firstMovie.id} />
          </div>
        </section>
      )}

      {topMovies.length > 0 && (
        <section className={styles.container}>
          <h3 className={styles.title_sec}>
            Filmes em destaque nesse momento:
          </h3>
          <Slider>
            {topMovies.map((movie: Ttdmb) => (
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
          </Slider>
        </section>
      )}
    </main>
  );
}
