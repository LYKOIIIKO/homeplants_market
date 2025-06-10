import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


function Search() {
	return (
		<Paper variant="elevation" elevation={1}>
			<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Поиск"
				inputProps={{
					"aria-label": "search",
				}}
			/>
		</Paper>
	);
}
export default Search;