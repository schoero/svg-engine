import { strict as assert } from "assert";
import { SVG } from "../../lib/node/esm/index.js";

const svg = new SVG();
const rect = svg.addRect(10, 10);

rect.element.classList.add("foo", "bar");
assert.equal(rect.element.classList.contains("foo") && rect.element.classList.contains("bar"), true, "rect.element.classList.contains('foo') && rect.element.classList.contains('bar')");
rect.element.classList.add("baz");
assert.equal(rect.element.classList.contains("foo") && rect.element.classList.contains("bar") && rect.element.classList.contains("baz"), true, "rect.element.classList.contains('foo') && rect.element.classList.contains('bar') && rect.element.classList.contains('baz')");
rect.element.classList.remove("bar");
assert.equal(rect.element.classList.contains("foo") && rect.element.classList.contains("baz"), true, "rect.element.classList.contains('foo') && rect.element.classList.contains('baz')");
assert.equal(rect.element.classList.contains("foo") && !rect.element.classList.contains("bar") && rect.element.classList.contains("baz"), true, "rect.element.classList.contains('foo') && !rect.element.classList.contains('bar') && rect.element.classList.contains('baz')");
rect.element.classList.value = "test";
assert.equal(rect.element.classList.contains("test"), true, "rect.element.classList.contains('test')");
assert.equal(rect.element.classList.contains("foo"), false, "rect.element.classList.contains('foo')");