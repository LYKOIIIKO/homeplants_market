import { BrowserRouter } from "react-router";
import "./App.css";
import Layout from "./components/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#f50057",
		},
		text: {
			primary: "#0a4e41",
			secondary: "#0a4e41",
		},
	},
	typography: {
		fontFamily: "Jost",
		fontSize: 16,
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
