import Social from "./Social";
import Overview from "./Overview";
import "./styles.scss";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const App = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`container ${theme}`}>
			<Social />
			<Overview />
		</div>
	);
};

export default App;
