import { Box, Drawer } from "@mui/material";
import CatalogFilter from "../catalogFilter/CatalogFilter";

function DrawerFilter(props) {
	const { open, handler } = props;
	return (
		<Drawer
			variant="temporary"
			open={open}
			onClose={handler}
			ModalProps={{
				keepMounted: true,
			}}
			sx={{
				display: { xs: "block", lg: "none" },
				"& .MuiDrawer-paper": {
					boxSizing: "border-box",
					width: "80dvw",
				},
			}}
		>
			<Box m={2} >
				<CatalogFilter />
			</Box>
			<Box height="100%" onClick={handler} sx={{ textAlign: "center" }}></Box>
		</Drawer>
	);
}
export default DrawerFilter;
