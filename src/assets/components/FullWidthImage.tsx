/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import image from '../images/bowls.jpeg';

const container = css({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  overflow: 'hidden',
});

interface ContentProps {
  children: React.ReactNode;
}

export default function FullWidthImage({ children }: ContentProps) {
  return <div css={container}>{children}</div>;
}
