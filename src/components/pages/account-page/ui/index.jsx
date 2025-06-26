import { Box, Container, Typography } from "@mui/material";
import PageNavigation from "../../../shared/ui/pageNavigation/PageNavigation";

function AccountPage() {
	return (
		<>
			<PageNavigation linkTo={"account"} title={"Страница пользователя"} />

			<Box my={3}>
				<Container maxWidth="xl">
					<Typography variant="h4" textAlign="center" m={2}>
						Страница пользователя
					</Typography>
				</Container>
			</Box>
		</>
	);
}
export default AccountPage;
