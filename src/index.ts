import { SVGSVGInstance } from "./shared/instances/SVGSVGInstance.js";


export class SVG extends SVGSVGInstance {

  constructor() {
    super();
    this.attr("xmlns", "http://www.w3.org/2000/svg");
  }

}

export default SVG;