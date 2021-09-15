import { escapeCData, escapeComment, escapeHTMLEntities } from "../utils/functions.js";

export enum NodeType {
  ELEMENT_NODE = 1,
  TEXT_NODE = 3,
  CDATA_SECTION_NODE = 4,
  COMMENT_NODE = 8,
  DOCUMENT_NODE = 9,
  DOCUMENT_TYPE_NODE = 10,
  DOCUMENT_FRAGMENT_NODE = 11
}

export class Node {

  public readonly nodeType: NodeType;

  public childNodes: Array<Node> = [];
  private _nodeValue: string | null = null;
  private _parentNode: Node | null = null;

  constructor(nodeType: NodeType) {
    this.nodeType = nodeType;
  }


  public get firstChild(): Node | null {
    return this.childNodes[0] ?? null;
  }


  public get lastChild(): Node | null {
    return this.childNodes[this.childNodes.length - 1] ?? null;
  }


  public get nextSibling(): Node | null {
    if(this.parentNode !== null){
      const index = this.parentNode.childNodes.indexOf(this);
      if(index !== -1){
        return this.parentNode.childNodes[index + 1] ?? null;
      }
    }
    return null;
  }


  public get previousSibling(): Node | null {
    if(this.parentNode !== null){
      const index = this.parentNode.childNodes.indexOf(this);
      if(index !== -1){
        return this.parentNode.childNodes[index - 1] ?? null;
      }
    }
    return null;
  }


  public hasChildNodes(): boolean {
    return this.childNodes.length > 0;
  }


  public appendChild<T extends Node>(node: T): T {
    this.childNodes.push(node);
    node.__parentNode = this;
    return node;
  }


  private set __parentNode(parent: Node | null) {
    this._parentNode = parent;
  }


  public get parentNode(): Node | null {
    return this._parentNode;
  }


  public set textContent(text: string | null) {
    this._nodeValue = text;
  }


  public get textContent(): string | null {
    return this._nodeValue;
  }


  public set nodeValue(value: string | null) {
    this._nodeValue = value;
  }


  public get nodeValue(): string | null {
    if(typeof this._nodeValue === "string"){
      if(this.nodeType === NodeType.TEXT_NODE){
        return escapeHTMLEntities(this._nodeValue);
      } else if(this.nodeType === NodeType.COMMENT_NODE){
        return escapeComment(this._nodeValue);
      } else if(this.nodeType === NodeType.CDATA_SECTION_NODE){
        return escapeCData(this._nodeValue);
      } else {
        return "";
      }
    }
    return null;
  }

}