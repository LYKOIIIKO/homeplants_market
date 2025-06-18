import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Slider,
	Typography,
} from "@mui/material";
import { useState } from "react";

function CatalogFilter() {
	const [category, setCategory] = useState("");
	const [size, setSize] = useState("");

	const handleChangeCategory = (event) => {
		setCategory(event.target.value);
	};
	const handleChangeSize = (event) => {
		setSize(event.target.value);
	};

	const [price, setPrice] = useState([0, 1000]);

	const handleChangePrice = (event, newValue) => {
		setPrice(newValue);
	};

	const categoryItems = [
		{
			name: "каталог",
			items: [
				{ title: "Комнатные растения", link: "/catalog/indoor-plants" },
				{ title: "Уличные растения", link: "/catalog/outdoor-plants" },
				{
					title: "Очищающие воздух растения",
					link: "/catalog/air-purifying-plants",
				},
				{ title: "Горшки и кашпо", link: "/catalog/planters-and-pots" },
				{ title: "Инструмент", link: "/catalog/tools" },
			],
		},
	];
	
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
								aria-labelledby="demo-controlled-radio-buttons-group"
								name="controlled-radio-buttons-group"
								value={category}
								onChange={handleChangeCategory}
							>
								{categoryItems?.map((item) => {
									if (item.name == "каталог")
										return item.items.map((i, index) => {
											return (
												<FormControlLabel
													value={index}
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
						aria-controls="catalog-filter"
						id="filter-price"
					>
						<Typography textTransform="uppercase">Цена</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ py: 2, px:5}} >
						<Slider
							aria-label="filter-price"
							value={price}
							max={1000}
							step={10}
							onChange={handleChangePrice}
							valueLabelDisplay="auto"
						/>
						<Typography textAlign='center'>{price[0]} руб. - {price[1]} руб.</Typography>
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
								aria-labelledby="demo-controlled-radio-buttons-group"
								name="controlled-radio-buttons-group"
								value={size}
								onChange={handleChangeSize}
							>
								<FormControlLabel
									value="1"
									control={<Radio />}
									label="Маленький"
								/>
								<FormControlLabel
									value="2"
									control={<Radio />}
									label="Средний"
								/>
								<FormControlLabel
									value="3"
									control={<Radio />}
									label="Большой"
								/>
							</RadioGroup>
						</FormControl>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Box>
	);
}
export default CatalogFilter;
