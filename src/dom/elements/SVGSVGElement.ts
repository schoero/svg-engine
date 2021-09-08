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

export class SVGSVGElement extends SVGElement {

  constructor(){
    super("svg");
    this.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  }


  public setViewBox(x: number, y: number, width: number, height: number){
    this.setAttribute("viewBox", `${x} ${y} ${width} ${height}`);
  }

}

export interface SVGSVGElement extends SVGElement,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  ShapeElements
{};

applyMixins(SVGSVGElement, [ SVGElement,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  ShapeElements
]);