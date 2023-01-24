import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import { redirectToLogin } from '../lib/helpers';
import ProductCard from './common/ProductCard';
import { Container, Grid, Typography, Box } from '@mui/material';

const ProductIndex = () => {
  const [products, setProducts] = useState(null);

  redirectToLogin();

  useEffect(() => {
    API.GET(API.ENDPOINTS.allProducts)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  return (
    <>
      <Container
        maxWidth='1000px'
        sx={{
          display: 'flex',
          justifyContents: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            justifyContents: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
          <Typography
            sx={{ mb: 2 }}
            variant='h5'>
            Bike Parts
          </Typography>
        </Box>
        <Grid
          maxWidth='1000px'
          container
          spacing={2}
          columns={{ xs: 4, md: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContents: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
          {products?.map((product) => (
            <Grid
              item
              xs={4}
              key={product._id}>
              <ProductCard
                className='productCard'
                type={product.type.name}
                dimensions={product.dimensions}
                brand={product.brand}
                color={product.color}
                material={product.material}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductIndex;
