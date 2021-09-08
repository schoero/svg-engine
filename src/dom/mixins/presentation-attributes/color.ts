import { SVGElement } from "../../elements/SVGElement.js";

export class Color extends SVGElement {

  public color(color: string): this {
    this.setAttribute("color", color);
    return this;
  }

}