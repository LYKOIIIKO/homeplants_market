import { Box, Container, Typography } from "@mui/material"
import PageNavigation from "../../../shared/ui/pageNavigation/PageNavigation"

function WishlistPage() {
  return (
	<>
			<PageNavigation linkTo={'wishlist'} title={'Избранное'} />
			
		<Box my={3}>
			<Container maxWidth="xl">
				<Typography variant="h4" textAlign="center" m={2}>
					Избранное
				</Typography>
			</Container>
		</Box>
		</>
  )
}
export default WishlistPage