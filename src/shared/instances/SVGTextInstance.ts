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

// Attributes
import { XYPositioning } from "../mixins/attributes/xyPositioning.js";
import { WidthHeight } from "../mixins/attributes/widthHeight.js";


//-- Class

export class SVGTextInstance extends SVGInstance {

  constructor(){
    super("text");
  }


  public text(): string | null;
  public text(text: string): this;
  public text(text?: string): string | this | null {
    if(typeof text === "string") {
      this.element.innerHTML = text;
      return this;
    }
    return this.element.innerHTML;
  }


  public textAnchor(): string | null;
  public textAnchor(textAnchor: "start" | "middle" | "end"): this;
  public textAnchor(textAnchor?: "start" | "middle" | "end"): string | this | null {
    if(typeof textAnchor === "undefined") {
      const textAnchor = this.attr("text-anchor");
      return typeof textAnchor === "string" ? textAnchor : null;
    } else if(typeof textAnchor === "string") {
      this.attr("text-anchor", textAnchor);
      return this;
    }
    return null;
  }


  public dx(): string | number | null;
  public dx(dx: string | number): this;
  public dx(dx?: string | number): string | number | this | null {
    if(typeof dx === "string" || typeof dx === "number") {
      this.attr("dx", dx);
      return this;
    }
    return this.attr("dx");
  }


  public dy(): string | number | null;
  public dy(dy: string | number): this;
  public dy(dy?: string | number): string | number | this | null {
    if(typeof dy === "string" || typeof dy === "number") {
      this.attr("dy", dy);
      return this;
    }
    return this.attr("dy");
  }

}


//-- Apply mixins

export interface SVGTextInstance extends SVGInstance,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  XYPositioning,
  WidthHeight
{};

applyMixins(SVGTextInstance, [
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  XYPositioning,
  WidthHeight
]);