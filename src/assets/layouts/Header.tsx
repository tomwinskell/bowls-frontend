import Heading from '../components/Heading';
import Navigation from '../components/Navigation';
import FullWidthImage from '../components/FullWidthImage';

export default function Header() {
  return (
    <FullWidthImage
      content={
        <>
          <Heading />
          <Navigation />
        </>
      }
    ></FullWidthImage>
  );
}
