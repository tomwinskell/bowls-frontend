/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import image from '../images/bowls.jpeg';

const container = css({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  height: '400px',
  display: 'flex',
  justifyContent: 'end',
  alignContent: 'end',
});

interface ContentProps {
  children: React.ReactNode;
}

export default function FullWidthImage({ children }: ContentProps) {
  return <div css={container}>{children}</div>;
}
