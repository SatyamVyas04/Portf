import IMG from "../assets/Logo.svg";
function Loader() {
	return (
		<div className="h-dvh w-full flex items-center justify-center bg-primary text-base font-SpaceMed text-8xl">
			<img src={IMG} alt="Loader Image" />
		</div>
	);
}

export default Loader;
