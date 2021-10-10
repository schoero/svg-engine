import { SVGInstance } from "@instance/SVGInstance.js";
import { SVGStopInstance } from "../../instances/SVGStopInstance.js";

export class GradientStopInstances extends SVGInstance {

  public addStop(position: number | string, color: string): SVGStopInstance {
    const stop = new SVGStopInstance(this);
    stop.attr("offset", position);
    stop.attr("stop-color", color);
    this.appendInstance(stop);
    return stop;
  }

}