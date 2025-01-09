/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Content from '../components/Content';

const divStyle = css({
  padding: '1rem',
  'p': {
    margin: '1rem 0'
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
