/** @jsxImportSource @emotion/react */
import '@fontsource-variable/noto-sans';
import { css } from '@emotion/react';
import { NavLink } from 'react-router';
import '@fontsource-variable/noto-sans';

const cardStyle = {
  card: css({}),
  cardBody: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Noto Sans Variable, sans-serif',
    textWrap: 'balance',
  }),
  cardTitle: css({ marginBottom: '.5rem' }),
  cardSubtitle: css({ marginBottom: '1.5rem' }),
  cardText: css({}),
  cardLink: css({
    '&: hover': {
      color: 'var(--navy)',
      backgroundColor: 'var(--winter)',
      transition: '0.5s',
    },
    backgroundColor: 'var(--orange)',
    borderRadius: '20px',
    marginTop: '1.5rem',
    padding: '.5rem 2rem',
    width: 'max-content',
  }),
};
const { card, cardBody, cardTitle, cardSubtitle, cardText, cardLink } =
  cardStyle;

interface CardProps {
  content: {
    title: string;
    subtitle?: string;
    text: string;
    link1: { url: string; text: string };
    link2?: { url: string; text: string };
  };
}

export default function Card({ content }: CardProps) {
  const { title, subtitle, text, link1, link2 } = content;
  return (
    <div css={card}>
      <div css={cardBody}>
        <h3 css={cardTitle}>{title}</h3>
        {subtitle && <h5 css={cardSubtitle}>{subtitle}</h5>}
        <p css={cardText}>{text}</p>
        <div css={cardLink}>
          <NavLink to={link1.url}>{link1.text}</NavLink>
        </div>
        {link2 && (
          <div css={cardLink}>
            <NavLink to={link2.url}>{link2.text}</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
