import { SVGElement } from "../../elements/SVGElement.js";

export class Visibility extends SVGElement {

  public visibility(visibility: "visible" | "hidden"): this {
    this.setAttribute("visibility", visibility);
    return this;
  }

}