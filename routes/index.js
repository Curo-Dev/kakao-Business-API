const express = require('express');
const router = express.Router();

const cheerio = require('cheerio');
const request = require('request-promise');

router.post('/count', function(req, res, next) {    
  const { id } = req.body;  
  
  if(!id) { res.json({ "code" : 100 }); return }  // ID is Not Found
  
  const o = {
    uri: `https://pf.kakao.com/${id}`,
    transform: function (body) {
        return cheerio.load(body);
    }
  };

  request(o).then(($) => {
    const parse = $("#mArticle > div:nth-child(2) > div > div.desc_info > em > span")[0].children[0].data;    
    const count = parseInt(parse.replace(/,/g, ""));                
    res.json({ "code" : 200 , "count" : count }); // Success
    return;
  }).catch((err) => {
    res.json({ "code" : 101 }); return; // ID is Wrong  
  })
});

module.exports = router;