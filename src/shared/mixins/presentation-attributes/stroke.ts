import { SVGInstance } from "@instance/SVGInstance.js";
import { SVGDefsInstance } from "../../instances/SVGDefsInstance.js";

export class Stroke extends SVGInstance {

  public stroke(): this;
  public stroke(width: string | number): this;
  public stroke(width: string | number, style: "solid" | "dashed"): this;
  public stroke(width: string | number, style: "solid" | "dashed", color: string): this;
  public stroke(width: string | number = 1, style: "solid" | "dashed" = "solid", color: string = "currentColor"): this {
    this.strokeWidth(width);
    this.strokeColor(color);
    if(style === "dashed"){
      this.strokeDasharray(3);
    }
    return this;
  }


  public strokeColor(): string | null;
  public strokeColor(color: string): this;
  public strokeColor(color?: string): string | this | null {
    if(typeof color === "undefined"){
      const color = this.attr("stroke");
      return typeof color === "string" ? color : null;
    } else if(typeof color === "string"){
      this.attr("stroke", color);
      return this;
    }
    return null;
  }


  public strokeLinearGradient(gradient: Array<{ position: number | string, color: string }>, rotation?: number): this {

    const defs = this.root?.childInstances.find(instance => instance.element.tagName === "defs") as SVGDefsInstance ?? this.root?.addDefs();
    const linearGradient = defs?.addLinearGradient();

    const id = defs.element.childNodes.length;
    linearGradient.attr("id", "gradient-" + id);

    if(typeof rotation === "number"){
      linearGradient.attr("gradientTransform", "rotate(" + rotation + ")");
    }

    for(const stop of gradient){
      linearGradient.addStop(stop.position, stop.color);
    }

    this.attr("stroke", "url(#gradient-" + id + ")");

    return this;

  }


  public dash(): this;
  public dash(dash: string | number): this;
  public dash(dash: string | number, color: string): this;
  public dash(dash: string | number = 3, color: string = "currentColor"): this {
    this.strokeDasharray(dash);
    this.strokeColor(color);
    return this;
  }


  public strokeDasharray(): string | number | Array<string | number> | null;
  public strokeDasharray(dash: string | number, gap?: string | number): this;
  public strokeDasharray(dashGapArray: Array<string | number>): this;
  public strokeDasharray(dashGapArrayOrUndefined?: Array<string | number> | string | number, gap?: string | number): string | number | Array<string | number> | this | null {
    if(typeof dashGapArrayOrUndefined === "undefined"){
      const dashGapString = this.attr("stroke-dasharray");

      if(typeof dashGapString === "number"){
        return dashGapString;
      } else if(typeof dashGapString === "string"){
        const dashGapArray = dashGapString.split(" ");
        if(dashGapArray.length === 1){
          return isNaN(+dashGapArray[0]) ? dashGapArray[0] : +dashGapArray[0];
        } else {
          return dashGapArray.map(value => isNaN(+value) ? value : +value);
        }
      }
    } else if(typeof dashGapArrayOrUndefined === "string" || typeof dashGapArrayOrUndefined === "number"){
      this.attr("stroke-dasharray", dashGapArrayOrUndefined);
      return this;
    } else if(Array.isArray(dashGapArrayOrUndefined)){
      this.attr("stroke-dasharray", dashGapArrayOrUndefined.join(" "));
      return this;
    }
    return null;
  }


  public strokeDashoffset(): string | number | null;
  public strokeDashoffset(offset: string | number): this;
  public strokeDashoffset(offset?: string | number): string | number | this | null {
    if(typeof offset === "string" || typeof offset === "number"){
      this.attr("stroke-dashoffset", offset);
      return this;
    }
    return this.attr("stroke-dashoffset");
  }


  public strokeLinecap(): string | null;
  public strokeLinecap(cap: "butt" | "round" | "square"): this;
  public strokeLinecap(cap?: "butt" | "round" | "square"): string | this | null {
    if(typeof cap === "undefined"){
      const cap = this.attr("stroke-linecap");
      return typeof cap === "string" ? cap : null;
    } else if(typeof cap === "string"){
      this.attr("stroke-linecap", cap);
      return this;
    }
    return null;
  }


  public strokeLinejoin(): string | null;
  public strokeLinejoin(join: "arcs" | "bevel" | "miter" | "miter-clip" | "round"): this;
  public strokeLinejoin(join?: "arcs" | "bevel" | "miter" | "miter-clip" | "round"): string | this | null {
    if(typeof join === "undefined"){
      const join = this.attr("stroke-linejoin");
      return typeof join === "string" ? join : null;
    } else if(typeof join === "string"){
      this.attr("stroke-linejoin", join);
      return this;
    }
    return null;
  }


  public strokeMiterlimit(): number | null;
  public strokeMiterlimit(limit: number): this;
  public strokeMiterlimit(limit?: number): number | this | null {
    if(typeof limit === "undefined"){
      const limit = this.attr("stroke-miterlimit");
      return typeof limit === "number" ? limit : null;
    } else if(typeof limit === "number"){
      this.attr("stroke-miterlimit", limit);
      return this;
    }
    return null;
  }


  public strokeOpacity(): string | number | null;
  public strokeOpacity(opacity: string | number): this;
  public strokeOpacity(opacity?: string | number): string | number | this | null {
    if(typeof opacity === "string" || typeof opacity === "number"){
      this.attr("stroke-opacity", opacity);
      return this;
    }
    return this.attr("stroke-opacity");
  }


  public strokeWidth(): string | number | null;
  public strokeWidth(width: string | number): this;
  public strokeWidth(width?: string | number): string | number | this | null {
    if(typeof width === "string" || typeof width === "number"){
      this.attr("stroke-width", width);
      return this;
    }
    return this.attr("stroke-width");
  }

}