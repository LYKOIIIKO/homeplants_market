import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
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
import {
	useNavigate,
	useParams
} from "react-router";
import navigationStore from "../../../../../../store/navigationStore";

function CatalogFilter({searchParams, setSearchParams}) {
	const { categoryId } = useParams();
	
	const navigate = useNavigate();

	const [category, setCategory] = useState("");

	const [price, setPrice] = useState(
		searchParams.getAll("price").length
			? searchParams.getAll("price")
			: [0, 1000]
	);

	const [size, setSize] = useState(searchParams.get("size"));

	const [params, setParams] = useState(
		!searchParams.toString() && !size && price != [0, 1000]
			? {}
			: { price: price, size: size }
	);

	const { navigation } = navigationStore;

	const handleChangeCategory = (event) => {
		const value = event.target.value;
		setCategory(event.target.value);
		navigate(
			value == ""
				? `/catalog?${searchParams.toString()} `
				: `/catalog/${value}?${searchParams.toString()}`
		);
	};

	const handleChangeParams = (e, value) => {
		e.preventDefault();
		const filterName = e.target.name;

		if (filterName == "filter-price") {
			setParams((prev) => ({ ...prev, price: value }));
			setPrice(value);
		}
		if (filterName == "filter-size") {
			setParams((prev) => ({ ...prev, size: value }));
			setSize(value);
		}
	};

	const handleClearParams = () => {
		setParams({});
		setSearchParams({});
		setPrice([0, 1000]);
		setSize("");
		setCategory("");
		navigate("/catalog");
	};

	useEffect(() => {
		setCategory(categoryId == undefined ? "" : categoryId);
	}, [categoryId]);

	useEffect(() => {
		if (Object.keys(params).length != 0) setSearchParams(params);
	}, [params]);

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
							onChange={handleChangeParams}
							valueLabelDisplay="auto"
						/>
						<Typography textAlign="center">
							{price[0]} руб. - {price[1]} руб.
						</Typography>
					</AccordionDetails>
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
								onChange={handleChangeParams}
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
