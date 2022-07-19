import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}qty`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([0, 50]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 200 }}>
      <h3>Range by quantity:</h3>
      <Slider
        getAriaLabel={() => 'Quantity range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
