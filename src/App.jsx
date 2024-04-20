import Loader from "./Sections/Loader";
import NavBar from "./Sections/NavBar";
import HeroSection from "./Sections/HeroSection";
import BentoGrid from "./Sections/BentoGrid";
import Project from "./Sections/Project";
import ContactMe from "./Sections/ContactMe";

function App() {
	return (
		<>
			<div className="m-0 p-0 flex flex-col justify-start">
				{/* <Loader /> */}
				<NavBar />
				<HeroSection />
				<BentoGrid />
				<Project />
				<ContactMe />
			</div>
		</>
	);
}

export default App;
