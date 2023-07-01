const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')
const { getURLsFromHTML } = require('./crawl.js')

test('normalizeURL strip protocal', ()=>{
    const input = 'https://wagslane.dev/path'
    const actual = normalizeURL(input)
    const expected = 'wagslane.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL remove back slash from the end', ()=>{
    const input = 'https://wagslane.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'wagslane.dev/path'
    expect(actual).toEqual(expected)
})
test('normalizeURL capitals', ()=>{
    const input = 'https://WAGSLANE.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'wagslane.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL remove http', ()=>{
    const input = 'http://wagslane.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'wagslane.dev/path'
    expect(actual).toEqual(expected)
})







