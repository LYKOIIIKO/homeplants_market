import { Container } from "@mui/material";
import * as images from '../../../../assets';
import s from "./index.module.css";
function PageNotFound() {
	return (
		<div className={s.app}>
			<Container
				maxWidth="xl"
				sx={{ height: "100%", position: "relative" }}
			>
				<div className={s.error}>404</div>
				<div className={s.img}>
					<img
						className={s.imgCat}
						src={images.Img404}
						alt="cat"
					/>
					<h1 className={s.okak}>ОКАК</h1>
				</div>
			</Container>
		</div>
	);
}
export default PageNotFound;
