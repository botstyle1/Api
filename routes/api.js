router.get('/textpro/neon', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(router.get('/textpro/neon', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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


router.get('/slot', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
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

router.get('/tebakhuruf', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI('https://api.xteam.xyz/game/tebakangka?q=8&APIKEY=benniismaelapikey'))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
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

router.get('/suit', async (req, res, next) => {
        var Apikey = req.query.apikey,
            q = req.query.q
            
	if(!Apikey) return res.sendFile(invalidKey)
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
}))){
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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
	
	if(!Apikey) return res.sendFile(invalidKey)
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


router.get('/slot', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
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

router.get('/tebakhuruf', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI('https://api.xteam.xyz/game/tebakangka?q=8&APIKEY=benniismaelapikey'))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
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

router.get('/suit', async (req, res, next) => {
        var Apikey = req.query.apikey,
            q = req.query.q
            
	if(!Apikey) return res.sendFile(invalidKey)
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
