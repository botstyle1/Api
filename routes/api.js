__path = process.cwd()
var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
 
var creator = "BYYSAYANG"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var cookie = require("cookie");
var FormData = require("form-data");
var request = require('request');
var zrapi = require("zrapi");
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');
var {
	Searchnabi,
	Gempa
} = require('./../lib');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./../lib/utils/photooxy");

var {
  igStalk,
  igDownload
} = require("./../lib/utils/ig");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { 
  Joox, 
  FB, 
  Tiktok
} = require("./../lib/utils/downloader");

var {
  Cuaca, 
  Lirik
} = require('./../lib/utils/information');

var {
  Base, 
  WPUser
} = require('./../lib/utils/tools');

var textpro = require("./../lib/utils/textpro");

var tebakGambar = require('./../lib/utils/tebakGambar');

var cookie = process.env.COOCKIE
/*
* @Pesan Error
*/
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter query'
        },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'emror bruh'
    }
}

/*
Akhir Pesan Error
*/

router.use(favicon(__path + "/views/favicon.ico"));

const listkey = ["benniismael", "administrataor"];

router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

// delete apikey

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey berhasil dihapus' 
});
 }
});

router.get('/music/joox', async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  
  if(listkey.includes(apikey)){
  Joox(query)
  .then((result) => {
  res.json(result)
    res.json(result)
  });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/music/spotify', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/spotify?apikey=alpin1&q=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/download/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/download/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/yt/playmp3", async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(res.sendFile(invalidKey))
    if(listkey.includes(apikey)){
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});

router.get("/yt/playmp4", async(req, res, next) => {

    const query = req.query.query;

    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(res.sendFile(invalidKey))
    if(listkey.includes(apikey)){
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});


router.get('/yt/search', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(res.sendFile(invalidKey))
    if(listkey.includes(apikey)){
    ytSearch(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
});

router.get('/download/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     Tiktok(url)
     .then((data) => {
       res.json(data)
     })
    } else {
res.json(loghandler.invalidKey)
}
})

router.get('/download/ig', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  igDownload(url)
    .then((data) => {
      result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        id: data.id,
        shortCode: data.shortCode,
        caption: data.caption,
        result: data.url
      }
      res.json(result)
    })
    .catch((err) => {
      res.json(err);
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/download/fb', async (req, res, next) => {

        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       FB(url)
       .then((data) => {
         res.json({
           status: true,
           code: 200,
           creator: `${creator}`,
           title: data.title,
           desc: data.deskripsi,
           durasi: data.durasi,
           thumb: data.thumbnail,
           result: data.hd
         })
       });
} else {
res.json(loghandler.invalidKey)
}
});

router.get('/stalk/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        username = req.query.username

	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
   } else {
res.json(loghandler.invalidKey)
}
})

