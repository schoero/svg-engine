import ClassList from "../classes/classList.js";
import NamedNodeMap from "../classes/namedNodeMap.js";
import Style from "../classes/style.js";
import { SVGElementMap } from "../interfaces/index.js";

import { Node, NodeType } from "../nodes/Node.js";
import { TextNode } from "../nodes/TextNode.js";
import { convertNamedNodeMapToObject } from "../../../shared/utils/functions.js";
import { attributeRegex, classRegex, idRegex, tagRegex } from "../utils/regex.js";

export class SVGElement extends Node {

  public tagName: string;
  public attributes: NamedNodeMap = new NamedNodeMap();
  public classList: ClassList = new ClassList(this);
  public style = new Style(this);

  constructor(tagName: string) {

    super(NodeType.ELEMENT_NODE);

    this.tagName = tagName;

  }


  public get children(): Array<SVGElement> {
    return this.childNodes.filter(node => node.nodeType === NodeType.ELEMENT_NODE) as Array<SVGElement>;
  }


  public get nextElementSibling(): SVGElement | null {

    const siblings = this.parentNode?.childNodes ?? [];
    const index = siblings.indexOf(this);

    if(index === siblings.length - 1){
      return null;
    }

    for(let s = index + 1; s < siblings.length; s++){
      if(siblings[s].nodeType === NodeType.ELEMENT_NODE){
        return siblings[s] as SVGElement;
      }
    }

    return null;

  }


  public get previousElementSibling(): SVGElement | null {

    const siblings = this.parentNode?.childNodes ?? [];
    const index = siblings.indexOf(this);

    if(index === 0){
      return null;
    }

    for(let s = index - 1; s >= 0; s--){
      if(siblings[s].nodeType === NodeType.ELEMENT_NODE){
        return siblings[s] as SVGElement;
      }
    }

    return null;

  }


  public get innerHTML(): string {

    let html = "";

    for(const childNode of this.childNodes){
      if(childNode.nodeType === NodeType.TEXT_NODE || childNode.nodeType === NodeType.COMMENT_NODE || childNode.nodeType === NodeType.CDATA_SECTION_NODE){
        html += childNode.nodeValue ?? "";
      } else if(childNode.nodeType === NodeType.ELEMENT_NODE){
        html += (childNode as SVGElement).outerHTML;
      }
    }

    return html;

  }


  public set innerHTML(text: string) {
    this.childNodes = [new TextNode(text)];
  }


  public get outerHTML(): string {

    const attributes = Object.keys(convertNamedNodeMapToObject(this.attributes)).map(key => `${key}="${convertNamedNodeMapToObject(this.attributes)[key].value}"`).join(" ");

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
    this.attributes.setNamedItem(attributeName, value);
  }


  public getAttribute(attributeName: string): string | null {
    return this.attributes.getNamedItem(attributeName)?.value ?? null;
  }


  public removeAttribute(attributeName: string): void {
    this.attributes.removeNamedItem(attributeName);
  }


