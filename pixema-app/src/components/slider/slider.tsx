import React, { useState } from "react";
import { MovieCard } from "../../@types";
import styles from "./slider.module.scss";
import FilmCard from "../filmCard/filmCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowPrevIcon } from "../assets/icons/arrow/arrowPrev";
import { ArrowNextIcon } from "../assets/icons/arrow/arrowNext";

const SimilarMoviesSlider: React.FC<{ similarMovies: MovieCard[] }> = ({
  similarMovies,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const settings = {
    infinite: true,
    slidesToShow: itemsPerPage,
    arrows: false,
    afterChange: (currentSlide: number) => setCurrentPage(currentSlide),
  };

  const totalPages = Math.ceil(similarMovies.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = similarMovies.slice(startIndex, endIndex);
  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = currentPage === totalPages - 1;

  return (
    <div className={styles.similarMoviesSlider}>
      <span>Recommendations</span>
      <div className={styles.btns}>
        <button
          className={styles.prev}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={isPrevDisabled}
        >
          <ArrowPrevIcon />
        </button>
        <button
          className={styles.next}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={isNextDisabled}
        >
          <ArrowNextIcon />
        </button>
      </div>
      <Slider {...settings}>
        {currentMovies.map((movie) => (
          <FilmCard key={movie.id} {...movie} />
        ))}
      </Slider>
    </div>
  );
};

export default SimilarMoviesSlider;
