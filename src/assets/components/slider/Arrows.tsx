/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { device } from '../../device';

const arrows = css({
  cursor: 'pointer',
  zIndex: '1',
  position: 'absolute',
  top: '40%',
  margin: '1.5rem',
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  fontSize: '20px',
  backgroundColor: 'var(--blue)',
  color: 'var(--winter)',
  '&: hover': {
    color: 'var(--blue)',
    backgroundColor: 'var(--orange)',
    transition: '0.5s',
  },
  [device.mobile]: {
    top: '30%',
  },
});

const next = css({
  right: '0',
});

const spanLeft = css({
  marginLeft: '10px',
});
const spanRight = css({
  marginLeft: '11px',
});

interface ArrowsProps {
  prevSlide: () => void;
  nextSlide: () => void;
}

export default function Arrows({ prevSlide, nextSlide }: ArrowsProps) {
  return (
    <div>
      <div css={arrows} onClick={prevSlide}>
        <span css={spanLeft}>&#10094;</span>
      </div>
      <div css={[arrows, next]} onClick={nextSlide}>
        <span css={spanRight}>&#10095;</span>
      </div>
    </div>
  );
}
