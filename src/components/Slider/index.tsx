'use client';
import style from './style.min.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';

const Slider = (props: { children: React.ReactNode }) => {
  const slider = useRef<HTMLDivElement>(null);

  const sliderLeft = () => {
    const divCurrent = slider.current as HTMLElement;
    divCurrent.scrollLeft -= divCurrent.offsetWidth;
  };
  const sliderRight = () => {
    const divCurrent = slider.current as HTMLElement;
    divCurrent.scrollLeft += divCurrent.offsetWidth;
  };
  return (
    <div ref={slider} className={style.movie_container}>
      <button
        onClick={sliderLeft}
        id={style.rowLeft}
        type="button"
        className={style.row}
      >
        <FaArrowLeft />
      </button>

      {props.children}

      <button
        onClick={sliderRight}
        id={style.rowRight}
        type="button"
        className={style.row}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
