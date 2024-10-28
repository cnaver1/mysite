import { useEffect, useState } from "react";
import "../App.css";
import { Viewer } from "../classes/viewer/viewer";

export const Desktop = () => {
	const [viewer, setViewer] = useState<any>();

	useEffect(() => {
		if (!viewer) {
			setViewer(new Viewer("desktop"));
		}
	}, []);

	useEffect(() => {
		if (viewer) {
			viewer.render("desktop");
		}
	}, [viewer]);

	return <svg id="desktop"></svg>;
};
