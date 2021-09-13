import { SVGInstance } from "@instance/SVGInstance.js";

export class VectorEffect extends SVGInstance {

  public vectorEffect(): string | null;
  public vectorEffect(vectorEffect: "non-scaling-stroke" | "non-scaling-fill" | "non-scaling-stroke-and-fill"): this;
  public vectorEffect(vectorEffect?: "non-scaling-stroke" | "non-scaling-fill" | "non-scaling-stroke-and-fill"): string | this | null {
    if(typeof vectorEffect === "undefined"){
      const vectorEffect = this.attr("vector-effect");
      return typeof vectorEffect === "string" ? vectorEffect : null;
    } else if(typeof vectorEffect === "string"){
      this.attr("vector-effect", vectorEffect);
      return this;
    }
    return null;
  }

}