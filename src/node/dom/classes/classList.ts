import { SVGElement } from "../elements/SVGElement";

let _parentNode: SVGElement;
export default class ClassList extends Array {

  constructor(parentNode: SVGElement) {
    super();
    _parentNode = parentNode;
  }


  public __updateAttribute() {
    if(this.length > 0){
      _parentNode.setAttribute("class", this.value);
    } else {
      _parentNode.removeAttribute("class");
    }
  }


  public add(...classNames: Array<string>): void {
    for(const className of classNames){
      if(!this.includes(className)){
        this.unshift(className);
      }
    }
    this.__updateAttribute();
  }


  public remove(...classNames: Array<string>): void {
    for(const className of classNames){
      if(this.includes(className)){
        this._splice(className);
      }
    }
    this.__updateAttribute();
  }


  public toggle(className: string, force?: boolean): boolean {
    if(this.contains(className)){
      if(force === true){
        return true;
      }
      this.remove(className);
      return false;
    } else {
      if(force === false){
        return false;
      }
      this.add(className);
      return true;
    }
  }


  private _splice(element: string): Array<string> {
    let index = this.indexOf(element);
    if(index > -1){
      const newLength = this.length - 1;
      while(index < newLength){
        this[index] = this[index + 1];
        ++index;
      }
      this.length = newLength;
      return [element];
    }
    return [];
  }


  public get value(): string {
    return this.join(" ");
  }


  public set value(value: string) {
    while(this.length > 0){
      this.pop();
    }
    this.push(...value.split(" "));
    this.__updateAttribute();
  }


  public contains(className: string): boolean {
    return this.includes(className);
  }

}