'use client';

const tmdb = {
  API_KEY: 'api_key=70662fd4135b92fe0fc87874e13356c4',
  API__MOVIE_URL: 'https://api.themoviedb.org/3/movie/',
  API_MOVIE_SEARCH: 'https://api.themoviedb.org/3/search/movie',

  API_MOVIE_GENRE_LIST:
    'https://api.themoviedb.org/3/genre/movie/list?api_key=70662fd4135b92fe0fc87874e13356c4&language=pt-BR',

  API_MOVIE_GENRE:
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=',

  API_IMG_w92: 'https://image.tmdb.org/t/p/w92/',
  API_IMG_w154: 'https://image.tmdb.org/t/p/w154/',
  API_IMG_w185: 'https://image.tmdb.org/t/p/w185/',
  API_IMG_w342: 'https://image.tmdb.org/t/p/w342/',
  API_IMG_w500: 'https://image.tmdb.org/t/p/w500/',
  API_IMG_w780: 'https://image.tmdb.org/t/p/w780/',
  API_IMG_original: 'https://image.tmdb.org/t/p/original/',

  API_TOP_RATED:
    'https://api.themoviedb.org/3/movie/top_rated?api_key=70662fd4135b92fe0fc87874e13356c4',
  API_NOW_PLAYING:
    'https://api.themoviedb.org/3/movie/now_playing?api_key=70662fd4135b92fe0fc87874e13356c4',

  API_LANGBR: '&language=pt-BR&region=BR',
  API_LANG: '&language=pt-BR',
};

export type Ttdmb = {
  adult: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export type TtmdbId = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    },
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    },
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    },
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    },
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const genres = [
  {
    id: 28,
    name: 'Ação',
  },
  {
    id: 12,
    name: 'Aventura',
  },
  {
    id: 16,
    name: 'Animação',
  },
  {
    id: 35,
    name: 'Comédia',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentário',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Família',
  },
  {
    id: 14,
    name: 'Fantasia',
  },
  {
    id: 36,
    name: 'História',
  },
  {
    id: 27,
    name: 'Terror',
  },
  {
    id: 10402,
    name: 'Música',
  },
  {
    id: 9648,
    name: 'Mistério',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Ficção científica',
  },
  {
    id: 10770,
    name: 'Cinema TV',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'Guerra',
  },
  {
    id: 37,
    name: 'Faroeste',
  },
];

export { tmdb, genres };
