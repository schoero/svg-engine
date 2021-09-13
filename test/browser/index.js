//@ts-check
import SVG from "../../lib/browser/esm/index.js";

const svg = new SVG();
svg.addRect(10, 10, "10cm", "2cm").fill("red");
document.body.appendChild(svg.element);