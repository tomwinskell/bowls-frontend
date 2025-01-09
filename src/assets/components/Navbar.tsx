/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { size, device } from '../device';
import { NavLink } from 'react-router';
import { useState } from 'react';
import '@fontsource-variable/noto-sans';

const pages = ['Home', 'About', 'Contact'];

const container = css({
  position: 'fixed',
  width: '100vw',
  top: '0',
  left: '0',
  backgroundColor: 'transparent',
  zIndex: '100',
});

const nav = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  padding: '1rem',
  backgroundColor: 'blue',
  color: 'white',
});

const navMenu = (showMenu: boolean) =>
  css({
    background: 'blue',
    boxSizing: 'border-box',
    [device.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      height: showMenu ? '100vh' : '0',
      width: '100vw',
      position: 'fixed',
      zIndex: '1',
      left: '0',
      top: '0',
      backgroundColor: 'rgba(0,0,0, 0.95)',
      overflow: 'hidden',
      transition: '0.5s',
    },
  });

const navToggle = css({
  display: 'none',
  [device.mobile]: {
    display: 'block',
  },
});

const navList = css({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  gap: '2.5rem',
  padding: '0',
  [device.mobile]: {
    marginTop: '5rem',
    flexDirection: 'column',
  },
});

const navLink = css({
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Noto Sans Variable, sans-serif',
});

const navItem = css({
  textAlign: 'center',
});

const navClose = css({
  display: 'none',
  alignSelf: 'end',
  fontFamily: 'Noto Sans Variable, sans-serif',
  marginRight: '1.2rem',
  marginTop: '1.2rem',
  [device.mobile]: { display: 'block' },
});

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  // if window size is mobile close menu
  function closeMenuMobile() {
    if (window.innerWidth <= parseInt(size['mobile'])) {
      setShowMenu(false);
    }
  }

  return (
    <div css={container}>
      <nav css={nav}>
        <NavLink css={navLink} to="/">
          Mundesley Bowls
        </NavLink>

        <div css={navMenu(showMenu)}>
          <div css={navClose} onClick={toggleMenu}>
            x
          </div>
          <ul css={navList}>
            {pages.map((page) => (
              <li key={page} css={navItem}>
                <NavLink
                  to={`/${page.toLowerCase()}`}
                  css={navLink}
                  onClick={closeMenuMobile}
                >
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div css={navToggle} onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </div>
  );
}
