import About from "../components/about";
import Experience from "../components/experience";
import Landing from "../components/landing";
import Navbar from "../components/navbar";

export function App() {
	return (
		<>
			<main>
				<Navbar />
				<Landing />
				<About />
				<Experience />
			</main>
			<footer />
		</>
	);
}
