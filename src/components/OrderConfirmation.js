import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../lib/api';
import { useAuthenticated } from '../hooks/useAuthenticated';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Box, Container, Typography } from '@mui/material';


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
      className='order-confirmation-container'
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography
        sx={{ mb: 2, mt: 2 }}
        maxWidth={'600px'}
        style={{ fontFamily: 'Courgette, cursive', fontSize: '25px' }}>
        Congratulations, your order is confirmed!
      </Typography>
      <Typography
        sx={{ mb: 2 }}
        maxWidth={'500px'}
        style={{
          fontFamily: 'Courgette, cursive',
          fontSize: '20px',
          textAlign: 'center'
        }}>
        We are working hard on building your custom bike and we will let you
        know when it has been shipped.
      </Typography>
      <Typography
        sx={{ mb: 2 }}
        maxWidth={'500px'}
        style={{ fontFamily: 'Courgette, cursive', fontSize: '17px' }}>
        Please see your order confirmation below:
      </Typography>
      <TableContainer
        component={Paper}
        style={{ opacity: '0.9' }}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='left'>Product</TableCell>
              <TableCell align='left'>Price (GBP)</TableCell>
              <TableCell align='left'>Brand</TableCell>
              <TableCell align='left'>Dimensions (cm)</TableCell>
              <TableCell align='left'>Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => {
              if (!cartProducts.includes(product.id)) return null;
              return (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell
                    component='th'
                    scope='row'></TableCell>
                  <TableCell align='left'>{product.type.name}</TableCell>
                  <TableCell align='left'>{product.price}</TableCell>
                  <TableCell align='left'>{product.brand}</TableCell>
                  <TableCell align='left'>{product.dimensions}</TableCell>
                  <TableCell align='left'>{product.color}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Button
          style={{ backgroundColor: '#597877' }}
          variant='contained'
          onClick={() => navigate('/home')}
          sx={{ mt: 2 }}>
          Back to Homepage
        </Button>
      </Box>
    </Container>
  );
}

export default ProductIndex;
