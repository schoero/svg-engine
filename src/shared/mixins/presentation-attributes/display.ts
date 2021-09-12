import { SVGInstance } from "@instance/SVGInstance.js";

export class Display extends SVGInstance {

  public display(): string | null;
  public display(display: string): this;
  public display(display?: string): string | this | null {
    if(typeof display === "undefined"){
      const display = this.attr("display");
      return typeof display === "string" ? display : null;
    } else if(typeof display === "string"){
      this.attr("display", display);
      return this;
    }
    return null;
  }

}