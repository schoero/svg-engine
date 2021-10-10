import { SVGInstance } from "@instance/SVGInstance.js";


//-- Mixins

import { applyMixins } from "../mixins/index.js";

// Presentation attributes
import { Color } from "../mixins/presentation-attributes/color.js";
import { Display } from "../mixins/presentation-attributes/display.js";
import { Fill } from "../mixins/presentation-attributes/fill.js";
import { Opacity } from "../mixins/presentation-attributes/opacity.js";
import { Stroke } from "../mixins/presentation-attributes/stroke.js";
import { VectorEffect } from "../mixins/presentation-attributes/vectorEffect.js";
import { Visibility } from "../mixins/presentation-attributes/visibility.js";


//-- Class

export class SVGPathInstance extends SVGInstance {

  constructor(_parent?: SVGInstance) {
    super("path", _parent);
  }


  public lineTo(x: number, y: number, relative: boolean = false): this {
    let d = this.attr("d") ?? "";
    d += (relative === false ? " L " : " l ");
    d += ` ${x}, ${y} `;
    this.attr("d", d);
    return this;
  }


  public moveTo(x: number, y: number, relative: boolean = false): this {
    let d = this.attr("d") ?? "";
    d += (relative === false ? " M " : " m ");
    d += ` ${x}, ${y} `;
    this.attr("d", d);
    return this;
  }


  public cubicBezierCurveTo(p1x: number, p1y: number, p2x: number, p2y: number, x: number, y: number, relative: boolean = false): this {
    let d = this.attr("d") ?? "";
    d += (relative === false ? " C " : " c ");
    d += ` ${p1x} ${p1y}, ${p2x} ${p2y}, ${x} ${y} `;
    this.attr("d", d);
    return this;
  }


  public smoothBezierCurveTo(x2: number, y2: number, x: number, y: number, relative: boolean = false): this {
    let d = this.attr("d") ?? "";
    d += (relative === false ? " S " : " s ");
    d += ` ${x2}, ${y2} ${x}, ${y} `;
    this.attr("d", d);
    return this;
  }


  public quadraticBezierCurveTo(p1x: number, p1y: number, x: number, y: number, relative: boolean = false): this {
    let d = this.attr("d") ?? "";
    d += (relative === false ? " Q " : " q ");
    d += ` ${p1x} ${p1y}, ${x} ${y} `;
    this.attr("d", d);
    return this;
  }


  public smoothQuadraticBezierCurveTo(x: number, y: number, relative: boolean = false): this {
    let d = this.attr("d") ?? "";
    d += (relative === false ? " T " : " t ");
    d += ` ${x}, ${y} `;
    this.attr("d", d);
    return this;
  }


  public ellipticalArcCurveTo(rx: number, ry: number, xRot: number, largeArc: boolean, sweep: boolean, x: number, y: number, relative: boolean = false): this {
    let d = this.attr("d") ?? "";
    d += (relative === false ? " A " : " a ");
    d += ` ${rx}, ${ry} ${xRot} ${largeArc ? 1 : 0} ${sweep ? 1 : 0} ${x} ${y} `;
    this.attr("d", d);
    return this;
  }


  public curveTo(x: number, y: number, x1: number, y1: number, relative: boolean = false): this {
    let d = this.attr("d") ?? "";
    d += (relative === false ? " S " : " s ");
    d += ` ${x}, ${y} ${x1}, ${y1} `;
    this.attr("d", d);
    return this;
  }


  public close() {
    let d = this.attr("d") ?? "";
    d += " Z";
    this.attr("d", d);
    return this;
  }

}


//-- Apply mixins

export interface SVGPathInstance extends SVGInstance,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
{}

applyMixins(SVGPathInstance, [
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
]);