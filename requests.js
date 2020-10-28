let apiKey = "677a37fe22msh245d997faf24bc1p1fd6d4jsn758c3d4122f2";

axios(`https://unogsng.p.rapidapi.com/search?rapidapi-key=${apiKey}`, 
{"params":{
    "start_year":"2000",
    "orderby":"rating",
    "limit":"100",
    "audio":"english",
    "offset":"0",
    "end_year":"2020"}
    }).then((response)=>{
      console.log(response.data.results);
    }).catch((error)=>{
      console.log(error);
    })