router.get('/stalk/ig', async(req, res, next) => {
  const username = req.query.username;
  const apikey = req.query.apikey;
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  igStalk(username)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch((err) => {
      res.json(err);
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});


router.get('/infonpm', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/random/quotes', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/jadwal-bioskop', async(req, res, next) => {
var Apikey = req.query.apikey

if(!Apikey) return res.json(res.sendFile(invalidKey))
if(listkey.includes(Apikey)){
const { default: Axios } = require('axios')
const cheerio = require('cheerio')

Axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
     const $ = cheerio.load(data)
     let title = []
     let url = []
     let img = []
 	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
     res.json({
     creator:  `${creator}`,
     status: true,
     result: result
     })
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/short/tiny', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : `${body}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
   } else {
res.json(loghandler.invalidKey)
}
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		Apikey = req.query.apikey;
		if (!Apikey) return res.json(res.sendFile(invalidKey))
		if (listkey.includes(Apikey)){
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
	} else {
res.json(loghandler.invalidKey)
}
});

router.get('/tools/wpuser', async(req, res, next) => {
  const link = req.query.url;
  const apikey = req.query.apikey;
  
  if(!link) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  
  if(listkey.includes(apikey)) {
    WPUser(link)
    .then((data) => {
      res.json(data)
    })
} else {
  res.json(loghandler.invalidKey)
};
});

router.get('/info/cuaca', async(req, res, next) => {
  const apikey = req.query.apikey;
  const kota = req.query.kota;
  
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(!kota) return res.json({status: false, code: 406, message: 'masukkan parameter kota'})
  if(listkey.includes(apikey)) {
    Cuaca(kota)
    .then((data) => {
      res.json(data)
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/info/gempa', async (req, res, next) => {
	        var Apikey = req.query.apikey

		if (!Apikey) return res.json(res.sendFile(invalidKey))
		if (listkey.includes(Apikey)){
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})
router.get('/nickepep', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`))
 	   .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		Apikey = req.query.apikey;

		if (!Apikey) return res.json(res.sendFile(invalidKey))
		if (listkey.includes(Apikey)){
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/hadits', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
             res.json(
             data
             )
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/quran', async (req, res, next) => {
        var Apikey = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/wirid', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey

	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

	asmaul = JSON.parse(fs.readFileSync(__path +'/data/AsmaulHusna.json'));
	res.json(asmaul)
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/muslim/jadwalshalat', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/search/image', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  
  if(listkey.includes(apikey)){
    try {
        var options = {
            url: `http://results.dogpile.com/serp?qc=images&q=${query}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

  Cc = JSON.parse(fs.readFileSync(__path +'/data/CyberSpace.json'));
  const randCc = Cc[Math.floor(Math.random() * Cc.length)]
  data = await fetch(randCc).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/CyberSpace.jpeg', data)
  res.sendFile(__path +'/tmp/CyberSpace.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

const Techno = JSON.parse(fs.readFileSync(__path +'/data/Technology.json'))
const randTech = Techno[Math.floor(Math.random() * Techno.length)]
//tansole.log(randTech)
data = await fetch(randTech).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/techno.jpeg', data)
res.sendFile(__path +'/tmp/techno.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

  const Muslim = JSON.parse(fs.readFileSync(__path +'/data/Islamic.json'));
  const randMuslim = Muslim[Math.floor(Math.random() * Muslim.length)];
  data = await fetch(randMuslim).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/muslim.jpeg', data)
  res.sendFile(__path +'/tmp/muslim.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

  const Progam = JSON.parse(fs.readFileSync(__path +'/data/Programming.json'));
  const randProgam = Progam[Math.floor(Math.random() * Progam.length)];
  data = await fetch(randProgam).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/Programming.jpeg', data)
  res.sendFile(__path +'/tmp/Programming.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

  const Mount = JSON.parse(fs.readFileSync(__path +'/data/Mountain.json'));
  const randMount = Mount[Math.floor(Math.random() * Mount.length)];
  data = await fetch(randMount).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/Mountain.jpeg', data)
  res.sendFile(__path+ '/tmp/Mountain.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/anony', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/anony.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/joker', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/joker.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/wallpaper/cecans', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/cogans', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=cowokganteng`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/harley', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/harley.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quotes/muslim', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/slot', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI('https://api.xteam.xyz/game/virtualslot?APIKEY=benniismaelapikey'))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 slot: data.map,
                 hasil: data.hasil,
                 score: data.score,
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/suit', async (req, res, next) => {
        var Apikey = req.query.apikey,
            q = req.query.q
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!q) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel query"})

       fetch(encodeURI('https://api.xteam.xyz/game/suit?q=batu&APIKEY=benniismaelapikey'))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
                 hasil: data.hasil,
                 jawabanmu: data.jawabanmu,
                 jawabanbot: data.jawabanbot,
                 point: data.poin,
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wikipedia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/wiki?query=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/brainly', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.xteam.xyz/brainly?soal=${query}&APIKEY=benniismaelapikey`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 soal: data.soal,
                 jawaban: data.jawaban,
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wikipedia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/wiki?query=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/brainly', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.xteam.xyz/brainly?soal=${query}&APIKEY=benniismaelapikey`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 soal: data.soal,
                 jawaban: data.jawaban,
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/drakorasia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fakedata', async (req, res, next) => {
        var Apikey = req.query.apikey,
            country = req.query.country
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/cerpen', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://zekais-api.herokuapp.com/cerpen`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 cerita: data.result.ceritanya,
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/hilih', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/artinama', async (req, res, next) => {
        var Apikey = req.query.apikey,
            nama = req.query.nama
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})

       fetch(encodeURI(`https://api.zeks.xyz/api/artinama?apikey=alpin1234567&nama=${nama}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
                 arti: data.result,
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/artimimpi', async (req, res, next) => {
        var Apikey = req.query.apikey,
            mimpi = req.query.mimpi
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!mimpi) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter mimpi"})

       fetch(encodeURI(`https://api.zeks.xyz/api/artimimpi?apikey=alpin1234567&q=${mimpi}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
                 arti: data.result,
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/simsimi', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text

	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
       fetch(encodeURI(`https://rest-api.ytryo.my.id/api/sim-simi?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                author: 'BYYSAYANG',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/music/liriklagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.query;
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json(loghandler.notquery)
        Lirik(lagu)
        .then((lirik) => {
          res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: lirik.data
          })
        });
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/music/chordlagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.lagu
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/kbbi', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/covidindo', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/covidworld', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/meme', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/kodepos', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kota = req.query.kota
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/translate', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kata = req.query.kata
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/anime/husbu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/botstyle1/scrape-api/main/husbu.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/anime/loli', async(req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(res.sendFile(invalidKey))
    if(listkey.includes(apikey)){
    try {
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q= " + "Loli",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
    } else {
      res.json(loghandler.invalidKey)
    }
})

router.get('/anime/waifu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/botstyle1/scrape-api/main/waifu.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/anime/nekonime', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/botstyle1/scrape-api/main/neko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/anime/randomanime', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/botstyle1/scrape-api/main/random.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/nsfw/ahegao', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/nsfw/ass', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/ass.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/nsfw/bdsm', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/blowjob', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/kuis/caklontong', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/botstyle1/Menu-Api/main/caklontong.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/kuis/tebakGambar', async (req, res, next) => {
  var apikey = req.query.apikey;
  
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      creator: `${creator}`,
      image: result.img,
      jawaban: result.jawaban,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Emror'
    })
  }
  } else {
  res.json(loghandler.invalidKey)
  }
})


router.get('/kuis/tebakbendera', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/botstyle1/scrape-api/main/tebakbendera.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               results
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/kuis/family100', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/botstyle1/scrape-api/main/family100.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                results
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/kuis/siapakahaku', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/botstyle1/scrape-api/main/siapakahaku.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                results
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/kuis/tebaklirik', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/botstyle1/scrape-api/main/tebaklirik.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                results
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

/**
* @Maker
**/



router.get("/photooxy/shadow", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pShadow(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/romantic", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pRomantic(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

// @PHOTOOXY

router.get("/photooxy/smoke", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pSmoke(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/burn-papper", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pBurnPapper(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/naruto", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pNaruto(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/love-message", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pLoveMsg(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/message-under-grass", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pMsgGrass(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/glitch", async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pGlitch(text1, text2)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});



router.get("/photooxy/double-heart", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pDoubleHeart(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/coffe-cup", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pCoffeCup(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/love-text", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pLoveText(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/butterfly", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  pButterfly(text1)
  .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(loghandler.error)
    })
    } else {
    	res.json(loghandler.invalidKey)
    }
});

/*
@ AKHIR PHOTOOXY
*/
/*
@ TEXTPROME
*/
router.get('/textpro/neon', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/neon?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/lava', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/lava?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/helloween', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/helloweenfire?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/blackpink', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/blackpink?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/toxic', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/toxic?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/xmas', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/xmas3d?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/pornhub', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	text2 = req.query.text2
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})
  
      hasil = (`https://api.xteam.xyz/textpro/ph?text=${text}&text2=${text2}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/textpro/cloud', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/cloudtext?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/gradient', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/3dgradient?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/vintage', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	text2 = req.query.text2
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})
  
      hasil = (`https://api.xteam.xyz/textpro/realisticvintage?text=${text}&text2=${text2}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/pasir2', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/sandsummerbeach?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/pasir3', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/sandwriting?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/pasir', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/summerysandwriting?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/1997', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/1917?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/minion', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/minion3d?text=${text}&APIKEY=benniismaelapikey`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})




/*
@AKHIR TEXTPRO ME
*/

router.get('/maker/dadu', async (req, res, next) => {
  Apikey = req.query.apikey;

  if(!Apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(Apikey)) {
      random = Math.floor(Math.random() * 6) + 1
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/dadu.png', data)
        res.sendFile(__path+'/tmp/dadu.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/asupan', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(Apikey)) {
    const asupan = JSON.parse(fs.readFileSync(__path +'/data/asupan.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    let hasil = Asupan.asupan;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupan.mp4', data)
    res.sendFile(__path +'/tmp/asupan.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
});
 
router.get("/maker/nulis", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/nulis?text='+ text +'&apikey=apivinz' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/nulis.jpeg', data)
    res.sendFile(__path +'/tmp/nulis.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/ttp', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/ttp?file&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/maker/attp', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/attp?file&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/maker/harta-tahta', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/hartatahta?text='+ text +'&apikey=apivinz' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
  res.sendFile(__path +'/tmp/tahta.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/skatch', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://lindow-api.herokuapp.com/api/sketcheffect?img=${url}&apikey=LindowApi`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/skatch.jpeg', data)
        res.sendFile(__path+'/tmp/skatch.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/bakar', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://videfikri.com/api/textmaker/burneffect/?urlgbr=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/bakar.jpeg', data)
        res.sendFile(__path+'/tmp/bakar.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/trash', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/trash?url=${url}&apikey=OneDayOneCharity`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/trash.jpeg', data)
        res.sendFile(__path+'/tmp/trash.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/blur', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/blur?url=${url}&apikey=OneDayOneCharity`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/blur.jpeg', data)
        res.sendFile(__path+'/tmp/blur.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/invert', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://leyscoders-api.herokuapp.com/api/img/invert?url=${url}&apikey=OneDayOneCharity`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/invert.jpeg', data)
        res.sendFile(__path+'/tmp/invert.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/gtav', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gtav.jpeg', data)
        res.sendFile(__path+'/tmp/gtav.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/tololserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://lolhuman.herokuapp.com/api/toloserti?apikey=muzharzain&name=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tololserti.jpeg', data)
        res.sendFile(__path+'/tmp/tololserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/fuckboyserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://api.lolhuman.xyz/api/fuckboy?apikey=muzharzain&name=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/fuckboyserti.jpeg', data)
        res.sendFile(__path+'/tmp/fuckboy.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/fuckgirlserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://api.lolhuman.xyz/api/fuckgirl?apikey=muzharzain&name=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/fuckgirlserti.jpeg', data)
        res.sendFile(__path+'/tmp/fuckgirlserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/bucinserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://api.lolhuman.xyz/api/bucinserti?apikey=muzharzain&name=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/bucinserti.jpeg', data)
        res.sendFile(__path+'/tmp/bucinserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/pacarserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://api.lolhuman.xyz/api/pacarserti?apikey=muzharzain&name1=${text}&name2=${text}2`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/pacarserti.jpeg', data)
        res.sendFile(__path+'/tmp/pacarserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/goodboyserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://api.lolhuman.xyz/api/goodboy?apikey=muzharzain&name=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/goodboyserti.jpeg', data)
        res.sendFile(__path+'/tmp/goodboyserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/goodgirlserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://api.lolhuman.xyz/api/goodgirl?apikey=muzharzain&name=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/goodgirlserti.jpeg', data)
        res.sendFile(__path+'/tmp/goodgirlserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/badboyserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://api.lolhuman.xyz/api/badboy?apikey=muzharzain&name=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/badboyserti.jpeg', data)
        res.sendFile(__path+'/tmp/badboyserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/badgirlserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://api.lolhuman.xyz/api/badgirl?apikey=muzharzain&name=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/badgirlserti.jpeg', data)
        res.sendFile(__path+'/tmp/badgirlserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/hekelserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/HekerSerti/img.php?nama=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/hekelserti.jpeg', data)
        res.sendFile(__path+'/tmp/hekelserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/babuserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/BabuSerti/img.php?nama=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/babuserti.jpeg', data)
        res.sendFile(__path+'/tmp/babuserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/fflserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/EpepSerti/img.php?nama=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/ffserti.jpeg', data)
        res.sendFile(__path+'/tmp/ffserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/bocilepepserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/bocilepepserti.jpeg', data)
        res.sendFile(__path+'/tmp/bocilepepserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/gayserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/GaySerti/img.php?nama=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gayserti.jpeg', data)
        res.sendFile(__path+'/tmp/gayserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/gayserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/GaySerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/gayserti.jpeg', data)
        res.sendFile(__path+'/tmp/gayserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/sadboyserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/SadBoySerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/sadboyserti.jpeg', data)
        res.sendFile(__path+'/tmp/sadboyserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/surgaserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/SurgaSerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/surgaserti.jpeg', data)
        res.sendFile(__path+'/tmp/surgaserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/pinterserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/PinterSerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/pinterserti.jpeg', data)
        res.sendFile(__path+'/tmp/pinterserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/editodberkelasserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/editorberkelasserti.jpeg', data)
        res.sendFile(__path+'/tmp/editorberkelasserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/goodlookingserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/goodlookingserti.jpeg', data)
        res.sendFile(__path+'/tmp/gayserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/fucekboyserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/fucekboyserti.jpeg', data)
        res.sendFile(__path+'/tmp/fucekboyserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/jametserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/JametSerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/jametserti.jpeg', data)
        res.sendFile(__path+'/tmp/jametserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/youtuberserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/youtuberserti.jpeg', data)
        res.sendFile(__path+'/tmp/youtuberserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/jametserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/JametSerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/jametserti.jpeg', data)
        res.sendFile(__path+'/tmp/jametserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/fftourserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/FFSerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/fftourserti.jpeg', data)
        res.sendFile(__path+'/tmp/fftourserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/fftourserti2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/FFSerti2/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/fftourserti2.jpeg', data)
        res.sendFile(__path+'/tmp/fftourserti2.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/fftourserti3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/FFSerti3/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/fftourserti3.jpeg', data)
        res.sendFile(__path+'/tmp/fftourserti3.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/fftourserti4', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/FFSerti4/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/fftourserti4.jpeg', data)
        res.sendFile(__path+'/tmp/fftourserti4.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/fftourserti5', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/FFSerti5/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/fftourserti5.jpeg', data)
        res.sendFile(__path+'/tmp/fftourserti5.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/mltourserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/MLTourSerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/mltourserti.jpeg', data)
        res.sendFile(__path+'/tmp/mltourserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/mltourserti2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/mltourserti2.jpeg', data)
        res.sendFile(__path+'/tmp/mltourserti2.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/mltourserti3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/mltourserti3.jpeg', data)
        res.sendFile(__path+'/tmp/mltourserti3.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/mltourserti4', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/mltourserti4.jpeg', data)
        res.sendFile(__path+'/tmp/mltourserti4.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/mltourserti5', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/mltourserti5.jpeg', data)
        res.sendFile(__path+'/tmp/mltourserti5.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/pubgtourserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/pubgtourserti.jpeg', data)
        res.sendFile(__path+'/tmp/pubgtourserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/pubgtourserti2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/pubgtourserti2.jpeg', data)
        res.sendFile(__path+'/tmp/pubgtourserti2.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/pubgtourserti3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/pubgtourserti3.jpeg', data)
        res.sendFile(__path+'/tmp/pubgtourserti3.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/pubgtourserti4', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/pubgtourserti4.jpeg', data)
        res.sendFile(__path+'/tmp/pubgtourserti4.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/pubgtourserti5', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/pubgtourserti5.jpeg', data)
        res.sendFile(__path+'/tmp/pubgtourserti5.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/welcomeimage', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const url = req.query.url;
  if(!text) return res.json(loghandler.nottext)
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)){
  let hasil = `https://lolhuman.herokuapp.com/api/welcomeimage?apikey=muzharzain&img=${url}&text=${text}`
 	data = await fetch(hasil).then(v => v.buffer())
     await fs.writeFileSync(__path +'/tmp/welcomeimage.jpeg', data)
        res.sendFile(__path+'/tmp/welcomeimage.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/emoji2png', async(req, res, next) => {
  const apikey = req.query.apikey;
  const Emoji = req.query.text;
  
  if(!apikey) return jes.json(res.sendFile(invalidKey))
  if(!Emoji) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)) {
-
    emoji.get(Emoji)
    .then(img_emoji => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: img_emoji.images[0].url
      }
      res.json(result)
    })
  
    .catch((err) => {
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/web2plain-text', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(res.sendFile(invalidKey))
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://websitetextextraction.apifex.com/api/v1/extract?url=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(res.sendFile(invalidKey))
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      message: 'APIKEY ACTIVE'
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
