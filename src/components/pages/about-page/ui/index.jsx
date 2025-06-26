import { Box, Container, Typography } from "@mui/material";
import PageNavigation from "../../../shared/ui/pageNavigation/PageNavigation";

function AboutPage() {
	return (
		<>
			<PageNavigation linkTo={"about"} title={"О нас"} />

			<Box my={3}>
				<Container maxWidth="xl">
					<Typography variant="h4" textAlign="center" m={2}>
						О нас
					</Typography>
				</Container>
			</Box>
		</>
	);
}
export default AboutPage;
