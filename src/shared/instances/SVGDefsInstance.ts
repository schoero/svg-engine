import { SVGInstance } from "@instance/SVGInstance.js";


//-- Mixins

import { applyMixins } from "../mixins/index.js";

// Permitted content
import { ShapeInstances } from "../mixins/permitted-content/shapeInstances.js";
import { StructuralInstances } from "../mixins/permitted-content/structuralInstances.js";
import { GradientInstances } from "../mixins/permitted-content/gradientInstances.js";

// Presentation attributes
import { Color } from "../mixins/presentation-attributes/color.js";
import { Display } from "../mixins/presentation-attributes/display.js";
import { Fill } from "../mixins/presentation-attributes/fill.js";
import { Opacity } from "../mixins/presentation-attributes/opacity.js";
import { Stroke } from "../mixins/presentation-attributes/stroke.js";
import { VectorEffect } from "../mixins/presentation-attributes/vectorEffect.js";
import { Visibility } from "../mixins/presentation-attributes/visibility.js";


//-- Class

export class SVGDefsInstance extends SVGInstance {

  constructor(_parent?: SVGInstance) {
    super("defs", _parent);
  }

}


//-- Apply mixins

export interface SVGDefsInstance extends SVGInstance,
  ShapeInstances,
  StructuralInstances,
  GradientInstances,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
{}

applyMixins(SVGDefsInstance, [
  ShapeInstances,
  StructuralInstances,
  GradientInstances,
  Color,
  Display,
  Fill,
  Opacity,
  Stroke,
  VectorEffect,
  Visibility
]);