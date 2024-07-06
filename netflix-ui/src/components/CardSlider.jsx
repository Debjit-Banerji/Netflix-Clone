import React, { useRef } from "react";
import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "./Card";

export default React.memo(function CardSlider({ data, title }) {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <Container className="flex column">
      <p>{title}</p>
      <div className="flex slider items-center">
        <MdChevronLeft className="arrows" onClick={slideLeft} size={40} key = {title} />
        <div ref={sliderRef} className="flex gen overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <MdChevronRight className="arrows" onClick={slideRight} size={40} key={title} />
      </div>
    </Container>
  );
});

const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  p {
    margin-left: 50px;
    font-size: 2rem;
    font-weight: bold;
  }
  .slider {
    display: flex; /* Use flexbox for layout */
    .gen {
      flex: 1; /* Allow .gen to grow and shrink based on available space */
      gap: 1rem;
      margin-left: 10px;
    }
    .arrows {
      opacity: 0;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
