import { SVGElement } from "../../elements/SVGElement.js";

export class cxcyPositioning extends SVGElement {

  public set cx(cx: number) {
    this.setAttribute("cx", cx + "");
  }


  public get cx(): number {
    return parseFloat(this.getAttribute("cx") ?? "0");
  }


  public set cy(cy: number) {
    this.setAttribute("cy", cy + "");
  }


  public get cy(): number {
    return parseFloat(this.getAttribute("cy") ?? "0");
  }

}