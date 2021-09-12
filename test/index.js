//@ts-check
import SVG from "../lib/node/index.js";

const svg = new SVG();
const rect = svg.addRect(10, 10, "10cm", "2cm");
rect.fill("red");
const text = svg.addText("Hello world!");
console.log(svg.outerHTML);
