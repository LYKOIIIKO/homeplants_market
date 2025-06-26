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
import navigationStore from "../../../../../../store/navigationStore";

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
	const { navigation } = navigationStore;

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
								<FormControlLabel
									value={0}
									control={<Radio />}
									label="Все"
								/>
								{navigation?.map((item) => {
									if (item.name == "каталог")
										return item.items.map((i, index) => {
											return (
												<FormControlLabel
													key={index}
													value={index + 1}
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
export default observer(CatalogFilter);
