import { SVGInstance } from "@instance/SVGInstance.js";
import { SVGDefsInstance } from "../../instances/SVGDefsInstance.js";

export class Fill extends SVGInstance {

  public fill(): string | null;
  public fill(fill: string): this;
  public fill(fill?: string): string | this | null {
    if(typeof fill === "undefined"){
      const fill = this.attr("fill");
      return typeof fill === "string" ? fill : null;
    } else if(typeof fill === "string"){
      this.attr("fill", fill);
      return this;
    }
    return null;
  }


  public fillOpacity(): number | null;
  public fillOpacity(fillOpacity: number): this;
  public fillOpacity(fillOpacity?: number): number | this | null {
    if(typeof fillOpacity === "undefined"){
      const fillOpacity = this.attr("fill-opacity");
      return typeof fillOpacity === "number" ? fillOpacity : null;
    } else if(typeof fillOpacity === "number"){
      this.attr("fill-opacity", fillOpacity);
      return this;
    }
    return null;
  }


  public fillRule(): string | null;
  public fillRule(fillRule: "nonzero" | "evenodd"): this;
  public fillRule(fillRule?: "nonzero" | "evenodd"): string | this | null {
    if(typeof fillRule === "undefined"){
      const fillRule = this.attr("fill-rule");
      return typeof fillRule === "string" ? fillRule : null;
    } else if(typeof fillRule === "string"){
      this.attr("fill-rule", fillRule);
      return this;
    }
    return null;
  }


  public fillLinearGradient(gradient: Array<{ position: number | string, color: string }>, rotation?: number): this {

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

    this.attr("fill", "url(#gradient-" + id + ")");

    return this;

  }

}