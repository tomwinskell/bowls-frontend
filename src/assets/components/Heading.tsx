/** @jsxImportSource @emotion/react */
import '@fontsource-variable/noto-sans';
import { css } from '@emotion/react';

const h1Style = css({
  fontFamily: 'Noto Sans Variable, sans-serif',
  letterSpacing: '-.02em',
  fontSize: '3rem',
  textAlign: 'center',
  marginTop: '100px',
  color: 'var(--navy)',
});

export default function Heading() {
  return <h1 css={h1Style}>Mundesley Haig Bowls Club</h1>;
}
