import { useState, useEffect } from 'react';
import { API } from '../../lib/api';
import Radio from '@mui/material/Radio';

export default function AddToCartButton({ id }) {
  const [isChecked, setIsChecked] = useState(false);
  const cartId = localStorage.getItem('cartId');

  useEffect(() => {
    if (!id || !isChecked || !cartId) return;
    API.PUT(
      API.ENDPOINTS.updateUserCart(cartId),
      { productId: id },
      API.getHeaders()
    )
      .then(() => {})
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, [id, isChecked]);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Radio
      checked={isChecked}
      onClick={handleChange}
      value={id}
      name='radio-buttons'
      inputProps={{ 'aria-label': 'A' }}
    />
  );
}
