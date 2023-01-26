import { useNavigate } from 'react-router-dom';
// import { image } from '../assets/book-background.png';
// import { useEffect } from 'react';
// import { API } from '../lib/api';
import { createTheme } from '@mui/material/styles';
import { Button, Box } from '@mui/material';
import { Container } from '@mui/system';

export default function Welcome() {
  const navigate = useNavigate();



const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    }
  }
});

  return (
    <Container
      className='welcome-background'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: '',
        backgroundSize: 'cover',
        minWidth: '100vw',
        minHeight: '100vh',
        textAlign: 'center',
        mt: -5
      }}>
      <Box>
        <h1 style={{ color: '#ac8b80' }}>Welcome to Vintage Bikes</h1>
        <p style={{ color: '#ac8b80' }}>
          A website to build your own bike from scratch!
        </p>

        <Button
          color='primary'
          variant='contained'
          onClick={() => navigate('/register')}
          sx={{ mt: 2 }}>
          Let's Ride!
        </Button>
      </Box>
      {/* <h1>Welcome to your book library</h1> */}
      {/* <p>A hub to store all your favourite reads</p> */}
    </Container>
  );
}
