import { SVGSVGElement } from "../elements/SVGSVGElement";
import { SVGCircleElement } from "../elements/SVGCircleElement";
import { SVGRectElement } from "../elements/SVGRectElement";
import { SVGGroupElement } from "../elements/SVGGroupElement";
import { SVGPathElement } from "../elements/SVGPathElement";
import { SVGTextElement } from "../elements/SVGTextElement";
import { SVGLineElement } from "../elements/SVGLineElement";

export interface SVGElementMap {
  [index: string]: unknown;
  "circle": SVGCircleElement;
  "rect": SVGRectElement;
  "line": SVGLineElement;
  "g": SVGGroupElement;
  "path": SVGPathElement;
  "text": SVGTextElement;
  "svg": SVGSVGElement;
}

