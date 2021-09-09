import { SVGElement } from "../elements/SVGElement";

let _parentNode: SVGElement;
export default class ClassList extends Array {

  constructor(parentNode: SVGElement) {
    super();
    _parentNode = parentNode;
  }


  private _updateAttribute(){
    if(this.length > 0){
      _parentNode.setAttribute("class", this.value);
    } else {
      _parentNode.removeAttribute("class");
    }
  }


  public add(className: string): void {
    this.unshift(className);
    this._updateAttribute();
  }

  
  public remove(className: string): void {
    this.splice(this.indexOf(className), 1);
    this._updateAttribute();
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


  public get value(): string {
    return this.join(" ");
  }
  

  public set value(value: string) {
    this.splice(0, this.length);
    this.push(...value.split(" "));
    this._updateAttribute();
  }


  public contains(className: string): boolean {
    return this.includes(className);
  }

}