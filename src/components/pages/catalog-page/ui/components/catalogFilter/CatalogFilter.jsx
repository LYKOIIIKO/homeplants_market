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
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useSearchParams } from "react-router";
import navigationStore from "../../../../../../store/navigationStore";

function CatalogFilter() {
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState([0, 1000]);
	const [size, setSize] = useState("");

	const [searchParams, setSearchParams] = useSearchParams();

	const { navigation } = navigationStore;

	const handleChangeCategory = (event) => {
		setCategory(event.target.value);
		setSearchParams({ category: event.target.value });
	};

	const handleChangePrice = (event, newValue) => {
		setPrice(newValue);
		setSearchParams({price: newValue})
	};

	const handleChangeSize = (event) => {
		setSize(event.target.value);
		setSearchParams({ size: event.target.value });
	};

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
									value={"all"}
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
							aria-label="filter-price"
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
				</Accordion>
			</Box>
		</Box>
	);
}
export default observer(CatalogFilter);
