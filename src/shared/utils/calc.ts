
export function calc(expression: string, unit: "cm" | "mm" | "in" | "pt" | "pc" | "px" = "px"): number {

  const expressionWithoutUnits = convertAbsoluteUnitsInStringToPixels(expression);
  const sanitizedExpression = expressionWithoutUnits.replace(/[^-()\d/*+.]/g, "");
  const result = +eval(sanitizedExpression);

  switch (unit){
    case "cm":
      return px2cm(result);
    case "mm":
      return px2mm(result);
    case "in":
      return px2in(result);
    case "pt":
      return px2pt(result);
    case "pc":
      return px2pc(result);
    case "px":
      return result;
  }

}


function convertAbsoluteUnitsInStringToPixels(value: string) {

  const replaceAt = (content: string, search: string, index: number, replace: string) => {
    return content.substr(0, index) + replace + content.substr(index + search.length);
  };

  const regex = /(-?\d*\.?\d+)(mm|cm|in|pt|pc|px)+/g;

  let match: RegExpExecArray | null;

  while((match = regex.exec(value)) !== null){

    switch (match[2]){
      case "cm":
        value = replaceAt(value, match[0], match.index, cm2px(+match[1]) + "");
        break;
      case "mm":
        value = replaceAt(value, match[0], match.index, mm2px(+match[1]) + "");
        break;
      case "in":
        value = replaceAt(value, match[0], match.index, in2px(+match[1]) + "");
        break;
      case "pt":
        value = replaceAt(value, match[0], match.index, pt2px(+match[1]) + "");
        break;
      case "pc":
        value = replaceAt(value, match[0], match.index, pc2px(+match[1]) + "");
        break;
      case "px":
        value = replaceAt(value, match[0], match.index, +match[1] + "");
        break;
    }

  }

  return value;

}


export function cm2px(centimeters: number): number {
  return centimeters * 9600 / 254;
}

export function px2cm(pixels: number): number {
  return pixels * 254 / 9600;
}

export function mm2px(millimeters: number): number {
  return millimeters * 960 / 254;
}

export function px2mm(pixels: number): number {
  return pixels * 254 / 960;
}

export function in2px(inches: number): number {
  return inches * 960;
}

export function px2in(pixels: number): number {
  return pixels / 960;
}

export function pt2px(points: number): number {
  return points * 4 / 3;
}

export function px2pt(pixels: number): number {
  return pixels / 4 * 3;
}

export function pc2px(picas: number): number {
  return picas * 16;
}

export function px2pc(pixels: number): number {
  return pixels / 16;
}


//-- cm

export function mm2cm(millimeters: number): number {
  return px2cm(mm2px(millimeters));
}

export function in2cm(inches: number): number {
  return px2cm(in2px(inches));
}

export function pt2cm(points: number): number {
  return px2cm(pt2px(points));
}

export function pc2cm(picas: number): number {
  return px2cm(pc2px(picas));
}


//-- mm

export function cm2mm(centimeters: number): number {
  return px2mm(cm2px(centimeters));
}

export function in2mm(inches: number): number {
  return px2mm(in2px(inches));
}

export function pt2mm(points: number): number {
  return px2mm(pt2px(points));
}

export function pc2mm(picas: number): number {
  return px2mm(pc2px(picas));
}


//-- in

export function cm2in(centimeters: number): number {
  return px2in(cm2px(centimeters));
}

export function mm2in(millimeters: number): number {
  return px2in(mm2px(millimeters));
}

export function pt2in(points: number): number {
  return px2in(pt2px(points));
}

export function pc2in(picas: number): number {
  return px2in(pc2px(picas));
}


//-- pt

export function cm2pt(centimeters: number): number {
  return px2pt(cm2px(centimeters));
}

export function mm2pt(millimeters: number): number {
  return px2pt(mm2px(millimeters));
}

export function in2pt(inches: number): number {
  return px2pt(in2px(inches));
}

export function pc2pt(picas: number): number {
  return px2pt(pc2px(picas));
}


//-- pc

export function cm2pc(centimeters: number): number {
  return px2pc(cm2px(centimeters));
}

export function mm2pc(millimeters: number): number {
  return px2pc(mm2px(millimeters));
}

export function in2pc(inches: number): number {
  return px2pc(in2px(inches));
}

export function pt2pc(picas: number): number {
  return px2pc(pt2px(picas));
}