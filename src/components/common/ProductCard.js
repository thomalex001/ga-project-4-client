import AddToCartButton from './AddToCartButton';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';


export default function ProductCard({ 
  type, dimensions, brand, color, material, description, image, price, 
  id, onProductClick, isChecked
}) {
  return (
    <Card
      sx={{
        maxWidth: 800,
        height: 250,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      <CardContent
        className='background-secondary'
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
            alignItems: 'center'

          }}>
          <Box>
            <Typography color='text.primary'>{type}</Typography>

            <Typography color='text.secondary'>Dimensions (cm)</Typography>
            <Typography color='text.primary'>{dimensions}</Typography>

            <Typography color='text.secondary'>Brand</Typography>
            <Typography color='text.primary'>{brand}</Typography>

            <Typography color='text.secondary'>Price</Typography>
            <Typography color='text.primary'>
              <span>£</span>
              {price}
            </Typography>
          </Box>
          <Box >
            <label
              className='add-to-cart-button'
              style={{ fontFamily: 'Courgette, cursive' }}>
              <AddToCartButton
                id={id}
                onProductClick={onProductClick}
                isChecked={isChecked}
              />
              {isChecked ? 'Added' : 'Add to Basket'}
            </label>
          </Box>
        </Box>
        <Box sx={{ height: 1 }}>
          <CardMedia
            component='img'
            image={image}
            alt={type}
            sx={{  width: 220, height: 210 }}
          />
        </Box>
      </CardContent>
    </Card>
  ); 
}

