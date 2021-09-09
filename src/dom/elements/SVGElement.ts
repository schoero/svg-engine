import ClassList from "../classes/classList.js";
import Style from "../classes/style.js";

import { Node, NodeType } from "../nodes/Node.js";
import { TextNode } from "../nodes/TextNode.js";

export class SVGElement extends Node {

  public tagName: string;
  public attributes: { [key:string]: string } = {};
  public childNodes: Array<Node> = [];
  public classList: ClassList = new ClassList(this);
  public style = new Style(this);

  constructor(tagName: string){
    super(NodeType.ELEMENT_NODE);
    this.tagName = tagName;
  }


  public get children(): Array<SVGElement> {
    return this.childNodes.filter(node => node.nodeType === NodeType.ELEMENT_NODE) as Array<SVGElement>;
  }


  public set innerHTML(html: string) {
    this.childNodes = [new TextNode(html)];
  }


  public get innerHTML(): string {

    let html = "";

    for(let childNode of this.childNodes){
      if(childNode.nodeType === NodeType.TEXT_NODE || childNode.nodeType === NodeType.COMMENT_NODE || childNode.nodeType === NodeType.CDATA_SECTION_NODE){
        html += childNode.nodeValue ?? "";
      } else if (childNode.nodeType === NodeType.ELEMENT_NODE){
        html += (childNode as SVGElement).outerHTML;
      }
    }

    return html;

  }


  public get outerHTML(): string {

    const attributes = Object.keys(this.attributes).map(key => `${key}="${this.attributes[key]}"`).join(" ");

    const tagNameAndAttributes = `${[this.tagName, attributes].filter(value => value !== "").join(" ")}`;

    if(this.childNodes.length === 0){
      return `<${tagNameAndAttributes} />`;
    } else {
      return `<${tagNameAndAttributes}>${this.innerHTML}</${this.tagName}>`;
    }

  }


  public set innerText(text: string) {
    this.childNodes = [new TextNode(text)];
  }


  public get innerText(): string {
    return this.childNodes.filter(node => node.nodeType === NodeType.TEXT_NODE)[0]?.nodeValue ?? "";
  }


  public setAttribute(attributeName: string, value: string): void {
    this.attributes[attributeName] = value;
  }


  public getAttribute(attributeName: string): string | null {
    return this.attributes[attributeName] ?? null;
  }


  public removeAttribute(attributeName: string): void {
    delete this.attributes[attributeName];
  }


  public toggleAttribute(attributeName: string, force?: boolean): boolean {
    if(this.hasAttribute(attributeName)){
      if(force === true){
        return true
      }
      this.removeAttribute(attributeName);
      return false;
    } else {
      if(force === false){
        return false;
      }
      this.setAttribute(attributeName, "");
      return true;
    }
  }


  public hasAttribute(attributeName: string): boolean {
    return this.attributes[attributeName] !== undefined;
  }


  public hasAttributes(): boolean {
    return Object.keys(this.attributes).length > 0;
  }


  public get className(): string {
    return this.classList.value;
  }


  public set className(className: string) {
    this.classList.value = className;
  }


  public get id(): string | null {
    return this.getAttribute("id");
  }


  public set id(id: string | null) {
    if(id !== null){ 
      this.setAttribute("id", id);
    }
  }


  public appendChild<T extends Node>(node: T): T {
    this.childNodes.push(node);
    return node;
  }


  public get firstChild(): SVGElement | null {
    return this.children[0] ?? null;
  }


  public get lastChild(): SVGElement | null {
    return this.children[this.children.length - 1] ?? null;
  }


  public hasChildNodes(): boolean {
    return this.childNodes.length > 0;
  }


  public removeChild(child: SVGElement): SVGElement {
    for(let c = this.children.length - 1; c >= 0; c--){
      if(this.children[c] === child){
        this.children.splice(c, 1);
        return child;
      }
    }
    throw new Error("Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.");
  }


  public getElementsByClassName(className: string): Array<SVGElement> {

    const elements: Array<SVGElement> = [];
    
    for(let child of this.children){
      if(child.classList.contains(className)){
        elements.push(...[child, ...child.getElementsByClassName(className)]);
      }
    }

    return elements;

  }


  public getElementsByTagName(tagName: string): Array<SVGElement> {

    const elements: Array<SVGElement> = [];

    for(let child of this.children){
      if(child.tagName === tagName){
        elements.push(...[child, ...child.getElementsByTagName(tagName)]);
      }
    }

    return elements;

  }


  public getElementById(id: string): SVGElement | null {

    for(let child of this.children){
      if(child.id === id){
        return child;
      } else {
        return child.getElementById(id);
      }
    }

    return null;

  }


  public tabIndex(index: number): this {
    this.setAttribute("tabindex", index + "");
    return this;
  }

}