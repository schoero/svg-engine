import { SVGInstance } from "@instance/SVGInstance.js";
import { SVGSVGInstance } from "../../instances/SVGSVGInstance.js";
import { SVGGroupInstance } from "../../instances/SVGGroupInstance.js";

export class StructuralInstances extends SVGInstance {

  public addGroup(): SVGGroupInstance {
    const group = new SVGGroupInstance(this);
    this.appendInstance(group);
    return group;
  }


  public addSVG(): SVGSVGInstance;
  public addSVG(width: string | number, height: string | number): SVGSVGInstance;
  public addSVG(width?: string | number, height?: string | number): SVGSVGInstance {
    if(typeof width !== "undefined" && typeof height !== "undefined"){
      const svg = new SVGSVGInstance(width, height);
      this.appendInstance(svg);
      return svg;
    } else {
      const svg = new SVGSVGInstance();
      this.appendInstance(svg);
      return svg;
    }
  }

}