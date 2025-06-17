import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Avatar, Box, Paper, Rating, styled, Typography } from "@mui/material";
import s from "./FeedbackCard.module.css";

const StyledRating = styled(Rating)({
	"& .MuiRating-iconFilled": {
		color: "#ff6d75",
	},
	"& .MuiRating-iconHover": {
		color: "#ff3d47",
	},
});

function FeedbackCard(props) {
	const { item } = props;
	return (
		<Paper variant="elevation" elevation={3} className={s.container}>
			<FormatQuoteIcon fontSize="large" />

			<Typography variant="body1" textAlign="center">
				{item.text}
			</Typography>

			<StyledRating
				name="customized-color"
				defaultValue={4}
				value={item.userRating}
				getLabelText={(value) =>
					`${value} Heart${value !== 1 ? "s" : ""}`
				}
				precision={0.5}
				icon={<FavoriteIcon fontSize="inherit" />}
				emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
				readOnly
			/>

			<Avatar
				alt={item.userName}
				src={item.userAvatar}
				sx={{ width: "80px", height: "80px" }}
			/>

			<Box className={s.wrapperUserName}>
				<Typography>{item.userName}{`  `}  </Typography>
				<Typography>
					{`  `} / {item.userJob}
				</Typography>
			</Box>
		</Paper>
	);
}
export default FeedbackCard;
