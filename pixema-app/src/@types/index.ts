import { ReactElement } from "react";

export type Children = ReactElement | ReactElement[];

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export interface Post {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;

  // genres?: GenresData[];
}

export type PostsList = Post[];
