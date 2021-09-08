import { SVGElement } from "../../elements/SVGElement.js";

export class VectorEffect extends SVGElement {

  public vectorEffect(vectorEffect: "non-scaling-stroke" | "non-scaling-fill" | "non-scaling-stroke-and-fill"): this {
    this.setAttribute("vector-effect", vectorEffect);
    return this;
  }

}