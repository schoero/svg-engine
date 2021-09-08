import { SVGElement } from "../../elements/SVGElement.js";

export class Stroke extends SVGElement {

  public stroke(color?: string): this {
    this.setAttribute("stroke", color ?? "currentColor");
    return this;
  }


  public dash(color?: string, length = 5, gap = 5): this {
    this.setAttribute("stroke", color ?? "currentColor");
    this.setAttribute("stroke-dasharray", `${length}, ${gap}`);
    return this;
  }


  public strokeWidth(width: number): this {
    this.setAttribute("stroke-width", width + "");
    this.setAttribute("outline-offset", "-" + width + "px");
    return this;
  }


  public strokeOpacity(opacity: number): this {
    this.setAttribute("stroke-opacity", opacity + "");
    return this;
  }

}