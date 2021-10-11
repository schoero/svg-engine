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

export class SVGLineInstance extends SVGInstance {

  constructor(_parent?: SVGInstance) {
    super("line", _parent);
  }


  public x1(): string | number | null;
  public x1(x1: string | number): this;
  public x1(x1?: string | number): string | number | this | null {
    if(typeof x1 === "string" || typeof x1 === "number"){
      this.attr("x1", x1);
      return this;
    }
    return this.attr("x1");
  }


  public y1(): string | number | null;
  public y1(y1: string | number): this;
  public y1(y1?: string | number): string | number | this | null {
    if(typeof y1 === "string" || typeof y1 === "number"){
      this.attr("y1", y1);
      return this;
    }
    return this.attr("y1");
  }


  public x2(): string | number | null;
  public x2(x2: string | number): this;
  public x2(x2?: string | number): string | number | this | null {
    if(typeof x2 === "string" || typeof x2 === "number"){
      this.attr("x2", x2);
      return this;
    }
    return this.attr("x2");
  }


  public y2(): string | number | null;
  public y2(y2: string | number): this;
  public y2(y2?: string | number): string | number | this | null {
    if(typeof y2 === "string" || typeof y2 === "number"){
      this.attr("y2", y2);
      return this;
    }
    return this.attr("y2");
  }

}


//-- Apply mixins

export interface SVGLineInstance extends SVGInstance,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
{}

applyMixins(SVGLineInstance, [
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
]);