import * as d3 from "d3";
import { Folder } from "../folder/folder";

export class Viewer{
    svg:string;
    viewer:any; 


    constructor(svg:string){
        this.svg = svg
        this.viewer = d3.select(`#${svg}`)
    }


    render(folders:any[]){
        const folder = new Folder("resume",50, 50, this.viewer);
        folder.render()
        
    }

}