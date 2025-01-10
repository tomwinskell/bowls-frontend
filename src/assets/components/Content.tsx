/** @jsxImportSource @emotion/react */

import React from 'react';
import '@fontsource-variable/noto-sans';
import { css } from '@emotion/react';

const fontStyle = css({
  fontFamily: 'Noto Sans Variable, sans-serif',
  maxWidth: '800px',
  textAlign: 'justify',
  textWrap: 'pretty',
  p: {
    margin: '1rem 0',
  },
});

interface ContentProps {
  children: React.ReactNode;
}
export default function Content({ children }: ContentProps) {
  return <div css={fontStyle}>{children}</div>;
}
