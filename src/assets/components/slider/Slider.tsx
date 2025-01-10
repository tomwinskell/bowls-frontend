/** @jsxImportSource @emotion/react */
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';
import { css } from '@emotion/react';
import sliderImages from './sliderImages';
import { useState } from 'react';

const container = css({
  position: 'relative',
});

const lastIndex = sliderImages.length - 1;

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div css={container}>
      <SliderContent activeIndex={activeIndex} sliderImages={sliderImages} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? lastIndex : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === lastIndex ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImages={sliderImages}
        handleClick={(newIndex) => setActiveIndex(newIndex)}
      />
    </div>
  );
}
