import { useNavigate } from 'react-router-dom';
// import { image } from '../assets/book-background.png';
// import { useEffect } from 'react';
// import { API } from '../lib/api';

import { Button, Box } from '@mui/material';
import { Container } from '@mui/system';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Container
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
          the app to build your own bike from scratch!
        </p>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/register')}
          sx={{ mt: 2 }}>
          Get started
        </Button>
      </Box>
      {/* <h1>Welcome to your book library</h1> */}
      {/* <p>A hub to store all your favourite reads</p> */}
    </Container>
  );
}
