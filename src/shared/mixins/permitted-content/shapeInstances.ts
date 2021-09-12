import { SVGInstance } from "@instance/SVGInstance.js";

import { SVGRectInstance } from "../../instances/SVGRectInstance.js";
import { SVGCircleInstance } from "../../instances/SVGCircleInstance.js";
import { SVGLineInstance } from "../../instances/SVGLineInstance.js";
import { SVGPathInstance } from "../../instances/SVGPathInstance.js";
import { SVGTextInstance } from "../../instances/SVGTextInstance.js";

export class ShapeInstances extends SVGInstance {
  
  public addRect(): SVGRectInstance;
  public addRect(x: number | string, y: number | string): SVGRectInstance;
  public addRect(x: number | string, y: number | string, width: number | string, height: number | string): SVGRectInstance;
  public addRect(xOrUndefined?: number | string, yOrUndefined?: number | string, widthOrUndefined?: number | string, heightOrUndefined?: number | string): SVGRectInstance {
    const rect = new SVGRectInstance();
    if(xOrUndefined !== undefined) { rect.attr("x", xOrUndefined + ""); }
    if(yOrUndefined !== undefined) { rect.attr("y", yOrUndefined + ""); }
    if(widthOrUndefined !== undefined) { rect.attr("width", widthOrUndefined + ""); }
    if(heightOrUndefined !== undefined) { rect.attr("height", heightOrUndefined + ""); }
    this.appendInstance(rect);
    return rect;
  }


  public addCircle(): SVGCircleInstance;
  public addCircle(cx: number | string, cy: number | string): SVGCircleInstance;
  public addCircle(cx: number | string, cy: number | string, r: number | string): SVGCircleInstance;
  public addCircle(cxOrUndefined?: number | string, cyOrUndefined?: number | string, radiusOrUndefined?: number | string): SVGCircleInstance {
    const circle = new SVGCircleInstance();
    if(cxOrUndefined !== undefined) { circle.attr("cx", cxOrUndefined + ""); }
    if(cyOrUndefined !== undefined) { circle.attr("cy", cyOrUndefined + ""); }
    if(radiusOrUndefined !== undefined) { circle.attr("r", radiusOrUndefined + ""); }
    this.appendInstance(circle);
    return circle;
  }

  
  public addLine(): SVGLineInstance;
  public addLine(x1: number | string, y1: number | string): SVGLineInstance;
  public addLine(x1: number | string, y1: number | string, x2: number | string, y2: number | string): SVGLineInstance;
  public addLine(x1OrUndefined?: number | string, y1OrUndefined?: number | string, x2OrUndefined?: number | string, y2OrUndefined?: number | string): SVGLineInstance {
    const line = new SVGLineInstance();
    if(x1OrUndefined !== undefined) { line.attr("x1", x1OrUndefined + ""); }
    if(y1OrUndefined !== undefined) { line.attr("y1", y1OrUndefined + ""); }
    if(x2OrUndefined !== undefined) { line.attr("x2", x2OrUndefined + ""); }
    if(y2OrUndefined !== undefined) { line.attr("y2", y2OrUndefined + ""); }
    this.appendInstance(line);
    return line;
  }


  public addPath(): SVGPathInstance;
  public addPath(d: string): SVGPathInstance;
  public addPath(dOrUndefined?: string): SVGPathInstance {
    const path = new SVGPathInstance();
    if(dOrUndefined !== undefined) { path.attr("d", dOrUndefined + ""); }
    this.appendInstance(path);
    return path;
  }


  public addText(): SVGTextInstance;
  public addText(text: string): SVGTextInstance;
  public addText(x: number | string, y: number | string, text: string): SVGTextInstance;
  public addText(xOrTextOrUndefined?: string | number, yOrUndefined?: string | number, textOrUndefined?: string): SVGTextInstance {
    const text = new SVGTextInstance();
    if(typeof xOrTextOrUndefined === "string" && typeof yOrUndefined === "undefined"){
      text.text(xOrTextOrUndefined);
    } else if((typeof xOrTextOrUndefined === "string" || typeof xOrTextOrUndefined === "number") && (typeof yOrUndefined === "string" || typeof yOrUndefined === "number")){
      text.attr("x", xOrTextOrUndefined);
      text.attr("y", yOrUndefined);
      if(typeof textOrUndefined === "string") { 
        text.text(textOrUndefined); 
      }
    }
    this.appendInstance(text);
    return text;
  }

}