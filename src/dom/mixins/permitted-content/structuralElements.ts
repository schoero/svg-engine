import { SVGElement } from "../../elements/SVGElement.js";
import { SVGGroupElement } from "../../elements/SVGGroupElement.js";

export class StructuralElements extends SVGElement {

  public addGroup(): SVGGroupElement {
    const group = new SVGGroupElement();
    this.appendChild(group);
    return group;
  }

}