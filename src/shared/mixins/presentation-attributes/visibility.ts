import { SVGInstance } from "@instance/SVGInstance.js";

export class Visibility extends SVGInstance {

  public visibility(): string | null;
  public visibility(visibility: "visible" | "hidden"): this;
  public visibility(visibility?: "visible" | "hidden"): string | this | null {
    if(typeof visibility === "undefined"){
      const visibility = this.attr("visibility");
      return typeof visibility === "string" ? visibility : null;
    } else if(typeof visibility === "string"){
      this.attr("visibility", visibility);
      return this;
    }
    return null;
  }

}