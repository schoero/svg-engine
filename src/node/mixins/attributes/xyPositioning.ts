import { SVGInstance } from "../../instances/SVGInstance.js";

export class XYPositioning extends SVGInstance {

  public moveTo(x: string | number, y: string | number): this {
    this.attr("x", x);
    this.attr("y", y);
    return this;
  }


  public moveBy(dx: number, dy: number): this {
    const x = this.attr("x") ?? 0 + dx;
    const y = this.attr("y") ?? 0 + dy;
    return this.moveTo(x, y);
  }


  public x(): string | null;
  public x(x: string | number): this;
  public x(x?: string | number) {
    if(typeof x === "string" || typeof x === "number"){
      this.attr("x", x);
      return this;
    }
    return this.attr("x");
  }


  public y(): string | null;
  public y(y: string | number): this;
  public y(y?: string | number) {
    if(typeof y === "string" || typeof y === "number"){
      this.attr("y", y);
      return this;
    }
    return this.attr("y");
  }

}