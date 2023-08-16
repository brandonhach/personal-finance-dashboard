import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Landing = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen w-full overflow-hidden">
				<video
					className="absolute z-10 w-screen min-h-1/2 overflow-hidden"
					autoPlay={true}
					loop
					muted>
					<source src="Video/black abstract.mp4" />
				</video>
				<div className="flex flex-col items-center justify-center">
					<h1
						className="z-30 p-5 text-white bg-opacity-50 rounded-xl shadow-md text-7xl
					">
						HachView
					</h1>
					<h2
						className="z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl shadow-md text-center
						
					">
						Use machine learning to predict your future financial forecast.
					</h2>
				</div>
				<div className="absolute z-30 text-white text-4xl bottom-5 ">
					<FaArrowDown></FaArrowDown>
				</div>
			</div>
		</>
	);
};

export default Landing;
