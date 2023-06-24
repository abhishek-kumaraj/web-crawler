const normalizeURL = (url)=>{
    // Parse the URL
  const parsedURL = new URL(url);

  // Normalize the scheme and hostname
  let normalizedURL = `${parsedURL.hostname}${parsedURL.pathname}`;
  normalizedURL = normalizedURL.replace(/\/$/, '');

  return normalizedURL;
}

// const url1 = 'https://wagslane.dev/path/';
// const url2 = 'https://wagsLane.Dev/path';
// const url3 = 'https://wagslane.dev/path';
// const url4 = 'http://wagslane.dev/path';

// console.log(normalizeURL(url1)); // Output: wagslane.dev/path
// console.log(normalizeURL(url2)); // Output: wagslane.dev/path
// console.log(normalizeURL(url3)); // Output: wagslane.dev/path
// console.log(normalizeURL(url4));



module.exports = {
    normalizeURL
}
