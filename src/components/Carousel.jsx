import React, { useState } from 'react'
import './Carousel.css'

export default function Carousel ({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div id = 'carousel'>
      <button onClick={goToPrevious} className = 'carousel-btn prev'>
        ❰
      </button>
      <button onClick={goToNext} className = 'carousel-btn next'>
        ❱
      </button>
      <ul>
        {slides?.map((val, ind) => {
          return (
            <li className={currentIndex == ind ? 'slide active' : 'slide'} key={ind}>
              <img loading='lazy' src={val} alt='' />
            </li>
          )
        })
        }        
      </ul>
    </div>
  )
}
