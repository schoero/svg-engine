import { SVGInstance } from "@instance/SVGInstance.js";
import { SVGDefsInstance } from "../../instances/SVGDefsInstance.js";

export class DescriptiveInstances extends SVGInstance {

  public addDefs(): SVGDefsInstance {
    const defs = new SVGDefsInstance(this);
    this.appendInstance(defs);
    return defs;
  }

}