import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

interface IProps {
  onChange?: (rating: number | null) => void;
}

export default function StarsRating(props: IProps) {
  const handleChange = (value: number | null) => {
    const { onChange } = props;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Box component='fieldset' mb={3} borderColor='transparent'>
      <Typography component='legend'>Rating Filter</Typography>
      <Rating
        max={5}
        onChange={(_, newValue) => {
          handleChange(newValue);
        }}
      />
    </Box>
  );
}
