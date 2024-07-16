'use client';

import styles from './style.min.module.css';
import { tmdb } from '@/api/tmdbApi';
import { FaStar } from 'react-icons/fa';
import MovieInfo from '../buttons/InfoMore';
import { numberFix, formatDecimal } from '@/scripts/formatNum';

type PropsMovieCard = {
  poster_path: string;
  vote_average: number;
  vote_count: number;
  title: string;
  overview: string;
  id: number;
};
const MovieCard = ({
  poster_path,
  vote_average,
  vote_count,
  title,
  overview,
  id,
}: PropsMovieCard) => {
  return (
    <div className={styles.movie_card}>
      <img
        src={
          poster_path ? tmdb.API_IMG_w342 + poster_path : '/img/ilustrativa.jpg'
        }
        alt={title}
      />
      <p>
        <FaStar />
        {numberFix(vote_average)} |{' '}
        {`Total de Votos: ${formatDecimal(vote_count)}`}
      </p>
      <div className={styles.card_overview}>
        <h2>{title}</h2>
        <p>{overview}</p>
        <MovieInfo id_movie={id} />
      </div>
    </div>
  );
};

export default MovieCard;
