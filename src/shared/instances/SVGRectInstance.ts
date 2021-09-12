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

export class SVGRectInstance extends SVGInstance {

  constructor(){
    super("rect");
  }


  public borderRadius(): string | number | null;
  public borderRadius(radius: string | number): this;
  public borderRadius(radius?: string | number): string | number | this | null {
    if(typeof radius === "string" || typeof radius === "number") {
      this.attr("rx", radius);
      this.attr("ry", radius);
      return this;
    }
    return this.attr("rx");
  }

}


//-- Apply mixins

export interface SVGRectInstance extends SVGInstance,
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

applyMixins(SVGRectInstance, [
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