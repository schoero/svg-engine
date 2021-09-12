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
import { CXCYPositioning } from "../mixins/attributes/cxcyPositioning.js";


//-- Class

export class SVGCircleInstance extends SVGInstance {

  constructor(){
    super("circle");
  }


  public radius(): string | number | null;
  public radius(radius: string | number): this;
  public radius(radius?: string | number): string | number | this | null {
    if(typeof radius === "string" || typeof radius === "number") {
      this.attr("r", radius);
      return this;
    }
    return this.attr("r");
  }

}


//-- Apply mixins

export interface SVGCircleInstance extends SVGInstance,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  CXCYPositioning
{};

applyMixins(SVGCircleInstance, [
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  CXCYPositioning
]);