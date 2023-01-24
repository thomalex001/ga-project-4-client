// import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button
} from '@mui/material';


export default function ProductCard({ type, dimensions, brand, color, material, description, image, price }) {
  // const navigate = useNavigate();
  // const navigateToBook = () => navigate(`/diary-entries/${id}`);

  return (
    <Card
      sx={{
        maxWidth: 800,
        height: 250,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 1
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flexstart',
            alignItems: 'center'
          }}
        >
          {/* <FavoriteButton id={id} /> */}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}
        >
          <Box>
            <Typography
              sx={{ mb: 1, fontWeight: 'fontWeightMedium' }}
              color="text.primary"
            >
              {type}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              {dimensions}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontWeight: 'fontWeightLight' }}
            >
              {brand}
            </Typography>
          </Box>
          <Button
            size="small"
            // onClick={navigateToBook}
            sx={{ ml: -0.6, textAlign: 'left', borderRadius: '4px' }}
          >
            Learn More
          </Button>
        </Box>
        <Box sx={{ height: 1 }}>
          <CardMedia
            component="img"
            image={image}
            alt={type}
            sx={{ minHeight: 180, maxWidth: 130 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
