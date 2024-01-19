import { ReactElement } from "react";

export type Children = ReactElement | ReactElement[];

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export interface Post {
  poster?: string;
  genres?: string;
  ratingsSummary?: number;
  id?: number;
  title?: string;

  // genres?: GenresData[];
}

export type PostsList = Post[];


export type MovieCard = {
  status?: number | null;
  rating?: {
    kp?: number;
    imdb?: number;
    filmCritics?: number;
    russianFilmCritics?: number;
    await?: number | null;
  };
  votes?: {
    kp?: number;
    imdb?: number;
    filmCritics?: number;
    russianFilmCritics?: number;
    await?: number;
  };
  backdrop?: {
    url?: string;
    previewUrl?: string;
  };
  movieLength?: number;
  id?: number;
  type?: string;
  name?: string;
  description?: string;
  year?: number;
  poster?: {
    url?: string;
    previewUrl?: string;
  };
  genres?: { name: string }[];
  countries?: { name: string }[];
  typeNumber?: number;
  alternativeName?: string;
  enName?: string;
  names?: {
    name?: string;
    language?: string;
    type?: string;
  }[];
  ratingMpaa?: string;
  shortDescription?: string;
  ticketsOnSale?: boolean;
  ageRating?: number;
  logo?: {
    url: string;
  };
  top10?: number | null;
  top250?: number;
  isSeries?: boolean;
  seriesLength?: number | null;
  totalSeriesLength?: number | null;
}

export type movieList = MovieCard[]