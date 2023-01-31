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
      className='welcome-background'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        textAlign: 'center',
        mt: -5
      }}>
      <Box className='welcome-header'>
        <h1>Welcome to Vintage Custom Cycles</h1>
        <h2>A place to build your own bike with second hand parts.</h2>

        <Button
          style={{ backgroundColor: '#597877' }}
          variant='contained'
          onClick={() => navigate('/register')}
          sx={{ mt: 2 }}>
          Let's Ride !!!
        </Button>
      </Box>
      {/* <h1>Welcome to your book library</h1> */}
      {/* <p>A hub to store all your favourite reads</p> */}
    </Container>
  );
}
