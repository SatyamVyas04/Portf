import csi from "../assets/csiLogo.svg";
import techstack from "../assets/TechStack.png";
import { DragCloseDrawerComponent } from "./BentoComponents/Drawer";
import Descriptions from "./BentoComponents/Description";

function BentoGrid() {
	return (
		<div id="AboutMe">
			<h1 className="subtext text-center">About Me</h1>
			<div className="flex flex-row flex-wrap sm:grid sm:grid-cols-4 sm:grid-rows-3 gap-4 p-8 md:px-24 lg:px-32 xl:px-64 sm:py-16">
				<DragCloseDrawerComponent
					title={Descriptions[0].title}
					description={Descriptions[0].description}
					span="col-span-1"
				>
					<div className="card">
						<div className="flex flex-row items-center justify-between w-full gap-4">
							<h1 className="smallsubtext">CSI SPIT</h1>
							<img
								src={csi}
								alt="CSI SPIT"
								style={{ height: "48px" }}
							/>
						</div>
					</div>
				</DragCloseDrawerComponent>
				<DragCloseDrawerComponent
					title={Descriptions[1].title}
					description={Descriptions[1].description}
					span="col-span-1"
				>
					<div className="card !bg-primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="#222222"
							className="w-12"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
					</div>
				</DragCloseDrawerComponent>
				<DragCloseDrawerComponent
					title={Descriptions[2].title}
					description={Descriptions[2].description}
					span="col-span-2"
				>
					<div className="card group overflow-clip">
						<div className="flex flex-row items-center justify-center w-full gap-4">
							<img
								src={techstack}
								alt="TechStack"
								className="absolute opacity-0 group-hover:opacity-50 transition-all"
							/>
							<p>Tech Stack</p>
						</div>
					</div>
				</DragCloseDrawerComponent>

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
