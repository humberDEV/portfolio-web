import About from "../components/about";
import Experience from "../components/experience";
import Landing from "../components/landing";
import Navbar from "../components/navbar";
import Skills from "../components/skills";

export function App() {
	return (
		<>
			<main>
				<Navbar />
				<Landing />
				<About />
				<Experience />
				<Skills />
			</main>
			<footer />
		</>
	);
}
