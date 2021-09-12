import { SVGInstance } from "../../instances/SVGInstance.js";

export class Font extends SVGInstance {

  public fontFamily(): string | null;
  public fontFamily(fontFamily: string): this;
  public fontFamily(fontFamily?: string): string | this | null {
    if(typeof fontFamily === "undefined"){
      const fontFamily = this.attr("font-family");
      return typeof fontFamily === "string" ? fontFamily : null;
    } else if(typeof fontFamily === "string"){
      this.attr("font-family", fontFamily);
      return this;
    }
    return null;
  }


  public fontSize(): string | number | null;
  public fontSize(fontSize: string | number): this;
  public fontSize(fontSize?: string | number): string | number | this | null {
    if(typeof fontSize === "string" || typeof fontSize === "number"){
      this.attr("font-size", fontSize);
      return this;
    }
    return this.attr("font-size");
  }


  public fontStyle(): string | null;
  public fontStyle(fontStyle: "normal" | "italic" | "oblique"): this;
  public fontStyle(fontStyle?: "normal" | "italic" | "oblique"): string | this | null {
    if(typeof fontStyle === "undefined"){
      const fontStyle = this.attr("font-style");
      return typeof fontStyle === "string" ? fontStyle : null;
    } else if(typeof fontStyle === "string"){
      this.attr("font-style", fontStyle);
      return this;
    }
    return null;
  }


  public fontWeight(): string | number | null;
  public fontWeight(fontWeight: "normal" | "bold" | "bolder" | "lighter" | number): this;
  public fontWeight(fontWeight?: "normal" | "bold" | "bolder" | "lighter" | number): string | number | this | null {
    if(typeof fontWeight === "string" || typeof fontWeight === "number"){
      this.attr("font-weight", fontWeight);
      return this;
    }
    return this.attr("font-weight");
  }

}