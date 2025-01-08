import image from '../images/bowls.jpeg';
import Box from '@mui/material/Box';

export default function FullWidthImage({
  content,
}: {
  content: React.ReactNode;
}) {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          height: '400px',
        }}
      >
        {content}
      </Box>
    </>
  );
}
