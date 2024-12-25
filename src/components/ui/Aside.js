"use client";

import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";

const Aside = ({ onChange }) => {
  const [filterByPrice, setFilterByPrice] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    if (onChange) {
      onChange({
        price: filterByPrice,
        size: selectedSizes,
      });
    }
  }, [filterByPrice, selectedSizes, onChange]);

  const handlePriceChange = (event) => {
    setFilterByPrice(event.target.value);
  };

  const handleSizeChange = (size) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((item) => item !== size)
      : [...selectedSizes, size];

    setSelectedSizes(updatedSizes);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        display: { xs: "none", md: "block" },
        paddingRight: "5px",
        borderRight: "1px solid #e0e0e0",
      }}
      spacing={2}
    >
      <Typography variant="body2">Result: 311024</Typography>
      <Typography fontSize={15} variant="h6">
        Price
      </Typography>
      <FormControl sx={{ width: 250 }} size="small">
        <InputLabel id="demo-simple-select-label">Filter by Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterByPrice}
          onChange={handlePriceChange}
          label="Filter by Price"
        >
          <MenuItem selected value={"low"}>
            Low
          </MenuItem>
          <MenuItem value={"middle"}>Middle</MenuItem>
          <MenuItem value={"high"}>High</MenuItem>
        </Select>
      </FormControl>
      <Typography fontSize={15} variant="h6">
        Sizes
      </Typography>
      <FormGroup>
        {["M", "L", "XL"].map((size) => (
          <FormControlLabel
            key={size}
            control={
              <Checkbox
                color="error"
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
            }
            label={size}
          />
        ))}
      </FormGroup>
    </Stack>
  );
};

export default Aside;
