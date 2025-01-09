/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const pages = ['Home', 'About', 'Contact'];

const navbar = css({
  overflow: 'hidden',
  backgroundColor: '#333',
  position: 'fixed',
  top: '0',
  width: '100vw',
});

const navbarLink = css({
  float: 'left',
  display: 'block',
  color: '#f2f2f2',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
  '&:hover': {
    background: '#ddd',
    color: 'black',
  },
});

export default function Navigation() {
  return (
    <div css={navbar}>
      {pages.map((page) => (
        <a key={page} href={page} css={navbarLink}>
          {page}
        </a>
      ))}
    </div>
  );
}
