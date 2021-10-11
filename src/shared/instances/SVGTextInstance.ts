import { SVGInstance } from "@instance/SVGInstance.js";
import { SVGTSpanInstance } from "./SVGTSpanInstance.js";


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
import { TextAttributes } from "../mixins/attributes/text.js";

// Style attributes
import { Font } from "../mixins/style-attributes/font.js";


//-- Class

export class SVGTextInstance extends SVGInstance {

  constructor(_parent?: SVGInstance) {
    super("text", _parent);
  }


  public addTSpan(): SVGTSpanInstance;
  public addTSpan(text: string): SVGTSpanInstance;
  public addTSpan(x: number | string, y: number | string, text: string): SVGTSpanInstance;
  public addTSpan(xOrTextOrUndefined?: string | number, yOrUndefined?: string | number, textOrUndefined?: string): SVGTSpanInstance {
    const text = new SVGTSpanInstance(this);
    if(typeof xOrTextOrUndefined === "string" && typeof yOrUndefined === "undefined"){
      text.text(xOrTextOrUndefined);
    } else if((typeof xOrTextOrUndefined === "string" || typeof xOrTextOrUndefined === "number") && (typeof yOrUndefined === "string" || typeof yOrUndefined === "number")){
      text.attr("x", xOrTextOrUndefined);
      text.attr("y", yOrUndefined);
      if(typeof textOrUndefined === "string"){
        text.text(textOrUndefined);
      }
    }
    this.appendInstance(text);
    return text;
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
  WidthHeight,
  TextAttributes,
  Font
{}

applyMixins(SVGTextInstance, [
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  XYPositioning,
  WidthHeight,
  TextAttributes,
  Font
]);