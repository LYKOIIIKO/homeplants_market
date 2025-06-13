import { BrowserRouter } from "react-router";
import "./App.css";
import Layout from "./components/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#0a4e41",
		},
		secondary: {
			main: "#f50057",
		},
		info: {
			main: "#dfe7d0",
		},
		text: {
			primary: "#0a4e41",
			secondary: "#0a4e41",
		},
	},
	typography: {
		fontFamily: ["Montserrat", "sans-serif"].join(","),
		fontSize: 16,
		body2: {
			color: "#dfe7d0",
		},
	},
});

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Layout />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
