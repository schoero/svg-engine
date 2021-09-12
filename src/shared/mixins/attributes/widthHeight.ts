import { SVGInstance } from "@instance/SVGInstance.js";

export class WidthHeight extends SVGInstance {

  public width(): string | number | null;
  public width(width: number | string): this;
  public width(width?: number | string): string | number | this | null {
    if(typeof width === "string" || typeof width === "number") {
      this.attr("width", width + "");
      return this;
    }
    return this.attr("width");
  }
  

  public height(): string | number | null;
  public height(height: number | string): this;
  public height(height?: number | string): string | number | this | null {
    if(typeof height === "string" || typeof height === "number") {
      this.attr("height", height + "");
      return this;
    }
    return this.attr("height");
  }
  
}