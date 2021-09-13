
import { SVGInstance } from "@instance/SVGInstance.js";
import { SVGTSpanInstance } from "../../instances/SVGTSpanInstance.js";

export class TextAttributes extends SVGInstance {

  public text(): string | null;
  public text(text: string): this;
  public text(text?: string): string | this | null {
    if(typeof text === "string"){
      this.element.innerHTML = text;
      return this;
    }
    return this.element.innerHTML;
  }


  public textAnchor(): string | null;
  public textAnchor(textAnchor: "start" | "middle" | "end"): this;
  public textAnchor(textAnchor?: "start" | "middle" | "end"): string | this | null {
    if(typeof textAnchor === "undefined"){
      const textAnchor = this.attr("text-anchor");
      return typeof textAnchor === "string" ? textAnchor : null;
    } else if(typeof textAnchor === "string"){
      this.attr("text-anchor", textAnchor);
      return this;
    }
    return null;
  }


  public dx(): string | number | null;
  public dx(dx: string | number): this;
  public dx(dx?: string | number): string | number | this | null {
    if(typeof dx === "string" || typeof dx === "number"){
      this.attr("dx", dx);
      return this;
    }
    return this.attr("dx");
  }


  public dy(): string | number | null;
  public dy(dy: string | number): this;
  public dy(dy?: string | number): string | number | this | null {
    if(typeof dy === "string" || typeof dy === "number"){
      this.attr("dy", dy);
      return this;
    }
    return this.attr("dy");
  }

}