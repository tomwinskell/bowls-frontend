import Typography from '@mui/material/Typography';
import { Container, Toolbar } from '@mui/material';

function Heading() {
  return (
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mundesley Haig Bowls Club
          </Typography>
        </Toolbar>
      </Container>
  );
}
export default Heading;
