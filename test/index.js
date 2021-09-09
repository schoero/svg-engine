//@ts-check
import SVG from "../lib/index.js";

const svg = new SVG();
const rect = svg.addRect(10, 10, "10cm", "2cm");
rect.classList.add("class-red");
rect.classList.add("class-green");
rect.classList.add("class-black");
rect.fill("red").stroke("black").setAttribute("id", "rect")
rect.style.setProperty("color", "yellow");
rect.style.setProperty("fill", "purple");
console.log(svg.outerHTML);