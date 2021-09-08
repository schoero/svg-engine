import { SVGElement } from "../../elements/SVGElement.js";

export class xyPositioning extends SVGElement {

  public moveTo(x: number, y: number): this {
    this.setAttribute("x", x.toString());
    this.setAttribute("y", y.toString());
    return this;
  }


  public moveBy(dx: number, dy: number): this {
    const x = parseFloat(this.getAttribute("x") || "0") + dx;
    const y = parseFloat(this.getAttribute("y") || "0") + dy;
    return this.moveTo(x, y);
  }


  public set x(x: number) {
    this.setAttribute("x", x.toString());
  }


  public get x(): number {
    return parseFloat(this.getAttribute("x") || "0");
  }


  public set y(y: number) {
    this.setAttribute("y", y.toString());
  }


  public get y(): number {
    return parseFloat(this.getAttribute("y") || "0");
  }


  public moveToCenter(width: number, height: number): this {
    const x = width / 2;
    const y = height / 2;
    return this.moveTo(x, y);
  }


  public moveToCenterX(width: number): this {
    const x = width / 2;
    return this.moveTo(x, this.y);
  }


  public moveToCenterY(height: number): this {
    const y = height / 2;
    return this.moveTo(this.x, y);
  }
  
}