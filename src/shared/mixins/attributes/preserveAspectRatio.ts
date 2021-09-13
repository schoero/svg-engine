import { SVGInstance } from "@instance/SVGInstance.js";

export class PreserveAspectRatio extends SVGInstance {

  public preserveAspectRatio(): { align: string, meetOrSlice: string | undefined } | null;
  public preserveAspectRatio(align: "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" | "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax", meetOrSlice: "meet" | "slice"): this;
  public preserveAspectRatio(align?: "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" | "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax", meetOrSlice?: "meet" | "slice"): { align: string, meetOrSlice: string | undefined } | null | this {
    if(typeof align === "undefined" && typeof meetOrSlice === "undefined"){
      const preserveAspectRatio = this.attr("preserveAspectRatio");
      if(typeof preserveAspectRatio === "string"){
        const [align, meetOrSlice] = preserveAspectRatio.split(" ");
        return { align, meetOrSlice };
      }
    } else if(typeof align === "string" && typeof meetOrSlice === "string"){
      this.attr("preserveAspectRatio", `${align} ${meetOrSlice}`);
      return this;
    } else if(typeof align === "string" && typeof meetOrSlice === "undefined"){
      this.attr("preserveAspectRatio", align);
      return this;
    }
    return null;
  }

}