import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

function Search() {
	const navigate = useNavigate();

	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		if (e.key === "Enter" || e.type === "click") {
			navigate(`/catalog/?search=${search.toLowerCase()}`);
			setSearch("");
		}
	};

	return (
		<Paper
			variant="outlined"
			sx={{ display: "flex", alignItems: "center", py: { xs: 2, lg: 0 } }}
		>
			<IconButton
				type="button"
				sx={{ p: "10px" }}
				aria-label="search"
				onClick={handleSearch}
			>
				<SearchIcon />
			</IconButton>
			<Box sx={{ width: "100%" }}>
				<InputBase
					sx={{ width: "90%" }}
					aria-label="search"
					type="search"
					name="search"
					placeholder="Поиск"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={handleSearch}
					autoComplete="off"
				/>
			</Box>
		</Paper>
	);
}
export default Search;
