import react from "react";
import { Button } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";

const EditButton = () => {
	return (
		<div>
			<Button size="sm" variant="light" disabled="false">
				<PencilSquare />
			</Button>
		</div>
	);
};

export default EditButton;
