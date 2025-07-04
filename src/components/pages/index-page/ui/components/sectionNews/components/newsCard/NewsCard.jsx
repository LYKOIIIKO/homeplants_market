import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router"

function NewsCard({ item, img }) {
	return (
		<Card sx={{ maxWidth: 500, p: 2 }}>
			<CardMedia sx={{ height: 200 }} image={img} title={item.title} />
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 1,
				}}
			>
				<Typography variant="subtitle1" textAlign="center" textTransform="uppercase">
					{item.date}
				</Typography>
				<Typography variant="h5" textAlign="center">
					{item.title}
				</Typography>
				<Typography variant="subtitle2" textAlign="center">
					{item.desc}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "center" }}>
				<Link to={item.link}>
					<Button variant="contained" color="primary" size="large">
						читать
					</Button>
				</Link>
			</CardActions>
		</Card>
	)
}
export default NewsCard
