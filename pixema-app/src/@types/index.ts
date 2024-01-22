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

interface ImageProps {
  src: string;
}

export type MovieCard = {
  status?: number;
  rating?: {
    kp?: number;
    imdb?: number;
    filmCritics?: number;
    russianFilmCritics?: number;
    await?: number;
  };
  votes?: {
    kp?: number;
    imdb?: number;
    filmCritics?: number;
    russianFilmCritics?: number;
    await?: number;
  };
  backdrop?: {
    url?: ImageProps;
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
    url?: string;
  };
  top10?: number;
  top250?: number;
  isSeries?: boolean;
  seriesLength?: number;
  totalSeriesLength?: number;
};

export type movieList = MovieCard[];

export enum TabsType {
  Rating = "rating",
  Year = "year",
}

export type TabProps = {
  title: string;
  onClick: () => void;
  active?: boolean;
};

export type Tab = {
  key: TabsType;
  title: string;
};

export type TabsListType = Tab[];

export type TabsListProps = {
  tabsList: TabsListType;
  activeTab: TabsType;
  onClick: (tab: TabsType) => () => void;
};
