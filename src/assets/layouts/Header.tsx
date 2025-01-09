/** @jsxImportSource @emotion/react */
import Heading from '../components/Heading';
import Navigation from '../components/Navigation';
import FullWidthImage from '../components/FullWidthImage';
import { css } from '@emotion/react';

const container = css({
  marginTop: '100px',
});

export default function Header() {
  return (
    <>
      <Navigation />
      <div css={container}>
        <FullWidthImage
          content={
            <>
              <Heading />
            </>
          }
        ></FullWidthImage>
      </div>
    </>
  );
}
