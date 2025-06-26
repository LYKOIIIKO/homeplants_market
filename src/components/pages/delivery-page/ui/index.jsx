import { Box, Container, Typography } from "@mui/material"
import PageNavigation from "../../../shared/ui/pageNavigation/PageNavigation"

function DeliveryPage() {
  return (
    <>
			<PageNavigation linkTo={'delivery'} title={'Доставка'} />
	
	<Box my={3}>
			<Container maxWidth="xl">
				<Typography variant="h4" textAlign="center" m={2}>
					Доставка
				</Typography>
			</Container>
		</Box>
		</>
  )
}
export default DeliveryPage