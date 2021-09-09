import { applyMixins } from "../mixins/index.js";
import { SVGElement } from "./SVGElement.js";

import { Color } from "../mixins/presentation-attributes/color.js";
import { Display } from "../mixins/presentation-attributes/display.js";
import { Fill } from "../mixins/presentation-attributes/fill.js";
import { Stroke } from "../mixins/presentation-attributes/stroke.js";
import { Opacity } from "../mixins/presentation-attributes/opacity.js";
import { VectorEffect } from "../mixins/presentation-attributes/vectorEffect.js";
import { Visibility } from "../mixins/presentation-attributes/visibility.js";

import { ShapeElements } from "../mixins/permitted-content/shapeElements.js";

export class SVGGroupElement extends SVGElement {

  constructor(){
    super("g");
  }

}

export interface SVGGroupElement extends SVGElement,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  ShapeElements
{};

applyMixins(SVGGroupElement, [ SVGElement,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  ShapeElements
]);