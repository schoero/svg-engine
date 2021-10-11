import { SVGSVGElement } from "../elements/SVGSVGElement";
import { SVGElement } from "../elements/SVGElement";
import { SVGCircleElement } from "../elements/SVGCircleElement";
import { SVGRectElement } from "../elements/SVGRectElement";
import { SVGGroupElement } from "../elements/SVGGroupElement";
import { SVGPathElement } from "../elements/SVGPathElement";
import { SVGTextElement } from "../elements/SVGTextElement";
import { SVGLineElement } from "../elements/SVGLineElement";
import { SVGTSpanElement } from "../elements/SVGTSpanElement";
import { SVGDefsElement } from "../elements/SVGDefsElement";
import { SVGLinearGradientElement } from "../elements/SVGLinearGradientElement";
import { SVGRadialGradientElement } from "../elements/SVGRadialGradientElement";
import { SVGStopElement } from "../elements/SVGStopElement";

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