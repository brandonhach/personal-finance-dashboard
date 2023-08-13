import React from "react";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const Header = () => {
	return (
		<>
			<header className="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
				<video
					className="absolute z-10 w-auto min-w-full min-h-full object-fill"
					autoPlay="true"
					loop
					muted>
					<source src="Video/black abstract.mp4" />
				</video>
				<div className="container flex flex-col items-center justify-center">
					<h1 className="z-30 p-5 text-white bg-opacity-50 rounded-xl shadow-md text-7xl">
						HachView
					</h1>
					<h2 className="z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl shadow-md">
						Use machine learning to predict your future financial forecast.
					</h2>
				</div>
				<div className="absolute z-30 text-white text-4xl bottom-5">
					<FaArrowDown></FaArrowDown>
				</div>
			</header>
		</>
	);
};

export default Header;
