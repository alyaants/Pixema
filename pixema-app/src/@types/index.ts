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


export type MovieCardById = {
    fees?: {
      world?: {
        value?: number;
        currency?: string;
      };
      usa: {
        value?: number;
        currency?: string;
      };
    };
    status?: any;
    externalId?: {
      tmdb?: number;
      imdb?: string;
    };
    rating?: {
      kp?: number;
      imdb?: number;
      filmCritics?: number;
      russianFilmCritics?: number;
      await?: any;
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
    images?: {
      framesCount?: number;
    };
    productionCompanies?: {
      name?: string;
      url?: string;
      previewUrl?: string;
    }[];
    spokenLanguages?: {
      name?: string;
      nameEn?: string;
    }[];
    id?: number;
    type?: string;
    name?: string;
    description?: string;
    distributors?: {
      distributor?: any;
      distributorRelease?: string;
    };
    premiere?: {
      world?: string;
      dvd?: string;
    };
    slogan?: string;
    year?: number;
    budget?: {
      value?: number;
      currency?: string;
    };
    poster?: {
      url?: string;
      previewUrl?: string;
    };
    facts?: {
      value?: string;
      type?: string;
      spoiler?: boolean;
    }[];
    genres?: {
      name?: string;
    }[];
    countries?: {
      name?: string;
    }[];
    seasonsInfo?: any[];
    persons?: {
      id?: number;
      photo?: string;
      name?: string;
      enName?: string;
      description?: string;
      profession?: string;
      enProfession?: string;
    }[];
    typeNumber?: number;
    alternativeName?:string;
    enName?: string;
    names?:{
      name?: string;
      language?: string;
      type?: string;
    }[];
    ageRating?: number;
    ratingMpaa?: string;
    updateDates?: any[];
    sequelsAndPrequels?: {
      id?: number;
      name?: string;
      enName?: string;
      alternativeName?: string;
      type?: string;
      poster?: {
        url?: string;
        previewUrl?: string;
      };
    }[];
    updatedAt?: string;
    similarMovies: SimilarMovies[];
    shortDescription?: string;
    technology?: {
      hasImax?: boolean;
      has3D?: boolean;
    };
    ticketsOnSale?: boolean;
    imagesInfo?: {
      framesCount?: number;
    };
    logo?: {
      url?: string;
    };
    watchability?: {
      items?: any[];
    };
    top10?: any;
    top250?: any;
    deletedAt?: any;
    audience?: {
      count?: number;
      country?: string;
    }[];
    isSeries: boolean;
    seriesLength?: any;
    totalSeriesLength?: any;
    networks?: any;
    videos?: {
      trailers?: {
        url?: string;
        name?: string;
        site?: string;
        type?: string;
      }[];
    };
  }

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


export type SimilarMovies = {
    id?: number;
    name?: string;
    enName?: string;
    alternativeName?: string;
    type?: string;
    poster?: {
      url?: string;
      previewUrl?: string;
    };
}