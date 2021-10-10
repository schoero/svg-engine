
export function convertNamedNodeMapToObject(atts: any): { [key: string]: { name: string, value: string }} {

  const obj = {};

  for(const key of Object.keys(atts)){
    obj[atts[key].name] = atts[key];
  }

  return obj;

}