//@ts-check
import { SVG } from "../../lib/node/esm/index.js";

const svg = new SVG();
svg.addRect(10, 10, "10cm", "2cm").fill("red");
console.log(svg.outerHTML);
