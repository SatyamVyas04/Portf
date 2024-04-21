import Logo from "../assets/Logo.svg";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useState } from "react";
import GitHub from "../assets/GitHubLogo.svg";
import LinkedIn from "../assets/LinkedInLogo.svg";

function NavBar() {
	return (
		<header className="w-[75%] self-center shadow-sm shadow-primary absolute top-4 flex justify-between items-center flex-row rounded-full px-8 backdrop-blur-md bg-base bg-opacity-25">
			<img
				src={Logo}
				alt="Satyam Vyas"
				style={{
					height: "72px",
				}}
			/>
			<div className="flex flex-row justify-center items-center gap-8">
				<FlyoutLink FlyoutContent={MenuContent}>
					<h1 className="font-SpaceMed sm:text-xl text-sm">Menu</h1>
				</FlyoutLink>
			</div>
		</header>
	);
}

const FlyoutLink = ({ children, FlyoutContent }) => {
	const [open, setOpen] = useState(false);
	const showFlyout = open && FlyoutContent;
	return (
		<div
			className="relative h-fit w-fit"
			onMouseEnter={() => {
				setOpen(true);
			}}
			onMouseLeave={() => {
				setOpen(false);
			}}
		>
			<a className="relative text-accent">
				{children}
				<span></span>
			</a>
			<AnimatePresence>
				{showFlyout && (
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 15 }}
						style={{ translateX: "-50%" }}
						transition={{ duration: 0.4, ease: "anticipate" }}
						className="absolute -left-full sm:left-1/2 top-14 -translate-x-[85%]"
					>
						<div className="absolute -top-8 left-0 right-0 h-16 bg-transparent"></div>
						<FlyoutContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const MenuContent = () => {
	return (
		<div
			className="w-64 bg-base text-base p-8 rounded-xl grid gap-4 divide-y-2 divide-accent content-evenly"
			style={{
				boxShadow: "0 0 24px #7580F0",
			}}
		>
			<a className="smallsubtext pt-3 hover:text-primary" href="#AboutMe">
				AboutMe
			</a>
			<a
				className="smallsubtext pt-3 hover:text-primary"
				href="#Projects"
			>
				Projects
			</a>
			<a
				className="smallsubtext pt-3 hover:text-primary"
				href="#ContactMe"
			>
				Contact Me
			</a>
			<p className="smallsubtext pt-6 flex flex-row justify-evenly items-center">
				<a href="https://www.github.com/SatyamVyas04" target="_blank">
					<img
						src={GitHub}
						alt="Github"
						style={{
							filter: "invert(1)",
							height: "32px",
						}}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/satyam-vyas"
					target="_blank"
				>
					<img
						src={LinkedIn}
						alt="LinkedIn"
						style={{
							filter: "invert(1)",
							height: "32px",
						}}
					/>
				</a>
				<a href="mailto:vyas.satyam.04@gmail.com" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
						/>
					</svg>
				</a>
			</p>
		</div>
	);
};

export default NavBar;
