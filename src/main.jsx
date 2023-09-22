import ReactDOM from "react-dom/client";
import { COLOR_THEME_LOCALSTORAGE_KEY } from "./components/navbar.jsx";
import { App } from "./main/App.jsx";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.body.setAttribute(
	"data-theme",
	localStorage.getItem(COLOR_THEME_LOCALSTORAGE_KEY),
);

root.render(<App />);
