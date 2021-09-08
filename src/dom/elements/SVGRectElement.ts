import { applyMixins } from "../mixins/index.js";
import { SVGElement } from "./SVGElement.js";

import { Color } from "../mixins/presentation-attributes/color.js";
import { Display } from "../mixins/presentation-attributes/display.js";
import { Fill } from "../mixins/presentation-attributes/fill.js";
import { Stroke } from "../mixins/presentation-attributes/stroke.js";
import { Opacity } from "../mixins/presentation-attributes/opacity.js";
import { VectorEffect } from "../mixins/presentation-attributes/vectorEffect.js";
import { Visibility } from "../mixins/presentation-attributes/visibility.js";

export class SVGRectElement extends SVGElement {

  constructor(){
    super("rect");
  }


  public borderRadius(radius: number): this
  public borderRadius(rx: number, ry: number): this
  public borderRadius(radiusOrRx: number, ryOrUndefined?: number | undefined): this {
    this.setAttribute("rx", radiusOrRx + "");
    if(typeof ryOrUndefined === "number") {
      this.setAttribute("ry", ryOrUndefined + "");
    }
    return this;
  }

}

export interface SVGRectElement extends SVGElement,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
{};

applyMixins(SVGRectElement, [ SVGElement,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
]);