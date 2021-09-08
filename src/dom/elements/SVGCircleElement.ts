import { applyMixins } from "../mixins/index.js";
import { SVGElement } from "./SVGElement.js";

import { Color } from "../mixins/presentation-attributes/color.js";
import { Display } from "../mixins/presentation-attributes/display.js";
import { Fill } from "../mixins/presentation-attributes/fill.js";
import { Stroke } from "../mixins/presentation-attributes/stroke.js";
import { Opacity } from "../mixins/presentation-attributes/opacity.js";
import { VectorEffect } from "../mixins/presentation-attributes/vectorEffect.js";
import { Visibility } from "../mixins/presentation-attributes/visibility.js";

export class SVGCircleElement extends SVGElement {

  constructor(){
    super("circle");
  }


  public radius(radius: number | string): this {
    this.setAttribute("r", radius + "");
    return this;
  }

}

export interface SVGCircleElement extends SVGElement,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
{};

applyMixins(SVGCircleElement, [ SVGElement,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
]);