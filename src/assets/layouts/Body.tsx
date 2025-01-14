/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Content from '../components/Content';
import { device } from '../device';

const divStyle = css({
  padding: '2rem 3rem 4rem 3rem',
  display: 'flex',
  justifyContent: 'center',
  [device.mobile]: {
    padding: '1rem 2rem 3rem 2rem',
  }
});
interface ContentProps {
  children: React.ReactNode;
}

export default function Body({ children }: ContentProps) {
  return (
    <div css={divStyle}>
      <Content>{children}</Content>
    </div>
  );
}
