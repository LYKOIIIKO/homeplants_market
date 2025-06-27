import {
	Box,
	Button,
	ButtonGroup,
	MenuItem,
	TextField,
	Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

//validation
const phoneRegExp = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email("Некорректный email")
		.required("Обязательное поле"),
	phone: Yup.string()
		.matches(phoneRegExp, {
			message: "Некорректный телефон",
			excludeEmptyString: false,
		})
		.required("Обязательное поле"),

	name: Yup.string().required("Обязательное поле"),
	lastName: Yup.string().required("Обязательное поле"),
	surName: Yup.string(),
	region: Yup.string(),
	city: Yup.string().required("Обязательное поле"),
	street: Yup.string().required("Обязательное поле"),
	building: Yup.string().required("Обязательное поле"),
	housing: Yup.string(),
	apartment: Yup.string().required("Обязательное поле"),
	postalIndex: Yup.string().required("Обязательное поле"),
	paymentMetod: Yup.string().required("Обязательное поле"),
});

function CheckoutForm() {
	let [cities, setCities] = useState([]);

	let getCities = async () => {
		const resp = await fetch(
			"https://gist.githubusercontent.com/alex-oleshkevich/6946d85bf075a6049027306538629794/raw/3986e8e1ade2d4e1186f8fee719960de32ac6955/by-cities.json"
		);
		const data = await resp.json();
		setCities(data[0].regions);
	};

	useEffect(() => {
		getCities();
	}, []);

	let arr = cities.map((region) => {
		return region.cities.map((city) => {
			return city.name;
		});
	});

	let arrStr = arr.map((item) => {
		return item.join(", ");
	});
	let citiesSort = arrStr.join(", ").split(", ").sort();
	

	const formik = useFormik({
		initialValues: {
			email: "",
			phone: "",
			name: "",
			lastName: "",
			surName: "",
			region: "",
			city: "",
			street: "",
			building: "",
			housing: "",
			apartment: "",
			postalIndex: "",
			paymentMetod: "",
		},
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const {
		values,
		errors,
		handleChange,
		setFieldValue,
		handleSubmit,
		handleReset,
		touched,
		dirty,
		handleBlur,
	} = formik;

	return (
		<>
			<Box id="checkout-form" component={"form"} onSubmit={handleSubmit} px={6}>
				<Box
					mb={3}
					sx={{ display: "flex", flexDirection: "column", gap: 3 }}
				>
					<Typography variant="h5" textAlign="center">
						Покупатель
					</Typography>
					<TextField
						fullWidth
						id="checkout-email"
						label="Email"
						name="email"
						onChange={handleChange}
						error={touched.email && errors.email}
						value={values.email}
						placeholder="Email"
						helperText={touched.email && errors.email}
						onBlur={handleBlur}
						autoComplete="on"
					/>
					<TextField
						fullWidth
						id="checkout-phone"
						label="Телефон"
						name="phone"
						onChange={handleChange}
						error={touched.phone && errors.phone}
						value={values.phone}
						placeholder="Телефон"
						helperText={touched.phone && errors.phone}
						onBlur={handleBlur}
						autoComplete="on"
					/>
				</Box>
				<Box
					mb={3}
					sx={{ display: "flex", flexDirection: "column", gap: 3 }}
				>
					<Typography variant="h5" textAlign="center">
						Адрес доставки
					</Typography>
					<Box
						sx={{
							display: "flex",
							gap: 3,
							flexDirection: { xs: "column", lg: "row" },
						}}
					>
						<TextField
							fullWidth
							id="checkout-name"
							label="Имя"
							name="name"
							onChange={handleChange}
							error={touched.name && errors.name}
							value={values.name}
							placeholder="Имя"
							helperText={touched.name && errors.name}
							onBlur={handleBlur}
							autoComplete="on"
						/>
						<TextField
							fullWidth
							id="checkout-lastName"
							label="Фамилия"
							name="lastName"
							onChange={handleChange}
							error={touched.lastName && errors.lastName}
							value={values.lastName}
							placeholder="Фамилия"
							helperText={touched.lastName && errors.lastName}
							onBlur={handleBlur}
						/>
					</Box>
					<TextField
					id="checkout-surName"
						label="Отчество"
						name="surName"
						onChange={handleChange}
						value={values.surName}
						placeholder="Отчество (если имеется)"
						onBlur={handleBlur}
					/>
					<TextField
						fullWidth
						id="checkout-region"
						label="Область"
						name="region"
						onChange={handleChange}
						value={values.region}
						placeholder="Область"
						onBlur={handleBlur}
						autoComplete="on"
					/>
					<TextField
						fullWidth
						select
						id="checkout-city"
						defaultValue="Солигорск"
						label="Город"
						name="city"
						onChange={handleChange}
						error={touched.city && errors.city}
						value={values.city}
						placeholder="Город"
						helperText={touched.city && errors.city}
						onBlur={handleBlur}
					>
						{citiesSort.map((city, index) => {
							return (
								<MenuItem key={index} value={city}>
									{city}
								</MenuItem>
							);
						})}
					</TextField>
					<TextField
						fullWidth
						id="checkout-street"
						label="Улица"
						name="street"
						onChange={handleChange}
						error={touched.street && errors.street}
						value={values.street}
						placeholder="Улица"
						helperText={touched.street && errors.street}
						onBlur={handleBlur}
					/>
					<Box
						sx={{
							display: "flex",
							gap: 3,
							flexDirection: { xs: "column", lg: "row" },
						}}
					>
						<TextField
							fullWidth
							id="checkout-building"
							label="Дом"
							name="building"
							onChange={handleChange}
							error={touched.building && errors.building}
							value={values.building}
							placeholder="Дом"
							helperText={touched.building && errors.building}
							onBlur={handleBlur}
						/>
						<TextField
							fullWidth
							id="checkout-housing"
							label="Корпус"
							name="housing"
							onChange={handleChange}
							value={values.housing}
							placeholder="Корпус"
							onBlur={handleBlur}
						/>
						<TextField
							fullWidth
							id="checkout-apartment"
							label="Квартира"
							name="apartment"
							onChange={handleChange}
							error={touched.apartment && errors.apartment}
							value={values.apartment}
							placeholder="Квартира"
							helperText={touched.apartment && errors.apartment}
							onBlur={handleBlur}
						/>
					</Box>
					<TextField
						fullWidth
						id="checkout-postalIndex"
						label="Индекс"
						name="postalIndex"
						onChange={handleChange}
						error={touched.postalIndex && errors.postalIndex}
						value={values.postalIndex}
						placeholder="Индекс"
						helperText={touched.postalIndex && errors.postalIndex}
						onBlur={handleBlur}
					/>
					<TextField
						fullWidth
						select
						id="checkout-paymentMetod"
						defaultValue="cash"
						label="Способ оплаты"
						name="paymentMetod"
						onChange={handleChange}
						error={touched.paymentMetod && errors.paymentMetod}
						value={values.paymentMetod}
						placeholder="Способ оплаты"
						helperText={touched.paymentMetod && errors.paymentMetod}
						onBlur={handleBlur}
					>
						<MenuItem value="cash">Наложенный платеж</MenuItem>
						<MenuItem value="cart">Оплата картой</MenuItem>
					</TextField>
				</Box>
				<ButtonGroup
					size="large"
					sx={{ display: "flex", justifyContent: "flex-end" }}
				>
					<Button variant="contained" disabled={!dirty} type="submit">
						заказать
					</Button>
					<Button onClick={handleReset} variant="outlined">
						очистить форму
					</Button>
				</ButtonGroup>
			</Box>
		</>
	);
}
export default CheckoutForm;
