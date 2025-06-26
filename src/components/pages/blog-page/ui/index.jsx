import { Box, Container, Typography } from "@mui/material";
import PageNavigation from "../../../shared/ui/pageNavigation/PageNavigation";

function BlogPage() {
	return (
		<>
			<PageNavigation linkTo={'blog'} title={'Блог'} />
			
		<Box my={3}>
			<Container maxWidth="xl">
				<Typography variant="h4" textAlign="center" m={2}>
					Блог
				</Typography>
			</Container>
		</Box>
		</>
	);
}
export default BlogPage;
