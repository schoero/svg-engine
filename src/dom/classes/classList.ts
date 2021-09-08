export default class ClassList extends Array {

  constructor() {
    super()
  }


  public add(className: string){
    this.unshift(className);
  }

  
  public remove(className: string){
    this.splice(this.indexOf(className), 1);
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
  }


  public contains(className: string): boolean {
    return this.includes(className);
  }

}