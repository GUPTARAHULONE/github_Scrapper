const url ="https://github.com/topics"
const request = require("request");
const cheerio = require("cheerio");
const getReposPageHtml = require("./repopage");

request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        //console.log(html);
        extractLink(html);
    }
}

function extractLink (html)
{
    let $ = cheerio.load(html);
    let anchorElem= $(".no-underline.d-flex.flex-column.flex-justify-center")

    for(let i=0;i<anchorElem.length;i++)
    {
        let link=$(anchorElem[i]).attr("href")
      //  console.log(link);
        let fullLink=" https://github.com"+link;
       
        let topic = link.split("/").pop();
        //let fullLink = `https://github.com/${href}`;
        getReposPageHtml(fullLink, topic);
    }
   
}