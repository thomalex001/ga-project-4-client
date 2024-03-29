import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../lib/api';
import ProductCard from './common/ProductCard';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { useAuthenticated } from '../hooks/useAuthenticated';

const ProductIndex = () => {
  const cartId = localStorage.getItem('cartId');
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoggedIn] = useAuthenticated();
  const navigate = useNavigate();


  useEffect(() => {
    API.GET(API.ENDPOINTS.allProducts)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
    API.GET(API.ENDPOINTS.userCart(cartId), API.getHeaders())
      .then(({ data }) => {
        setCartProducts(data.product);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  const populateCart = (productId) => {
    let filtered = cartProducts;
    const existingProduct = cartProducts.find((id) => id === productId);
    if (existingProduct) {
      filtered = filtered.filter((id) => id !== productId);
    } else {
      filtered = [...filtered, productId];
    }

    API.PUT(
      API.ENDPOINTS.userCart(cartId),
      {
        owner: isLoggedIn.sub,
        product: filtered
      },
      API.getHeaders()
    )
      .then(({ data }) => {
        setCartProducts(data.product);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  };

  return (
    <Container
      className='background-primary'
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
          style={{ fontFamily: 'Courgette, cursive' }}
          sx={{ mb: 2, pt: 2 }}
          variant='h5'>
          My Basket
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
        {products.map((product) => {
          if (!cartProducts.includes(product.id)) return null;
          return (
            <Grid
              item
              xs={4}
              key={product.id}>
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
                id={product.id}
                isChecked={cartProducts.includes(product.id)}
                onProductClick={populateCart}
              />
            </Grid>
          );
        })}
      </Grid>
      <Typography>
        <p>Total Price: £ </p>
      </Typography>
      <Button
        style={{ backgroundColor: '#597877' }}
        variant='contained'
        onClick={() => navigate('/cart/order_confirmation')}
        sx={{ mb: 4 }}>
        Place Order
      </Button>
    </Container>
  );
};

export default ProductIndex;
