import { SVGInstance } from "@instance/SVGInstance.js";


//-- Mixins

import { applyMixins } from "../mixins/index.js";

// Permitted content
import { ShapeInstances } from "../mixins/permitted-content/shapeInstances.js";
import { StructuralInstances } from "../mixins/permitted-content/structuralInstances.js";
import { DescriptiveInstances } from "../mixins/permitted-content/descriptiveInstances.js";
import { SVGGroupInstance } from "./SVGGroupInstance.js";

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

  constructor();
  constructor(_parent?: SVGInstance);
  constructor(width: string | number, height: string | number, _parent?: SVGInstance);
  constructor(widthOrParent?: string | number | SVGInstance, height?: string | number, _parent?: SVGInstance) {

    // const parent = widthOrParent instanceof SVGInstance ? widthOrParent : _parent;

    super("svg");

    if(typeof widthOrParent === "string" || typeof widthOrParent === "number"){
      this.width(widthOrParent);
    }
    if(typeof height === "string" || typeof height === "number"){
      this.height(height);
    }

  }


  public addGroup(): SVGGroupInstance {
    const group = new SVGGroupInstance(this);
    this.appendInstance(group);
    return group;
  }


  public addSVG(): SVGSVGInstance;
  public addSVG(width: string | number, height: string | number): SVGSVGInstance;
  public addSVG(width?: string | number, height?: string | number): SVGSVGInstance {
    if(typeof width !== "undefined" && typeof height !== "undefined"){
      const svg = new SVGSVGInstance(width, height);
      this.appendInstance(svg);
      return svg;
    } else {
      const svg = new SVGSVGInstance();
      this.appendInstance(svg);
      return svg;
    }
  }


  public viewBox(): { x: string | number, y: string | number, width: string | number, height: string | number } | null;
  public viewBox(x: string | number, y: string | number, width: string | number, height: string | number): this;
  public viewBox(x? : string | number, y? : string | number, width? : string | number, height? : string | number): { x: string | number, y: string | number, width: string | number, height: string | number } | this | null {
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
  DescriptiveInstances,
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
{}

applyMixins(SVGSVGInstance, [
  ShapeInstances,
  StructuralInstances,
  DescriptiveInstances,
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