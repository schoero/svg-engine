import { strict as assert } from "assert";
import { SVG } from "../../lib/node/esm/index.js";

const svg = new SVG();
const rect = svg.addRect(10, 10);

rect.element.classList.add("foo", "bar");
assert.equal(rect.element.matches(".foo.bar"), true, "rect.element.matches('.foo.bar')");
rect.element.classList.add("baz");
assert.equal(rect.element.matches(".foo.bar.baz"), true, "rect.element.matches('.foo.bar.baz')");
rect.element.classList.remove("bar");
assert.equal(rect.element.matches(".foo.baz"), true, "rect.element.matches('.foo.baz')");
assert.equal(rect.element.matches(".foo.bar.baz"), false, "rect.element.matches('.foo.bar.baz')");
rect.element.classList.value = "test";
assert.equal(rect.element.matches(".test"), true, "rect.element.matches('.test')");
assert.equal(rect.element.matches(".foo"), false, "rect.element.matches('.foo')");