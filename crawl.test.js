const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')


test('https://wagslane.dev/path/ to be wagslane.dev/path', () => {
    expect(normalizeURL("https://wagslane.dev/path/")).toBe("wagslane.dev/path");
  });
test('https://wagsLane.Dev/path to be wagslane.dev/path', () => {
    expect(normalizeURL("https://wagsLane.Dev/path")).toBe("wagslane.dev/path");
});
test('https://wagslane.dev/path to be wagslane.dev/path', () => {
    expect(normalizeURL("https://wagslane.dev/path")).toBe("wagslane.dev/path");
});
test('http://wagslane.dev/path to be wagslane.dev/path', () => {
    expect(normalizeURL("http://wagslane.dev/path")).toBe("wagslane.dev/path");
});





