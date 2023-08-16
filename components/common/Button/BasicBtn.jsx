import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const BasicBtn = ({ onClick, color, size, text }) => {
	return (
		<>
			<Button colorScheme={color} variant="outline" onClick={onClick} size={size}>
				{text}
			</Button>
		</>
	);
};

export default BasicBtn;
