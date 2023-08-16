import React from "react";
import Landing from "@/components/containers/Landing/Landing";
import Section from "@/components/containers/Section/Section";
import MidSection from "@/components/containers/Section/MidSection";
import { motion, useAnimation } from "framer-motion";

const index = () => {
	return (
		<>
			<Landing></Landing>
			<MidSection></MidSection>
			<Section></Section>
		</>
	);
};

export default index;
