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
