import { SVGInstance } from "@instance/SVGInstance.js";

export class Opacity extends SVGInstance {

  public opacity(): number | null;
  public opacity(opacity: number): this;
  public opacity(opacity?: number): number | this | null {
    if(typeof opacity === "undefined"){
      const opacity = this.attr("opacity");
      return typeof opacity === "number" ? opacity : null;
    } else if(typeof opacity === "number"){
      this.attr("opacity", opacity);
      return this;
    }
    return null;
  }

}