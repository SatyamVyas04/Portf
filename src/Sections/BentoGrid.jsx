import csi from "../assets/csiLogo.svg";

function BentoGrid() {
	return (
		<div id="AboutMe">
			<h1 className="subtext text-center">About Me</h1>
			<div className="flex flex-col items-center sm:grid sm:grid-cols-4 sm:grid-rows-3 gap-4 lg:px-64 sm:py-16 p-16">
				<div className="card">
					<div className="flex flex-row items-center justify-between w-full overflow-hidden">
						<h1 className="smallsubtext">CSI SPIT</h1>
						<img
							src={csi}
							alt="CSI SPIT"
							style={{ height: "64px" }}
						/>
					</div>
				</div>
				<div className="card">IMAGE</div>
				<div className="card col-span-2">TECH STACK</div>
				<div className="card row-start-2">CodeChef Stats</div>
				<div className="card col-span-2 row-start-2">
					LeetCode Problems Solved
				</div>
				<div className="card col-start-4 row-start-2">IMAGE</div>
				<div className="card col-span-2 row-start-3">
					Open Source Contributor
				</div>
				<div className="card col-start-3 row-start-3">IMAGE</div>
				<div className="card col-start-4 row-start-3">Resume Link</div>
			</div>
		</div>
	);
}

export default BentoGrid;
