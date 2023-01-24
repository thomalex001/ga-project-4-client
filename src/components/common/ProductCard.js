// import { useNavigate } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button
} from '@mui/material';


export default function ProductCard({ type, dimensions, brand, color, material, description, image, price, id }) {
  // const navigate = useNavigate();
  // const navigateToBook = () => navigate(`/diary-entries/${id}`);

  return (
    <Card
      sx={{
        maxWidth: 800,
        height: 250,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 1
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flexstart',
            alignItems: 'center'
          }}>
          {/* <FavoriteButton id={id} /> */}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
          <Box>
            <Typography color='text.secondary'>Type</Typography>
            <Typography color='text.primary'>{type}</Typography>

            <Typography color='text.secondary'>Dimensions (cm)</Typography>
            <Typography color='text.primary'>{dimensions}</Typography>

            <Typography color='text.secondary'>Brand</Typography>
            <Typography color='text.primary'>{brand}</Typography>

            <Typography color='text.secondary'>Price</Typography>
            <Typography color='text.primary'><span>£</span>{price}</Typography>
          </Box>
          <Button
            size='small'
            // onClick={navigateToBook}
            sx={{ ml: -0.6, textAlign: 'left', borderRadius: '4px' }}>
            Add to Basket
          </Button>
        </Box>
        <Box sx={{ height: 1 }}>
          <CardMedia
            component='img'
            image={image}
            alt={type}
            sx={{ minHeight: 180, maxWidth: 250 }}
          />
        </Box>
        <AddToCartButton id={id} />
      </CardContent>
    </Card>
  );
}
