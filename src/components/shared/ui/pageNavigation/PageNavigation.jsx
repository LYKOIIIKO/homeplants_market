import { Breadcrumbs, Container, Link } from "@mui/material";
import { useNavigate } from "react-router";
import s from "./PageNavigation.module.css";

function PageNavigation({
	linkTo,
	title,
	categoryLink,
	categoryTitle,
	productLink,
	productTitle,
}) {
	const navigate = useNavigate();
	return (
		<section className={s.container}>
			<Container maxWidth="xl">
				<Breadcrumbs aria-label="breadcrumb">
					<Link
						className={s.navLink}
						underline="hover"
						color="inherit"
						variant="body2"
						onClick={() => navigate("/")}
					>
						Главная
					</Link>
					{linkTo && (
						<Link
							className={s.navLink}
							underline="hover"
							color="inherit"
							variant="body2"
							onClick={() => navigate(linkTo)}
						>
							{title}
						</Link>
					)}
					{categoryLink && (
						<Link
							className={s.navLink}
							underline="hover"
							color="inherit"
							variant="body2"
							onClick={() => navigate(`${linkTo}${categoryLink}`)}
						>
							{categoryTitle}
						</Link>
					)}
					{productLink && (
						<Link
							className={s.navLink}
							underline="hover"
							color="inherit"
							variant="body2"
							onClick={() =>
								navigate(
									`${linkTo}${categoryLink}${productLink}`
								)
							}
						>
							{productTitle}
						</Link>
					)}
				</Breadcrumbs>
			</Container>
		</section>
	);
}
export default PageNavigation;
