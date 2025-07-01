import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router";

function CatalogSort({ sort, setSort, searchParams, setSearchParams }) {
	const location = useLocation();

	const handleChange = (e) => {
		e.preventDefault();
		let value = e.target.value;
		setSort(value);
        
		if (location.search && searchParams.get("sort") === null) {
			setSearchParams(`${location.search}&sort=${value}`);
		} else if (location.search && searchParams.get("sort") != null) {
			let searchParamsStr = location.search.replace(
				/sort=(.*?)(?:&|$)/,
				`sort=${value}&`
			);
			setSearchParams(searchParamsStr);
		} else setSearchParams({ sort: value });
	};

	useEffect(() => {
		if (!location.search || !searchParams.has('sort')) setSort("saleRate-desc");
	}, [location.search]);

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl size="small">
				<Select
					aria-labelledby="catalog-sort-group"
					name="catalog-sort"
					value={sort}
					onChange={handleChange}
				>
					<MenuItem value={"price-desc"}>
						По цене (сначала дороже)
					</MenuItem>
					<MenuItem value={"price-asc"}>
						По цене (сначала дешевле)
					</MenuItem>
					<MenuItem value={"saleRate-desc"}>По популярности</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
export default CatalogSort;
