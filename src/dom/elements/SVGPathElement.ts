import { SVGElement } from "./SVGElement.js";

export class SVGPathElement extends SVGElement {

  constructor(d?: string){

    super("path");

    if(typeof d === "string"){
      this.setAttribute("d", d);
    }

  }


  public lineTo(x: number, y: number, relative: boolean = false): this {
    let d = this.getAttribute("d") ?? "";
    d += (relative === false ? " L " : " l ");
    d += ` ${x}, ${y} `;
    this.setAttribute("d", d);
    return this;
  }


  public moveTo(x: number, y: number, relative: boolean = false): this {
    let d = this.getAttribute("d") ?? "";
    d += (relative === false ? " M " : " m ");
    d += ` ${x}, ${y} `;
    this.setAttribute("d", d);
    return this;
  }


  public cubicBezierCurveTo(p1x: number, p1y: number, p2x: number, p2y: number, x: number, y: number, relative: boolean = false): this {
    let d = this.getAttribute("d") ?? "";
    d += (relative === false ? " C " : " c ");
    d += ` ${p1x} ${p1y}, ${p2x} ${p2y}, ${x} ${y} `;
    this.setAttribute("d", d);
    return this;
  }


  public smoothBezierCurveTo(x2: number, y2: number, x: number, y: number, relative: boolean = false): this {
    let d = this.getAttribute("d") ?? "";
    d += (relative === false ? " S " : " s ");
    d += ` ${x2}, ${y2} ${x}, ${y} `;
    this.setAttribute("d", d);
    return this;
  }


  public quadraticBezierCurveTo(p1x: number, p1y: number, x: number, y: number, relative: boolean = false): this {
    let d = this.getAttribute("d") ?? "";
    d += (relative === false ? " Q " : " q ");
    d += ` ${p1x} ${p1y}, ${x} ${y} `;
    this.setAttribute("d", d);
    return this;
  }


  public smoothQuadraticBezierCurveTo(x: number, y: number, relative: boolean = false): this {
    let d = this.getAttribute("d") ?? "";
    d += (relative === false ? " T " : " t ");
    d += ` ${x}, ${y} `;
    this.setAttribute("d", d);
    return this;
  }


  public ellipticalArcCurveTo(rx: number, ry: number, xRot: number, largeArc: boolean, sweep: boolean, x: number, y: number, relative: boolean = false): this {
    let d = this.getAttribute("d") ?? "";
    d += (relative === false ? " A " : " a ");
    d += ` ${rx}, ${ry} ${xRot} ${largeArc ? 1 : 0} ${sweep ? 1 : 0} ${x} ${y} `;
    this.setAttribute("d", d);
    return this;
  }


  public curveTo(x: number, y: number, x1: number, y1: number, relative: boolean = false): this {
    let d = this.getAttribute("d") ?? "";
    d += (relative === false ? " S " : " s ");
    d += ` ${x}, ${y} ${x1}, ${y1} `;
    this.setAttribute("d", d);
    return this;
  }


  public close() {
    let d = this.getAttribute("d") ?? "";
    d += " Z";
    this.setAttribute("d", d);
    return this;
  }


  public stroke(color?: string): this {
    this.setAttribute("stroke", color ?? "currentColor");
    return this;
  }


  public dash(color?: string, length = 5, gap = 5): this {
    this.setAttribute("stroke", color ?? "currentColor");
    this.setAttribute("stroke-dasharray", `${length}, ${gap}`);
    return this;
  }


  public strokeWidth(width: number): this {
    this.setAttribute("stroke-width", width + "");
    this.setAttribute("outline-offset", "-" + width + "px");
    return this;
  }


  public strokeOpacity(opacity: number): this {
    this.setAttribute("stroke-opacity", opacity + "");
    return this;
  }
  
}