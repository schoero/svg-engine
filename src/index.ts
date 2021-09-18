import { SVGSVGInstance } from "./shared/instances/SVGSVGInstance.js";
import { SVGCircleInstance } from "./shared/instances/SVGCircleInstance.js";
import { SVGGroupInstance } from "./shared/instances/SVGGroupInstance.js";
import { SVGLineInstance } from "./shared/instances/SVGLineInstance.js";
import { SVGPathInstance } from "./shared/instances/SVGPathInstance.js";
import { SVGRectInstance } from "./shared/instances/SVGRectInstance.js";
import { SVGTextInstance } from "./shared/instances/SVGTextInstance.js";
import { SVGTSpanInstance } from "./shared/instances/SVGTSpanInstance.js";

export * from "./shared/utils/calc.js";


export class SVG extends SVGSVGInstance {

  constructor() {
    super();
    this.attr("xmlns", "http://www.w3.org/2000/svg");
  }

}

export {
  SVGSVGInstance,
  SVGCircleInstance,
  SVGGroupInstance,
  SVGLineInstance,
  SVGPathInstance,
  SVGRectInstance,
  SVGTextInstance,
  SVGTSpanInstance
};

export default SVG;