  public toggleAttribute(attributeName: string, force?: boolean): boolean {
    if(this.hasAttribute(attributeName)){
      if(force === true){
        return true;
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
    return convertNamedNodeMapToObject(this.attributes)[attributeName] !== undefined;
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


  public get firstElementChild(): SVGElement | null {
    return this.childNodes.filter(node => node.nodeType === NodeType.ELEMENT_NODE)[0] as SVGElement ?? null;
  }


  public get lastElementChild(): SVGElement | null {
    const childElements = this.childNodes.filter(node => node.nodeType === NodeType.ELEMENT_NODE);
    return childElements[childElements.length - 1] as SVGElement ?? null;
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

    for(const child of this.children){
      if(child.classList.contains(className)){
        elements.push(...[child, ...child.getElementsByClassName(className)]);
      }
    }

    return elements;

  }


  public getElementsByTagName(tagName: string): Array<SVGElement> {

    const elements: Array<SVGElement> = [];

    for(const child of this.children){
      if(child.tagName === tagName){
        elements.push(...[child, ...child.getElementsByTagName(tagName)]);
      }
    }

    return elements;

  }


  public getElementById(id: string): SVGElement | null {

    for(const child of this.children){
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


  public get parentElement(): SVGElement | null {
    return this.parentNode?.nodeType === NodeType.ELEMENT_NODE ? this.parentNode as SVGElement : null;
  }


  public querySelector(selector: string): SVGElement | null {

    const selectors = selector.split(",");

    for(const child of this.children){
      for(const selector of selectors){
        if(child.matches(selector)){
          return child;
        } else {
          const elementFromChild = child.querySelector(selector);
          if(elementFromChild !== null){
            return elementFromChild;
          }
        }
      }
    }

    return null;

  }


  public querySelectorAll(selector: string): Array<SVGElement> | null {

    const selectors = selector.split(",");

    const elements: Array<SVGElement> = [];

    for(const child of this.children){
      for(const selector of selectors){
        if(child.matches(selector)){
          elements.push(child);
          const elementsFromChild = child.querySelectorAll(selector);
          if(elementsFromChild !== null){
            elements.push(...elementsFromChild);
          }
        }
      }
    }

    return elements;

  }


  public closest<K extends keyof SVGElementMap>(selector: K): SVGElementMap[K] | null {
    if(this.matches(selector)){
      return this;
    }
    const parent = this.parentElement;
    return parent?.closest(selector) ?? null;
  }


  public matches(selector: string): boolean {


    //-- Clean up selector

    selector = selector.replace(/>/g, " > ");
    selector = selector.replace(/\+/g, " + ");
    selector = selector.replace(/~/g, " ~ ");
    selector = selector.replace(/'/g, "\"");
    selector = selector.replace(/ {2}/g, " ");
    selector = selector.trim();


    //-- Split multiple selectors seperated by commas

    const selectorChains = selector.split(",");

    selectorChainLoop: for(const currentSelectorChain of selectorChains){


      //-- Split multiple selectors seperated by spaces except within brackets

      const selectorArray = currentSelectorChain.split(/\s+(?![^[]*\])/g);


      //-- Check only current element if no parent selectors where provided

      if(selectorArray.length === 1){


        //-- Match classes

        const classMatches = selectorArray[0].matchAll(classRegex);
        for(const classMatch of classMatches){
          const className = classMatch[1];
          if(this.classList.contains(className) !== true){
            continue selectorChainLoop;
          }
        }


        //-- Match id

        const idMatches = selectorArray[0].matchAll(idRegex);
        for(const idMatch of idMatches){
          const id = idMatch[1];
          if(this.id !== id){
            continue selectorChainLoop;
          }
        }


        //-- Match tag name

        const tagName = selectorArray[0].match(tagRegex);

        if(tagName?.length === 1 && tagName[0] !== ""){
          if(this.tagName !== tagName[0]){
            continue selectorChainLoop;
          }
        }


        //-- Match attributes

        const extractAttributeDataFromRegexMatch = (attributeData: Array<string>) => {
          const name = attributeData[0];
          const matches =  attributeData[1].matchAll(/"([^"]+)" ?(i)?/g);
          for(const match of matches){
            return {
              name,
              value: match[1],
              caseInSensitive: match[2] === "i"
            };
          }
        };

        const attributeMatches = selectorArray[0].matchAll(attributeRegex);
        for(const attributeMatch of attributeMatches){

          const attributeString = attributeMatch[1];

          const whitespaceSelectorArray = attributeString.split("~=");
          const beginFollowedByHyphenArray = attributeString.split("|=");
          const prefixedByValueArray = attributeString.split("^=");
          const suffixedByValueArray = attributeString.split("$=");
          const containsValueArray = attributeString.split("*=");
          const exactValueArray = attributeString.split("=");


          //-- Check only attribute name

          if(attributeString.includes("=") !== true){
            if(convertNamedNodeMapToObject(this.attributes)[attributeString] === undefined){
              continue selectorChainLoop;
            }
          }


          //-- Check attribute name and value

          if(whitespaceSelectorArray.length === 2){

            if(convertNamedNodeMapToObject(this.attributes)[whitespaceSelectorArray[0]] === undefined){
              continue selectorChainLoop;
            }

            const attributeData = extractAttributeDataFromRegexMatch(whitespaceSelectorArray);

            if(attributeData === undefined){
              continue selectorChainLoop;
            }

            const attributeList = attributeData.value.split(" ") ?? [];

            let valueFound = false;
            for(const attributeListEntry of attributeList){
              if(attributeData.caseInSensitive === true){
                if(convertNamedNodeMapToObject(this.attributes)[attributeData.name].value.toLowerCase() === attributeListEntry.toLowerCase()){
                  valueFound = true;
                }
              } else {
                if(convertNamedNodeMapToObject(this.attributes)[attributeData.name].value === attributeListEntry){
                  valueFound = true;
                }
              }
            }

            if(valueFound === false){
              continue selectorChainLoop;
            }

          } else if(beginFollowedByHyphenArray.length === 2){

            if(convertNamedNodeMapToObject(this.attributes)[beginFollowedByHyphenArray[0]] === undefined){
              continue selectorChainLoop;
            }

            const attributeValue = extractAttributeDataFromRegexMatch(beginFollowedByHyphenArray);

            if(attributeValue === undefined){
              continue selectorChainLoop;
            }

            if(attributeValue.caseInSensitive === true){
              if(convertNamedNodeMapToObject(this.attributes)[attributeValue.name].value.toLowerCase().startsWith(attributeValue.value.toLowerCase() + "-") !== true){
                continue selectorChainLoop;
              }
            } else {
              if(convertNamedNodeMapToObject(this.attributes)[beginFollowedByHyphenArray[0]].value.startsWith(attributeValue.value + "-") !== true){
                continue selectorChainLoop;
              }
            }

          } else if(prefixedByValueArray.length === 2){

            if(convertNamedNodeMapToObject(this.attributes)[prefixedByValueArray[0]] === undefined){
              continue selectorChainLoop;
            }

            const attributeValue = extractAttributeDataFromRegexMatch(prefixedByValueArray);

            if(attributeValue === undefined){
              continue selectorChainLoop;
            }

            if(attributeValue.caseInSensitive === true){
              if(convertNamedNodeMapToObject(this.attributes)[attributeValue.name].value.toLowerCase().startsWith(attributeValue.value.toLowerCase()) !== true){
                continue selectorChainLoop;
              }
            } else {
              if(convertNamedNodeMapToObject(this.attributes)[attributeValue.name].value.startsWith(attributeValue.value) !== true){
                continue selectorChainLoop;
              }
            }

          } else if(suffixedByValueArray.length === 2){

            if(convertNamedNodeMapToObject(this.attributes)[suffixedByValueArray[0]] === undefined){
              continue selectorChainLoop;
            }

            const attributeValue = extractAttributeDataFromRegexMatch(suffixedByValueArray);

            if(attributeValue === undefined){
              continue selectorChainLoop;
            }

            if(attributeValue.caseInSensitive === true){
              if(convertNamedNodeMapToObject(this.attributes)[attributeValue.name].value.toLowerCase().endsWith(attributeValue.value.toLowerCase()) !== true){
                continue selectorChainLoop;
              }
            } else {
              if(convertNamedNodeMapToObject(this.attributes)[attributeValue.name].value.endsWith(attributeValue.value) !== true){
                continue selectorChainLoop;
              }
            }

          } else if(containsValueArray.length === 2){

            if(convertNamedNodeMapToObject(this.attributes)[containsValueArray[0]] === undefined){
              continue selectorChainLoop;
            }

            const attributeValue = extractAttributeDataFromRegexMatch(containsValueArray);

            if(attributeValue === undefined){
              continue selectorChainLoop;
            }

            if(attributeValue.caseInSensitive === true){
              if(convertNamedNodeMapToObject(this.attributes)[attributeValue.name].value.toLowerCase().includes(attributeValue.value.toLowerCase()) !== true){
                continue selectorChainLoop;
              }
            } else {
              if(convertNamedNodeMapToObject(this.attributes)[attributeValue.name].value.includes(attributeValue.value) !== true){
                continue selectorChainLoop;
              }
            }

          } else if(exactValueArray.length === 2){

            if(convertNamedNodeMapToObject(this.attributes)[exactValueArray[0]] === undefined){
              continue selectorChainLoop;
            }

            const attributeValue = extractAttributeDataFromRegexMatch(exactValueArray);

            if(attributeValue === undefined){
              continue selectorChainLoop;
            }

            if(attributeValue.caseInSensitive === true){
              if(convertNamedNodeMapToObject(this.attributes)[attributeValue.name].value.toLowerCase() !== attributeValue.value.toLowerCase()){
                continue selectorChainLoop;
              }
            } else {
              if(convertNamedNodeMapToObject(this.attributes)[attributeValue.name].value !== attributeValue.value){
                continue selectorChainLoop;
              }
            }

          }

        }

        return true;

      }


      //-- Check selector chain

      if(selectorArray.length > 1){


        //-- Find root element and store indices that lead to the current element

        let rootNode: Node = this;
        const indices: number[] = [];

        while(rootNode.parentNode !== null){
          indices.unshift(rootNode.parentNode.childNodes.indexOf(rootNode));
          rootNode = rootNode.parentNode;
        }

        if(rootNode === this){
          return false;
        }

        if(rootNode.nodeType !== NodeType.ELEMENT_NODE){
          continue selectorChainLoop;
        }

        const rootElement = rootNode as SVGElement;


        //-- Go back from root element and check every element to match the parent selectors

        let currentSelector = selectorArray.shift();

        if(currentSelector === undefined){
          continue selectorChainLoop;
        }

        let currentElement = rootElement;

        let directChildFlag = false;
        let directSiblingFlag = false;
        let siblingFlag = false;

        while(currentElement && currentSelector){


          //-- Set flags

          if(currentSelector === ">"){
            directChildFlag = true;
            currentSelector = selectorArray.shift();
          }
          if(selectorArray[0] === "+"){
            directSiblingFlag = true;
            selectorArray.shift();
          } else if(selectorArray[0] === "~"){
            siblingFlag = true;
            selectorArray.shift();
          }

          if(currentSelector === undefined){
            continue selectorChainLoop;
          }


          //-- Check if siblings match

          siblingsCheck: if(siblingFlag === true || directSiblingFlag === true){

            let currentPreviousSibling = currentElement.previousElementSibling;

            if(currentPreviousSibling !== null){


              //-- Check if previous siblings match

              while(currentPreviousSibling !== null){
                if(currentPreviousSibling.matches(currentSelector)){
                  directSiblingFlag = false;
                  siblingFlag = false;
                  currentSelector = selectorArray.shift();
                  if(currentSelector === undefined){
                    return true;
                  }
                  break siblingsCheck;
                } else {
                  if(directSiblingFlag === true){
                    continue selectorChainLoop;
                  }
                  currentPreviousSibling = currentPreviousSibling.previousElementSibling;
                }
              }

            }

            continue selectorChainLoop;

          }

          if(currentElement.matches(currentSelector)){

            const nextChildIndex = indices.shift();

            if(nextChildIndex === undefined){
              if(currentElement === this){
                return true;
              } else {
                continue selectorChainLoop;
              }
            }

            currentSelector = selectorArray.shift();
            currentElement = currentElement.childNodes[nextChildIndex] as SVGElement;
            directChildFlag = false;

          } else {

            if(directChildFlag === true){
              continue selectorChainLoop;
            }

            const nextChildIndex = indices.shift();

            if(nextChildIndex === undefined){
              continue selectorChainLoop;
            }

            currentElement = currentElement.childNodes[nextChildIndex] as SVGElement;

          }
        }

      }

    }

    return false;

  }

}