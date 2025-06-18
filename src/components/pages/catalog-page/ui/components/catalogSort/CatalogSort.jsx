import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function CatalogSort() {
 const [sort, setSort] = useState('5');

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl size="small" >
        <Select
          labelId="catalog_sort_selector_label"
          id="catalog_sort_selector"
          value={sort}
          onChange={handleChange}
        >
          <MenuItem value={1}>По цене (сначала дороже)</MenuItem>
          <MenuItem value={2}>По цене (сначала дешевле)</MenuItem>
          <MenuItem value={3}>По новизне</MenuItem>
		  <MenuItem value={4}>По скидке</MenuItem>
		  <MenuItem value={5}>По популярности</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default CatalogSort