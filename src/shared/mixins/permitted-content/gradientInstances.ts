import { SVGInstance } from "@instance/SVGInstance.js";
import { SVGLinearGradientInstance } from "../../instances/SVGLinearGradientInstance.js";

export class GradientInstances extends SVGInstance {

  public addLinearGradient(): SVGLinearGradientInstance {
    const linearGradient = new SVGLinearGradientInstance(this);
    this.appendInstance(linearGradient);
    return linearGradient;
  }


}