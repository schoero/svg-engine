import { SVGInstance } from "@instance/SVGInstance.js";


//-- Mixins

import { applyMixins } from "../mixins/index.js";

// Permitted content
import { ShapeInstances } from "../mixins/permitted-content/shapeInstances.js";
import { StructuralInstances } from "../mixins/permitted-content/structuralInstances.js";

// Presentation attributes
import { Color } from "../mixins/presentation-attributes/color.js";
import { Display } from "../mixins/presentation-attributes/display.js";
import { Fill } from "../mixins/presentation-attributes/fill.js";
import { Opacity } from "../mixins/presentation-attributes/opacity.js";
import { Stroke } from "../mixins/presentation-attributes/stroke.js";
import { VectorEffect } from "../mixins/presentation-attributes/vectorEffect.js";
import { Visibility } from "../mixins/presentation-attributes/visibility.js";

// Attributes
import { PreserveAspectRatio } from "../mixins/attributes/preserveAspectRatio.js";
import { XYPositioning } from "../mixins/attributes/xyPositioning.js";
import { WidthHeight } from "../mixins/attributes/widthHeight.js";


//-- Class

export class SVGSVGInstance extends SVGInstance {

  constructor(){
    super("svg");
    this.attr("xmlns", "http://www.w3.org/2000/svg");
  }
  

  public viewBox(): { x: string | number, y: string | number, width: string | number, height: string | number } | null;
  public viewBox(x: string | number, y: string | number, width: string | number, height: string | number): this;
  public viewBox(x? : string | number, y? : string | number, width? : string | number, height? : string | number): { x: string | number, y: string | number, width: string | number, height: string | number } | this | null {
    if(typeof x === "undefined"){
      const viewBox = this.attr("viewBox");
      if(typeof viewBox === "string"){
        const [x, y, width, height] = viewBox.split(" ");
        return { 
          x: isNaN(+x) ? x : +x,
          y: isNaN(+y) ? y : +y,
          width: isNaN(+width) ? width : +width,
          height: isNaN(+height) ? height : +height
        };
      }
      return null;
    } else if(
        (typeof x === "string" || typeof x === "number") && 
        (typeof y === "string" || typeof y === "number") && 
        (typeof width === "string" || typeof width === "number") && 
        (typeof height === "string" || typeof height === "number")){
      this.attr("viewBox", `${x} ${y} ${width} ${height}`);
      return this;
    }
    return null;
  }

}


//-- Apply mixins

export interface SVGSVGInstance extends SVGInstance,
  ShapeInstances,
  StructuralInstances,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  PreserveAspectRatio,
  XYPositioning,
  WidthHeight
{};

applyMixins(SVGSVGInstance, [
  ShapeInstances,
  StructuralInstances,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility,
  PreserveAspectRatio,
  XYPositioning,
  WidthHeight
]);