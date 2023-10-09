import About from "../components/about";
import Landing from "../components/landing";
import Navbar from "../components/navbar";

export function App() {
	return (
		<>
			<main>
				<Navbar />
				<Landing />
				<About />
			</main>
			<footer />
		</>
	);
}
