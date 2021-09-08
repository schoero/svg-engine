
export default class Style extends Object {

  [key: string]: string | Function;

  constructor() {
    super();
  }


  public setProperty(propertyName: string, value: string, priority?: "important" | "" | undefined){
    if(priority === "important") {
      this[propertyName] = value + "!important";
    } else {
      this[propertyName] = value;
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