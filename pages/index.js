import React from "react";
import Landing from "@/components/containers/Landing/Landing";
import Section from "@/components/containers/Section/Section";
import MidSection from "@/components/containers/Section/MidSection";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const index = () => {
	return (
		<>
			<div className="fixed h-screen w-screen z-0">
				<Landing></Landing>
			</div>

			<Parallax pages={3}>
				<ParallaxLayer offset={1} speed={0}>
					<MidSection></MidSection>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0}>
					<Section></Section>
				</ParallaxLayer>
			</Parallax>
		</>
	);
};

export default index;
