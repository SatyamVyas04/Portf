import Logo from "../assets/Logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GitHub from "../assets/GitHubLogo.svg";
import LinkedIn from "../assets/LinkedInLogo.svg";

function NavBar() {
	return (
		<div className="w-[75%] self-center shadow-sm shadow-primary absolute top-4 flex justify-between items-center flex-row rounded-full px-8 backdrop-blur-md bg-base bg-opacity-25">
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
		</div>
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
				boxShadow: "0 0 16px #7580F0",
			}}
		>
			<a className="smallsubtext pt-3 hover:text-accent" href="#AboutMe">
				AboutMe
			</a>
			<a className="smallsubtext pt-3 hover:text-accent" href="#Projects">
				Projects
			</a>
			<a
				className="smallsubtext pt-3 hover:text-accent"
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
			</p>
		</div>
	);
};

export default NavBar;
