
export default class NamedNodeMap extends Object {

  [key: number]: {
    name: string,
    value: string
  };

  constructor() {
    super();
  }


  public setNamedItem(name: string, value: string) {
    for(const key in this){
      if(this[key].name === name){
        this[key].value = value;
        return null;
      }
    }
    this[Object.keys(this).length] = {
      name: name,
      value: value
    };
  }


  public getNamedItem(name: string): { name: string, value: string } | null {
    for(const key in this){
      if(this[key].name === name){
        return this[key];
      }
    }
    return null;
  }


  public removeNamedItem(name: string): null {
    for(const key in this){
      if(this[key].name === name){
        delete this[key];
        return null;
      }
    }
    return null;
  }

}