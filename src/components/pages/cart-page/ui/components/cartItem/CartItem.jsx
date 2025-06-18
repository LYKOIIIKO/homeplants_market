import ClearIcon from "@mui/icons-material/Clear";
import { Grid, IconButton } from "@mui/material";
import CartCounter from '../cartCounter/CartCounter';
import s from './CartItem.module.css';

function CartItem({ item }) {
	return (
		<Grid container spacing={2}>
			<Grid size={2}>
				<IconButton>
					<ClearIcon />
				</IconButton>
			</Grid>
			<Grid size={2}>
				<img className={s.image} src={item.img} />
			</Grid>
			<Grid size="grow">{item.title}</Grid>
			<Grid size={2}><CartCounter /></Grid>
			<Grid size={2}></Grid>
		</Grid>
	);
}
export default CartItem;
