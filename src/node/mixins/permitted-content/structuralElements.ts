import { SVGInstance } from "../../instances/SVGInstance.js";
import { SVGGroupElement } from "../../../dom/elements/SVGGroupElement.js";

export class StructuralInstances extends SVGInstance {

  public addGroup(): SVGGroupElement {
    const group = new SVGGroupElement();
    this.element.appendChild(group);
    return group;
  }

}