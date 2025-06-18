import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, Paper } from "@mui/material";

function Search() {
	return (
		<Paper
			variant="outlined"
			sx={{ display: "flex", alignItems: "center", py: { xs: 2, lg: 0 } }}
		>
			<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
			<Box sx={{ width: "100%" }}>
				<InputBase
					sx={{ width: "90%" }}
					type="search"
					placeholder="Поиск"
					inputProps={{
						"aria-label": "search",
					}}
				/>
			</Box>
		</Paper>
	);
}
export default Search;
