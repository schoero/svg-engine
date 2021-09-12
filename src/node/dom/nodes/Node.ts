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
  private _nodeValue: string | null = null;

  constructor(nodeType: NodeType){
    this.nodeType = nodeType;
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