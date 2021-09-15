import { SVGElement } from "./SVGElement.js";

export class SVGPathElement extends SVGElement {

  constructor(d?: string) {

    super("path");

    if(typeof d === "string"){
      this.setAttribute("d", d);
    }

  }

}