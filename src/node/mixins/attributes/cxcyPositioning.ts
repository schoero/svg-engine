import { SVGInstance } from "../../instances/SVGInstance.js";

export class CXCYPositioning extends SVGInstance {

  public cx(): string | number | null;
  public cx(cx: string | number): this;
  public cx(cx?: string | number): string | number | this | null {
    if(typeof cx === "string" || typeof cx === "number") {
      this.attr("cx", cx);
      return this;
    }
    return this.attr("cx");
  }


  public cy(): string | number | null;
  public cy(cy: string | number): this;
  public cy(cy?: string | number): string | number | this | null {
    if(typeof cy === "string" || typeof cy === "number") {
      this.attr("cy", cy);
      return this;
    }
    return this.attr("cy");
  }



}