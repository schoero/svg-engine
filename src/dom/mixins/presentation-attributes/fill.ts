import { SVGElement } from "../../elements/SVGElement.js";

export class Fill extends SVGElement {

  public fill(color?: string): this {
    this.setAttribute("fill", color ?? "currentColor");
    return this;
  }


  public fillOpacity(opacity: number): this {
    this.setAttribute("fill-opacity", opacity + "");
    return this;
  }

}