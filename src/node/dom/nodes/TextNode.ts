import { Node, NodeType } from "./Node.js";

export class TextNode extends Node {

  constructor(text: string) {
    super(NodeType.TEXT_NODE);
    this.nodeValue = text;
  }

}