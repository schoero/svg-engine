import { createElement } from "../utils/createElement.js";
import { SVGElement } from "../dom/elements/SVGElement.js";
import { SVGElementMap } from "../dom/interfaces";
import { convertNamedNodeMapToObject } from "../../shared/utils/functions.js";
import { SVGSVGInstance } from "../../shared/instances/SVGSVGInstance";

export class SVGInstance {

  public element: SVGElementMap[keyof SVGElementMap] | SVGElement;
  public childInstances: Array<SVGInstance> = [];

  protected _parent?: SVGInstance;

  constructor(tagName: keyof SVGElementMap, _parent?: SVGInstance) {
    this.element = createElement(tagName);
    this._parent = _parent;
  }


  public get parent(): SVGInstance | undefined {
    return this._parent;
  }


  public get root(): SVGSVGInstance | undefined  {
    let parent = this._parent;
    while(parent?.parent !== undefined){
      parent = parent.parent;
    }
    return parent as SVGSVGInstance | undefined;
  }


  public appendInstance(instance: SVGInstance): this {
    this.childInstances.push(instance);
    this.element.appendChild(instance.element);
    return this;
  }


  public id(): string | null;
  public id(id: string): this;
  public id(id?: string): string | this | null {
    if(typeof id === "string"){
      this.element.id = id;
      return this;
    }
    return this.element.id;
  }


  public get innerHTML(): string {
    return this.element.innerHTML;
  }


  public get outerHTML(): string {
    return this.element.outerHTML;
  }


  public empty(): this {
    this.childInstances = [];
    return this;
  }


  public addClass(className: string): this;
  public addClass(classNames: Array<string>): this;
  public addClass(classNameOrClassNames: string | Array<string>): this {
    if(typeof classNameOrClassNames === "string"){
      this.element.classList.add(classNameOrClassNames);
    } else if(Array.isArray(classNameOrClassNames)){
      this.element.classList.add(...classNameOrClassNames);
    }
    return this;
  }


  public removeClass(className: string): this;
  public removeClass(classNames: Array<string>): this;
  public removeClass(classNameOrClassNames: string | Array<string>): this {
    if(typeof classNameOrClassNames === "string"){
      this.element.classList.remove(classNameOrClassNames);
    } else if(Array.isArray(classNameOrClassNames)){
      this.element.classList.remove(...classNameOrClassNames);
    }
    return this;
  }


  public hasClass(className: string): boolean {
    return this.element.classList.contains(className);
  }


  public attr(): { [key: string]: string | number };
  public attr(attributeObject: { [key: string]: string | number }): this;
  public attr(attributeName: string): string | number | null;
  public attr(attributeName: Array<string>): { [key: string]: string | number };
  public attr(attributeName: string, value: string | number): this;
  public attr(attributeName: string, value?: string | number): string | null | this;
  public attr(attributeNameOrAttributeObjectOrUndefined?: string | Array<string> | { [key: string]: string | number }, valueOrUndefined?: string | number): this | string | number | { [key: string]: string | number } | null {


    //-- Convert numeric strings to numbers

    const attributes: { [key: string]: string | number } = Object.entries(convertNamedNodeMapToObject(this.element.attributes)).reduce((previous, [key, value]) => ({ ...previous, [value.name]: isNaN(+value.value) ? value.value : +value.value }), {});

    if(typeof attributeNameOrAttributeObjectOrUndefined === "undefined"){
      return attributes;
    } else if(typeof attributeNameOrAttributeObjectOrUndefined === "object"){
      if(Array.isArray(attributeNameOrAttributeObjectOrUndefined)){
        return Object.fromEntries(Object.entries(attributes).filter(([key, value]) => attributeNameOrAttributeObjectOrUndefined.includes(key)));
      } else {
        Object.keys(attributeNameOrAttributeObjectOrUndefined).forEach(key => { this.element.setAttribute(key, attributeNameOrAttributeObjectOrUndefined[key] + ""); });
        return this;
      }
    } else if(typeof attributeNameOrAttributeObjectOrUndefined === "string"){
      if(typeof valueOrUndefined === "undefined"){
        return attributes[attributeNameOrAttributeObjectOrUndefined] ?? null;
      } else {
        this.element.setAttribute(attributeNameOrAttributeObjectOrUndefined, valueOrUndefined + "");
        return this;
      }
    }

    return null;

  }


  public removeAttr(attributeName: string): this {
    this.element.removeAttribute(attributeName);
    return this;
  }

}