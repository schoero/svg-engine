import { createElement } from "../utils/createElement.js";

export class SVGInstance {

  public element: SVGElement;
  public childInstances: Array<SVGInstance> = [];

  constructor(tagName: string) {
    this.element = createElement(tagName);
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


  public addClass(className: string): this;
  public addClass(classNames: Array<string>): this;
  public addClass(classNameOrClassNames: string | Array<string>): this {
    if(typeof classNameOrClassNames === "string"){
      this.element.classList.add(classNameOrClassNames);
    } else if(Array.isArray(classNameOrClassNames)){
      classNameOrClassNames.forEach(className => this.element.classList.add(className));
    }
    return this;
  }


  public removeClass(className: string): this;
  public removeClass(classNames: Array<string>): this;
  public removeClass(classNameOrClassNames: string | Array<string>): this {
    if(typeof classNameOrClassNames === "string"){
      this.element.classList.remove(classNameOrClassNames);
    } else if(Array.isArray(classNameOrClassNames)){
      classNameOrClassNames.forEach(className => this.element.classList.remove(className));
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

    const attributes: { [key: string]: string | number } = Object.entries(this.element.attributes).reduce((previous, [key, value]) => ({ ...previous, [key]: isNaN(+value) ? value : +value }), {});

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