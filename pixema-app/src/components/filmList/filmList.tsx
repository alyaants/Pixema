import React, { FC } from "react";
import styles from "./PostList.module.scss";
import { PostsList } from "../../../src/@types/index";
import FilmCard from "../filmCard/filmCard";

interface FilmListProps {
  postList: PostsList;
  isTrend?: boolean;
  isListLoading?: boolean;
}

const FilmList = (props: FilmListProps) => {
  return (
    <div className={styles.postListContainer}>
      <FilmCard
        image={"_"}
        genres={"__"}
        ratingsSummary={0}
        id={0}
        title={""}
      />
      ;
    </div>
  );
};

export default FilmList;
