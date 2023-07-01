const normalizeURL = (url)=>{
    // Parse the URL
  const parsedURL = new URL(url);

  // Normalize the scheme and hostname
  let normalizedURL = `${parsedURL.hostname}${parsedURL.pathname}`;
  // normalizedURL = normalizedURL.replace(/\/$/, '');
  if(normalizedURL.length > 0 && normalizedURL.slice(-1) === '/'){
    return normalizedURL.slice(0,-1)
  }

  return normalizedURL;
}

const getURLsFromHTML = (htmlBody) =>{
  const jsdom = require('jsdom')
  const {JSDOM} = jsdom 
  const dom = new JSDOM(htmlBody)
  const linkElement = dom.window.document.querySelector('a');
  const link = linkElement.href;
  return htmlBody
  
}


module.exports = {
    normalizeURL,
    getURLsFromHTML
}
