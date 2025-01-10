/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '@fontsource-variable/noto-sans';

const slideStyle = {
  container: (active: boolean) =>
    css({
      height: '40vh',
      width: '100%',
      position: 'relative',
      display: active ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'end',
      p: {
        margin: '2rem 0',
        padding: '.8rem 2.5rem',
      },
    }),
  image: css({
    position: 'absolute',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  }),
  text: css({
    zIndex: '2',
    alignSelf: 'center',
    margin: '5rem',
    color: 'var(--navy)',
    backgroundColor: 'var(--winter-transparent)',
    fontWeight: '600',
    fontFamily: 'Noto Sans Variable, sans-serif',
  }),
};

const { container, image, text } = slideStyle;

interface SliderContentProps {
  activeIndex: number;
  sliderImages: { url: string; alt: string; text: string }[];
}

export default function SliderContent({
  activeIndex,
  sliderImages,
}: SliderContentProps) {
  return (
    <>
      {sliderImages.map((slide, index) => (
        <div key={index} css={container(activeIndex === index)}>
          <img css={image} src={slide.url} alt={slide.alt} />
          <p css={text}>{slide.text}</p>
        </div>
      ))}
    </>
  );
}
