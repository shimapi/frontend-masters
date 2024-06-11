import "./Switch.scss";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Switch = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className="switch__container">
			<div className="switch__mode">{theme} Mode</div>
			<input type="checkbox" id="switch" onChange={toggleTheme} />
			<label htmlFor="switch"></label>
		</div>
	);
};

export default Switch;
