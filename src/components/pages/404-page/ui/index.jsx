import { Container } from "@mui/material";
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
						src="./src/assets/404_page/cat.png"
						alt="cat"
					/>
					<h1 className={s.okak}>ОКАК</h1>
				</div>
			</Container>
		</div>
	);
}
export default PageNotFound;
