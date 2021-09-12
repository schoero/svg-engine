import { SVGInstance } from "@instance/SVGInstance.js";
import { SVGGroupInstance } from "../../instances/SVGGroupInstance.js";

export class StructuralInstances extends SVGInstance {

  public addGroup(): SVGGroupInstance {
    const group = new SVGGroupInstance();
    this.appendInstance(group);
    return group;
  }

}