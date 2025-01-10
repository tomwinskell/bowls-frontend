/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '../components/Card';

const container = css({
  width: '100%',
  backgroundColor: 'var(--blue)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '3rem 2rem',
  textAlign: 'center',
  color: 'var(--winter)'
});

const cardContent = {
  title: 'Mundesley Haig Bowls Club',
  subtitle: 'An outdoor only bowls club in Mundesley, North Norfolk. Since 1929.',
  text: '46 High St, Mundesley, Norwich NR11 8JW',
  link1: {url: 'https://maps.app.goo.gl/CvmQqu4icCJ8YfEE6', text: 'Get Directions'},
  link2: {url: '/contact', text: 'Contact Us'}
}

export default function Footer() {
  return <footer css={container}>
    <Card content={cardContent}/>
  </footer>;
}
