import { SVGElement } from "../../elements/SVGElement.js";
import { SVGPathElement } from "../../elements/SVGPathElement.js";
import { SVGRectElement } from "../../elements/SVGRectElement.js";
import { SVGCircleElement } from "../../elements/SVGCircleElement.js";
import { SVGLineElement } from "../../elements/SVGLineElement.js";
import { SVGTextElement } from "../../elements/SVGTextElement.js";

export class ShapeElements extends SVGElement {

  public addRect(): SVGRectElement
  public addRect(x: number | string, y: number | string): SVGRectElement
  public addRect(x: number | string, y: number | string, width: number | string, height: number | string): SVGRectElement
  public addRect(xOrUndefined?: number | string, yOrUndefined?: number | string, widthOrUndefined?: number | string, heightOrUndefined?: number | string): SVGRectElement {
    const rect = new SVGRectElement();
    if(xOrUndefined !== undefined) { rect.setAttribute("x", xOrUndefined + ""); }
    if(yOrUndefined !== undefined) { rect.setAttribute("y", yOrUndefined + ""); }
    if(widthOrUndefined !== undefined) { rect.setAttribute("width", widthOrUndefined + ""); }
    if(heightOrUndefined !== undefined) { rect.setAttribute("height", heightOrUndefined + ""); }
    this.appendChild(rect);
    return rect;
  }


  public addCircle(): SVGCircleElement
  public addCircle(cx: number | string, cy: number | string): SVGCircleElement
  public addCircle(cx: number | string, cy: number | string, radius: number | string): SVGCircleElement
  public addCircle(cxOrUndefined?: number | string, cyOrUndefined?: number | string, radiusOrUndefined?: number | string): SVGCircleElement {
    const circle = new SVGCircleElement();
    if(cxOrUndefined !== undefined) { circle.setAttribute("cx", cxOrUndefined + ""); }
    if(cyOrUndefined !== undefined) { circle.setAttribute("cy", cyOrUndefined + ""); }
    if(radiusOrUndefined !== undefined) { circle.setAttribute("r", radiusOrUndefined + ""); }
    this.appendChild(circle);
    return circle;
  }


  public addLine(): SVGLineElement
  public addLine(x1: number | string, y1: number | string, x2: number | string, y2: number | string): SVGLineElement
  public addLine(x1OrUndefined?: number | string, y1OrUndefined?: number | string, x2OrUndefined?: number | string, y2OrUndefined?: number | string): SVGLineElement {
    const line = new SVGLineElement();
    if(x1OrUndefined !== undefined) { line.setAttribute("x1", x1OrUndefined + ""); }
    if(y1OrUndefined !== undefined) { line.setAttribute("y1", y1OrUndefined + ""); }
    if(x2OrUndefined !== undefined) { line.setAttribute("x2", x2OrUndefined + ""); }
    if(y2OrUndefined !== undefined) { line.setAttribute("y2", y2OrUndefined + ""); }
    this.appendChild(line);
    return line;
  }


  public addPath(): SVGPathElement
  public addPath(d: string): SVGPathElement
  public addPath(dOrUndefined?: string): SVGPathElement {
    const path = new SVGPathElement();
    if(dOrUndefined !== undefined) { path.setAttribute("d", dOrUndefined + ""); }
    this.appendChild(path);
    return path;
  }

}