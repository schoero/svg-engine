//@ts-check
import { strict as assert } from "assert";
import { SVG } from "../../lib/node/esm/index.js";


/*
  svg
   |
g.group1#group1 --
     |             |
rect.rect-1    g.group-2#group2
              |       |        |
       g.group-3  circle   g.group-4[data-id="attr-4"]
                               |
                           rect.rect-2

*/


const svg = new SVG();
const group1 = svg.addGroup().id("group1").addClass("group-1");
const rect1 = group1.addRect().addClass("rect-1");
const group2 = group1.addGroup().id("group2").addClass("group-2");
const group3 = group2.addGroup().addClass("group-3");
const circle = group2.addCircle();
const group4 = group2.addGroup().addClass("group-4").attr("data-id", "attr-4");
const rect2 = group4.addRect().addClass("rect-2");

assert.equal(rect2.element.matches("svg g g g rect"), true, "rect2.element.matches('svg g g g rect')");
assert.equal(rect2.element.matches("svg g > g g rect"), true, "rect2.element.matches('svg g > g g rect')");
assert.equal(rect2.element.matches("svg .group-1 g g rect"), true, "rect2.element.matches('svg .group-1 g g rect')");
assert.equal(rect2.element.matches("svg .group-1 #group2 g rect"), true, "rect2.element.matches('svg .group-1 #group2 g rect')");
assert.equal(rect2.element.matches("svg g.group-1#group1 #group2 g rect"), true, "rect2.element.matches('svg g.group-1#group1 #group2 g rect')");
assert.equal(rect2.element.matches("svg g.group-1#group1 > #group2 g rect"), true, "rect2.element.matches('svg g.group-1#group1 > #group2 g rect')");
assert.equal(rect2.element.matches("svg g.group-1#group1 > #group4 rect"), false, "rect2.element.matches('svg g.group-1#group1 > #group4 rect')");
assert.equal(rect2.element.matches("svg g.group-1#group1 #group2 > g ~ g rect"), true, "rect2.element.matches('svg g.group-1#group1 #group2 > g ~ g rect')");
assert.equal(rect2.element.matches("svg g.group-1#group1 #group2 > g + g rect"), false, "rect2.element.matches('svg g.group-1#group1 #group2 > g + g rect')");
assert.equal(rect2.element.matches("svg g.group-1#group1 #group2 > circle + g rect"), true, "rect2.element.matches('svg g.group-1#group1 #group2 > circle + g rect')");
assert.equal(rect2.element.matches("g.group-1#group1 #group2 > circle + g rect"), true, "rect2.element.matches('g.group-1#group1 #group2 > circle + g rect')");
assert.equal(rect2.element.matches("g.group-1#group1 rect"), true, "rect2.element.matches('g.group-1#group1 rect')");
assert.equal(rect2.element.matches("svg g.group-1#wrongid #group2 > circle + g rect"), false, "rect2.element.matches('svg g.group-1#wrongid #group2 > circle + g rect')");
assert.equal(rect2.element.matches("svg g g g[data-id='attr-4'] rect"), true, "rect2.element.matches(\"svg g g g[data-id='attr-4'] rect\")");
assert.equal(rect2.element.matches("svg g g g[data-id^='at'] rect"), true, "rect2.element.matches(\"svg g g g[data-id^='at'] rect\")");
assert.equal(rect2.element.matches("svg g g g[data-id*='tTr' i] rect"), true, "rect2.element.matches(\"svg g g g[data-id*='tTr' i] rect\")");
assert.equal(rect2.element.matches("svg g g g[data-id='attr-5'] rect"), false, "rect2.element.matches(\"svg g g g[data-id='attr-5'] rect\")");
