import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
