import { SVGInstance } from "@instance/SVGInstance.js";

export class Color extends SVGInstance {

  public color(): string | null;
  public color(color: string): this;
  public color(color?: string): string | this | null {
    if(typeof color === "undefined"){
      const color = this.attr("color");
      return typeof color === "string" ? color : null;
    } else if(typeof color === "string"){
      this.attr("color", color);
      return this;
    }
    return null;
  }

}