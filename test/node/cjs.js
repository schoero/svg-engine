//@ts-check
const { SVG } = require("../../");

const svg = new SVG();
svg.addRect(10, 10, "10cm", "2cm").fill("red");
console.log(svg.outerHTML);
