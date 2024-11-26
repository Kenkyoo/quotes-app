const apikey = "api_key=PtqjT6zPPhDa40sYxMz4OVIuwucXj2HS5izWCFb4";
const api_endpoint = "https://quotes.rest/";
const quote_day = "/qod";
fetch(`${api_endpoint}${quote_day}${apikey}`).then((response)=>response.json()).then((data)=>console.log(data));

//# sourceMappingURL=index.7c0ccee6.js.map
