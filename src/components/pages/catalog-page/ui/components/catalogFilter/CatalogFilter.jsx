import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Slider,
	Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import navigationStore from "../../../../../../store/navigationStore";

function CatalogFilter({ searchParams, setSearchParams }) {
	const { categoryId } = useParams();

	const location = useLocation();

	const navigate = useNavigate();

	const [category, setCategory] = useState("");

	const [price, setPrice] = useState(
		searchParams.getAll("price").length
			? searchParams.getAll("price")
			: [0, 1000]
	);

	const [size, setSize] = useState(searchParams.get("size"));

	const { navigation } = navigationStore;

	const handleChangeCategory = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setCategory(e.target.value);
		navigate(
			value == ""
				? `/catalog?${searchParams.toString()} `
				: `/catalog/${value}?${searchParams.toString()}`
		);
	};

	const handleChangePrice = (e, value) => {
		e.preventDefault();
		setPrice(value);

		if (location.search && !searchParams.getAll("price").length) {
			setSearchParams(
				`${location.search}&price=${value[0]}&price=${value[1]}`
			);
		} else if (location.search && searchParams.getAll("price").length) {
			let searchParamsStr = location.search.replace(
				/price=(.*?)(?:&|$)/g,
				``
			);
			setSearchParams(
				`${searchParamsStr}&price=${value[0]}&price=${value[1]}`
			);
		} else setSearchParams({ price: value });
	};

	const handleChangeSize = (e, value) => {
		e.preventDefault();
		setSize(value);

		if (location.search && !searchParams.get("size")) {
			setSearchParams(`${location.search}&size=${value}`);
		} else if (location.search && searchParams.get("size")) {
			let searchParamsStr = location.search.replace(
				/size=(.*?)(?:&|$)/g,
				`size=${value}&`
			);
			setSearchParams(searchParamsStr);
		} else setSearchParams({ size: value });
	};

	const handleClearParams = () => {
		setSearchParams({});
		setPrice([0, 1000]);
		setSize("");
		setCategory("");
		navigate("/catalog");
	};

	const handleClearPrice = () => {
		setPrice([0, 1000]);
		let searchParamsStr = location.search.replace(
			/price=(.*?)(?:&|$)/g,
			``
		);
		setSearchParams(searchParamsStr);
	};

	const handleClearSize = () => {
		setSize("");
		let searchParamsStr = location.search.replace(/size=(.*?)(?:&|$)/g, ``);
		setSearchParams(searchParamsStr);
	};

	useEffect(() => {
		setCategory(categoryId == undefined ? "" : categoryId);
	}, [categoryId]);

	useEffect(() => {
		if (location.search == "") {
			setPrice([0, 1000]);
			setSize("");
		}
	}, [location.search]);

	return (
		<Box>
			<Box mb={3}>
				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="catalog-filter"
						id="filter-category"
					>
						<Typography textTransform="uppercase">
							категория
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ py: 0 }}>
						<FormControl>
							<RadioGroup
								aria-labelledby="filter-category-group"
								name="filter-category"
								value={category}
								onChange={handleChangeCategory}
							>
								<FormControlLabel
									key="all"
									value={""}
									control={<Radio />}
									label="Все"
								/>
								{navigation?.map((item) => {
									if (item.name == "каталог")
										return item.items.map((i) => {
											return (
												<FormControlLabel
													key={i.name}
													value={i.name}
													control={<Radio />}
													label={i.title}
												/>
											);
										});
								})}
							</RadioGroup>
						</FormControl>
					</AccordionDetails>
				</Accordion>
			</Box>
			<Box mb={3}>
				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="filter-price-group"
						id="filter-price"
					>
						<Typography textTransform="uppercase">Цена</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ py: 2, px: 5 }}>
						<Slider
							aria-label="filter-price-group"
							name="filter-price"
							value={price}
							max={1000}
							step={10}
							onChange={handleChangePrice}
							valueLabelDisplay="auto"
						/>
						<Typography textAlign="center">
							{price[0]} руб. - {price[1]} руб.
						</Typography>
					</AccordionDetails>
					<AccordionActions>
						<Button
							onClick={handleClearPrice}
							disabled={
								price[0] > 0 || price[1] < 1000 ? false : true
							}
						>
							сбросить
						</Button>
					</AccordionActions>
				</Accordion>
			</Box>
			<Box mb={3}>
				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="catalog-filter"
						id="filter-size"
					>
						<Typography textTransform="uppercase">
							размер
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ py: 0 }}>
						<FormControl>
							<RadioGroup
								aria-labelledby="filter-size-group"
								name="filter-size"
								value={size}
								onChange={handleChangeSize}
							>
								<FormControlLabel
									value="small"
									control={<Radio />}
									label="Маленький"
								/>
								<FormControlLabel
									value="middle"
									control={<Radio />}
									label="Средний"
								/>
								<FormControlLabel
									value="large"
									control={<Radio />}
									label="Большой"
								/>
							</RadioGroup>
						</FormControl>
					</AccordionDetails>
					<AccordionActions>
						<Button
							onClick={handleClearSize}
							disabled={size ? false : true}
						>
							сбросить
						</Button>
					</AccordionActions>
				</Accordion>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Button
					size="large"
					variant="contained"
					onClick={handleClearParams}
					disabled={
						categoryId == undefined && !searchParams.toString()
							? true
							: false
					}
				>
					очистить параметры
				</Button>
			</Box>
		</Box>
	);
}
export default observer(CatalogFilter);
