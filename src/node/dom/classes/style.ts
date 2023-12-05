import { SVGElement } from "../elements/SVGElement.js";

let _parentNode: SVGElement;
export default class Style extends Object {

  [key: string]: string | Function;

  constructor(parentNode: SVGElement) {
    super();
    _parentNode = parentNode;
  }


  public setProperty(propertyName: string, value: string, priority?: "important" | "" | undefined) {

    if(priority === "important"){
      this[propertyName] = value + "!important";
    } else {
      this[propertyName] = value;
    }

    if(Object.keys(this).length > 0){
      _parentNode?.setAttribute("style", `${Object.keys(this).map(key => [key, this[key]].join(": ")).join("; ")};`);
    }

  }


  public getPropertyValue(propertyName: string): string {
    if(typeof this[propertyName] === "string"){
      return this[propertyName] as string;
    } else {
      return "";
    }
  }


  public getPropertyPriority(propertyName: string): "important" | "" {
    if(this.getPropertyValue(propertyName).includes("important")){
      return "important";
    } else {
      return "";
    }
  }

}