import { SVGCircleElement } from "../dom/elements/SVGCircleElement.js";
import { SVGLineElement } from "../dom/elements/SVGLineElement.js";
import { SVGPathElement } from "../dom/elements/SVGPathElement.js";
import { SVGRectElement } from "../dom/elements/SVGRectElement.js";
import { SVGSVGElement } from "../dom/elements/SVGSVGElement.js";
import { SVGElement } from "../dom/elements/SVGElement.js";
import { SVGElementMap } from "../dom/interfaces"
import { SVGGroupElement } from "../dom/elements/SVGGroupElement.js";
import { SVGTextElement } from "../dom/elements/SVGTextElement.js";

export function createElement<K extends keyof SVGElementMap>(tagName: K): SVGElementMap[K] | SVGElement {
  if(tagName === "circle"){
    return new SVGCircleElement();
  } else if(tagName === "line"){
    return new SVGLineElement();
  } else if(tagName === "path"){
    return new SVGPathElement();
  } else if(tagName === "rect"){
    return new SVGRectElement();
  } else if(tagName === "svg"){
    return new SVGSVGElement();
  } else if(tagName === "g"){
    return new SVGGroupElement();
  } else if(tagName === "text"){
    return new SVGTextElement();
  }
  return new SVGElement(tagName);
}