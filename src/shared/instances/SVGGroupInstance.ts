import { SVGInstance } from "@instance/SVGInstance.js";


//-- Mixins

import { applyMixins } from "../mixins/index.js";

// Permitted content
import { ShapeInstances } from "../mixins/permitted-content/shapeInstances.js";
import { SVGSVGInstance } from "./SVGSVGInstance.js";

// Presentation attributes
import { Color } from "../mixins/presentation-attributes/color.js";
import { Display } from "../mixins/presentation-attributes/display.js";
import { Fill } from "../mixins/presentation-attributes/fill.js";
import { Opacity } from "../mixins/presentation-attributes/opacity.js";
import { Stroke } from "../mixins/presentation-attributes/stroke.js";
import { VectorEffect } from "../mixins/presentation-attributes/vectorEffect.js";
import { Visibility } from "../mixins/presentation-attributes/visibility.js";


//-- Class

export class SVGGroupInstance extends SVGInstance {

  constructor() {
    super("g");
  }


  public addGroup(): SVGGroupInstance {
    const group = new SVGGroupInstance();
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

}


//-- Apply mixins

export interface SVGGroupInstance extends SVGInstance,
  ShapeInstances,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
{}

applyMixins(SVGGroupInstance, [
  ShapeInstances,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
]);