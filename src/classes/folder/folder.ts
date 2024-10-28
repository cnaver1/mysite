/**
 * the folder class
 */

import * as d3 from "d3";

export class Folder {
	name: string;
	x: number;
	y: number;
	content: any;
	viewer: any;

	constructor(name: string, x: number, y: number, viewer: any) {
		this.name = name;
		this.x = x;
		this.y = y;
		this.viewer = viewer;
	}

	public render() {
		const folder = this.viewer
			.append("svg")
			.attr("width", 250) // Reduce the SVG container size as well if needed
			.attr("height", 250)
			.attr("x", this.x)
			.attr("y", this.y)
			.attr("id", "folder-1");

		// Folder tab (scaled down)
		folder
			.append("rect")
			.attr("x", 20) // Adjust position
			.attr("y", 5)
			.attr("width", 40) // Reduce width
			.attr("height", 15) // Reduce height
			.attr("fill", "grey")
			.attr("rx", 3) // Adjust rounded corners
			.attr("ry", 3);

		// Folder body (scaled down)
		folder
			.append("rect")
			.attr("x", 10)
			.attr("y", 15)
			.attr("width", 80) // Reduce width
			.attr("height", 50) // Reduce height
			.attr("fill", "yellow")
			.attr("rx", 5)
			.attr("ry", 5);

		// Optional inner shadow (scaled down)
		folder
			.append("rect")
			.attr("x", 10)
			.attr("y", 30)
			.attr("width", 80) // Match width with the body
			.attr("height", 35) // Adjust height as needed
			.attr("fill", "grey")
			.attr("opacity", 0.3);

		folder.call(
			d3.drag().on("drag", (e) => {
				this._drag(e);
			})
		);
	}

	private _drag(event: any) {
		this.x += event.dx;
		this.y += event.dy;

		this.viewer.select("#folder-1").attr("x", this.x).attr("y", this.y);
	}
}
