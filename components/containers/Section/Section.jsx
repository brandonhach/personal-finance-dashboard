import React from "react";
import ImageCard from "@/components/common/Card/ImageCard";
import BasicBtn from "@/components/common/Button/BasicBtn";

const Section = () => {
	return (
		<>
			<div className="container flex flex-row items-center justify-center h-screen w-full">
				<div className="container flex items-center justify-center h-3/4 w-1/3">
					<h2 className="text-5xl font-">HachView</h2>
				</div>
				<div className="container flex flex-row items-center justify-center h-3/4 w-1/2 gap-5">
					<ImageCard></ImageCard>
					<BasicBtn></BasicBtn>
					<ImageCard></ImageCard>
				</div>
			</div>
		</>
	);
};

export default Section;
