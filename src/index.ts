import { SVGCircleElement } from "./dom/elements/SVGCircleElement.js";
import { SVGElement } from "./dom/elements/SVGElement.js";
import { SVGLineElement } from "./dom/elements/SVGLineElement.js";
import { SVGPathElement } from "./dom/elements/SVGPathElement.js";
import { SVGRectElement } from "./dom/elements/SVGRectElement.js";
import { SVGSVGElement } from "./dom/elements/SVGSVGElement.js";
import { SVGElementMap } from "./dom/interfaces"

export default class SVG extends SVGSVGElement {

  constructor(){
    super();
  }

}

export function createElement<K extends keyof SVGElementMap>(tagName: K): SVGElementMap[K] | undefined {
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
  }
}

const bla = createElement("circle");