const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')
const { getURLsFromHTML } = require('./crawl.js')

test('normalizeURL strip protocal and slash at the end', ()=>{
    const input = 'https://wagslane.dev/'
    const actual = normalizeURL(input)
    const expected = 'wagslane.dev'
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

test('get all url in normalizes form', ()=>{
    const input = `
    <html>
        <body>
            <a href="https://wagslane.dev/path"> lane </a>
            <a href="http://wagslane.dev/path"> lane </a>
            <a href="https://WAGSLANE.dev/path"> lane </a>
            <a href="https://wagslane.dev/path/"> lane </a>
            <a href="/path/"> lane </a>
        </body>
    </html>`
    const actual = getURLsFromHTML(input,'https://wagslane.dev')
    const expected = ['wagslane.dev/path','wagslane.dev/path','wagslane.dev/path','wagslane.dev/path','wagslane.dev/path']
    expect(actual).toEqual(expected)
})







