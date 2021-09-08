import { SVGElement } from "../../elements/SVGElement.js";

export class Display extends SVGElement {

  public display(display: string): this {
    this.setAttribute("display", display);
    return this;
  }

}