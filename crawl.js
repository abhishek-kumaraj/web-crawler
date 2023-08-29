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

const getURLsFromHTML = (htmlBody, baseURL) =>{
  const links = []
  const jsdom = require('jsdom')
  const {JSDOM} = jsdom 
  const dom = new JSDOM(htmlBody)
  const linkElement = dom.window.document.querySelectorAll('a');
  for(let i = 0; i< linkElement.length; i++){
    const url = linkElement[i].href
    if(url.slice(0,1)==='/'){
      const absoluteUrl = `${baseURL}${url}`
      links.push(normalizeURL(absoluteUrl))
    }
    else{
      links.push(normalizeURL(url))
    }
    
  }
  return links
  
}

async function crawlPage(baseUrl){
  try {
    const response = await fetch(baseUrl)
    const status = response.status;
    const contentType = response.headers.get('content-type')
    if(status>=400){
      console.log(status)
      return
    }
    if(contentType.includes('text/html')===false){
      console.log('not a html body')
      return
    }
    const htmlBody = await response.text()
    console.log('HTML body: ',htmlBody)
  } catch (error) {
    console.log('Error: ',error);
    
  }
}


module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
}
