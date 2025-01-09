/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FullWidthImage from '../components/FullWidthImage';
import headerImage from '../images/logo.png';

const imageStyle = css({
  maxWidth: '250px',
  width: '75%',
  height: 'auto',
});

export default function Header() {
  return (
    <FullWidthImage>
      <img src={headerImage} alt="logo" css={imageStyle} />
    </FullWidthImage>
  );
}
