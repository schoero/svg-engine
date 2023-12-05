import { SVGSVGElement } from "../elements/SVGSVGElement.js";
import { SVGCircleElement } from "../elements/SVGCircleElement.js";
import { SVGRectElement } from "../elements/SVGRectElement.js";
import { SVGGroupElement } from "../elements/SVGGroupElement.js";
import { SVGPathElement } from "../elements/SVGPathElement.js";
import { SVGTextElement } from "../elements/SVGTextElement.js";
import { SVGLineElement } from "../elements/SVGLineElement.js";
import { SVGTSpanElement } from "../elements/SVGTSpanElement.js";
import { SVGDefsElement } from "../elements/SVGDefsElement.js";
import { SVGLinearGradientElement } from "../elements/SVGLinearGradientElement.js";
import { SVGRadialGradientElement } from "../elements/SVGRadialGradientElement.js";
import { SVGStopElement } from "../elements/SVGStopElement.js";

export interface SVGElementMap {
  "circle": SVGCircleElement;
  "rect": SVGRectElement;
  "line": SVGLineElement;
  "g": SVGGroupElement;
  "path": SVGPathElement;
  "text": SVGTextElement;
  "tspan": SVGTSpanElement;
  "svg": SVGSVGElement;
  "defs": SVGDefsElement;
  "linearGradient": SVGLinearGradientElement;
  "radialGradient": SVGRadialGradientElement;
  "stop": SVGStopElement;
}