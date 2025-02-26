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