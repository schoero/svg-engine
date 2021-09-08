import { SVGElement } from "../../elements/SVGElement.js";

export class Opacity extends SVGElement {

  public opacity(opacity: number): this {
    this.setAttribute("opacity", opacity + "");
    return this;
  }

}