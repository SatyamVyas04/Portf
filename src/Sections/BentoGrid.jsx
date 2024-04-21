import myLogo from "../assets/Logo.svg";
import csi from "../assets/csiLogo.svg";
import techstack from "../assets/TechStack.png";
import LCLogo from "../assets/LeetCode.png";
import GHLogo from "../assets/GitHubLogo.svg";
import { DragCloseDrawerComponent } from "./BentoComponents/Drawer";
import Descriptions from "./BentoComponents/Description";

function BentoGrid() {
	return (
		<div id="AboutMe">
			<h1 className="subtext text-center">About Me</h1>
			<div className="flex flex-row flex-wrap justify-center sm:justify-stretch sm:grid sm:grid-cols-4 sm:grid-rows-3 gap-4 p-8 md:px-24 lg:px-32 xl:px-64 sm:py-16">
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
								className="sm:h-[48px] h-8"
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
							className="sm:h-[48px] h-8"
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
				<DragCloseDrawerComponent
					title={Descriptions[3].title}
					description={Descriptions[3].description}
					span="col-span-1 row-start-2"
				>
					<div className="card">
						<h1 className="flex flex-row gap-2 items-center">
							<p>3</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
								/>
							</svg>
							<p>@Codechef</p>
						</h1>
					</div>
				</DragCloseDrawerComponent>
				<DragCloseDrawerComponent
					title={Descriptions[4].title}
					description={Descriptions[4].description}
					span="col-span-2 row-start-2"
				>
					<div className="card flex flex-col sm:flex-row items-baseline justify-center gap-4 hover:shadow-[0px_0px_24px_#F09A1A] !border-orange-400">
						<img
							src={LCLogo}
							alt="Leetcode"
							width="250px"
							style={{
								filter: "drop-shadow(0px 0px 24px #F09A1A)",
							}}
						/>
					</div>
				</DragCloseDrawerComponent>
				<div className="card col-start-4 row-start-2 !p-0 overflow-hidden !bg-primary">
					<img
						src={myLogo}
						alt="Satyam Vyas"
						className="h-32"
						style={{
							filter: "invert(0.9)",
						}}
					/>
				</div>
				<DragCloseDrawerComponent
					title={Descriptions[5].title}
					description={Descriptions[5].description}
					span="col-span-2 row-start-3"
				>
					<div className="card">
						<div className="flex sm:flex-row flex-col gap-4 items-center justify-center">
							<h1>Open Source Contributor</h1>
							<img
								src={GHLogo}
								alt="Github Logo"
								className="h-12"
								style={{ filter: "invert(1)" }}
							/>
						</div>
					</div>
				</DragCloseDrawerComponent>
				<div className="card col-start-3 row-start-3 !bg-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="#222"
						className="w-12"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
						/>
					</svg>
				</div>
				<div className="card col-start-4 row-start-3">Resume Link</div>
			</div>
		</div>
	);
}

export default BentoGrid;
