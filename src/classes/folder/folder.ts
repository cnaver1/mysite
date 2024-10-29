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
		// Folder container
			const folder = this.viewer
			.append("svg")
			.attr("width", 250)
			.attr("height", 250)
			.attr("x", this.x)
			.attr("y", this.y)
			.attr("id", "folder-1");

			// Folder tab (scaled down)
			folder
			.append("rect")
			.attr("x", 20)
			.attr("y", 5)
			.attr("width", 40)
			.attr("height", 15)
			.attr("fill", "grey")
			.attr("rx", 3)
			.attr("ry", 3);

			// Folder body (scaled down)
			folder
			.append("rect")
			.attr("x", 10)
			.attr("y", 15)
			.attr("width", 80)
			.attr("height", 50)
			.attr("fill", "yellow")
			.attr("rx", 5)
			.attr("ry", 5);

			// Optional inner shadow (scaled down)
			folder
			.append("rect")
			.attr("x", 10)
			.attr("y", 30)
			.attr("width", 80)
			.attr("height", 35)
			.attr("fill", "grey")
			.attr("opacity", 0.3);

			// Add "Resume" text label
			folder
			.append("text")
			.attr("x", 50) // Center horizontally within the body (adjust if needed)
			.attr("y", 50) // Position vertically within the body
			.attr("font-size", "12px") // Adjust font size as needed
			.attr("fill", "black") // Text color
			.attr("text-anchor", "middle") // Center align text
			.text("Resume");

		


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
