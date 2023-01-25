import { useState } from 'react';
import Radio from '@mui/material/Radio';

export default function AddToCartButton({ id, isChecked, onProductClick }) {
  const [isSelected, setIsSelected] = useState(isChecked);

  const handleChange = () => {
    setIsSelected(!isSelected);
    onProductClick(id);
  };

  return (
    <Radio
      checked={isSelected}
      onClick={handleChange}
      value={id}
      name='radio-buttons'
      inputProps={{ 'aria-label': 'A' }}
    />
  );
}
