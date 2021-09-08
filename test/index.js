//@ts-check
import SVG from "../lib/index.js";

const svg = new SVG();
const rect = svg.addRect(10, 10, "10cm", "2cm");
rect.fill("red").stroke("black").setAttribute("id", "rect");

console.log(svg.outerHTML);