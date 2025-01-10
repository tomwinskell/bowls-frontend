/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const allDots = css({
  display: 'flex',
  justifyContent: 'center',
});

const dots = (active: boolean) =>
  css({
    cursor: 'pointer',
    height: '.7rem',
    width: '.7rem',
    backgroundColor: active ? 'var(--orange)' : 'var(--navy)',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '.8rem',
    '&:hover': {
      backgroundColor: 'var(--orange)',
    },
  });

interface DotsProps {
  activeIndex: number;
  handleClick: (newIndex: number) => void;
  sliderImages: { url: string; alt: string; text: string }[];
}

export default function Dots({
  activeIndex,
  handleClick,
  sliderImages,
}: DotsProps) {
  return (
    <div css={allDots}>
      {sliderImages.map((_slide, index) => (
        <span
          key={index}
          css={dots(activeIndex === index)}
          onClick={() => handleClick(index)}
        ></span>
      ))}
    </div>
  );
}
