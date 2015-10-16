$(document).ready(function(){
  console.log("ready")
  setView()
  $("#select-view > p > button.entrepreneur").on("click", loadEntrepreneurPage)
  $(".newideas").on("click", loadEarlyAdopterPage)
  $(".venture-capital").on("click", loadVentureCapitalPage)
  $('div#sosw').on("click", '.show-video-button', embedVideo)
  $('div#sosw').on("click", '.hide-video-button', hideVideo)

})

var setView = function(view){
  var view = view || $('div#sosw').attr("class")
  if (view == "guest"){ view = "early-adopter"}
  if (view == "entrepreneur"){
    entrepreneurAPIs()
  } else if (view == "venture-capital"){
    ventureCapitalAPIs()
  } else if (view == "early-adopter") {
    earlyAdopterAPIs()
  }
  $('div#' + view).toggle()
}

var setupTwitter = !function(d,s,id){
    var js,
    fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
      js=d.createElement(s);
      js.id=id;
      js.src=p+"://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js,fjs);
    }}(document,"script","twitter-wjs")

var loadEntrepreneurPage = function(){
  $('div#user-view div.select').hide()
  setView("entrepreneur")
}

var loadVentureCapitalPage = function(){
  $('div#user-view div.select').hide()
  setView("venture-capital")
}

var loadEarlyAdopterPage = function(){
  $('div#user-view div.select').hide()
  setView("early-adopter")
}

var getAPIs = function(view){
  if (view == "venture-capital") {
    var url = "https://www.kimonolabs.com/api/e8o30vy6?apikey=tNrHwUhcshyBMnTyYVc5zzku1xjKUq1x"
    $.ajax({
      url: url,
      dataType: "jsonp"
    }).done(function(response){
      console.log(response.results)
      $('.links').html(response.results.collection1[0].property1.src)
    }).fail( function(response){
      console.log("fail")
    })

  }
}
//ENTREPRENEURS
var entrepreneurAPIs = function() {
  $('.links').empty()
  var url = "https://www.kimonolabs.com/api/9n4bzlxy?apikey=tNrHwUhcshyBMnTyYVc5zzku1xjKUq1x"
  $.ajax({
    url: url,
    dataType: "jsonp"
  }).done(function(response){
    response.results.collection1.map( function(article){
      $('.links').append(
        "<a href = " + article.property1.href + ">" + article.property1.text + "</a> -- Entrepreneur <br>")
    })
  }).fail( function(response){
    console.log("fail")
  })

  var url2 = "https://www.kimonolabs.com/api/9yssd2gk?apikey=tNrHwUhcshyBMnTyYVc5zzku1xjKUq1x"
  $.ajax({
    url: url2,
    dataType: "jsonp"
  }).done(function(response){
    response.results.collection1.map( function(article){
      $('.links').html(
        "<a href='" + article.property1.href + "'>" + article.property1.text + "</a> -- Wired <br>")
    })
  }).fail( function(response){
    console.log("fail")
  })
}
//EARLY ADOPTERS
var earlyAdopterAPIs = function(){
  $('p.trending').empty()
  $('.links').empty()
  var url = "https://www.kimonolabs.com/api/636uo7py?apikey=tNrHwUhcshyBMnTyYVc5zzku1xjKUq1x"
  $.ajax({
    url: url,
    dataType: "jsonp"
  }).done(function(response){
    response.results.collection1.map(function(article){
      $('.links').append("<a href = '" + article.property4.href + "'>" + article.property4.text + "</a> -- TechCrunch <br>")
    })
  }).fail( function(response){
    console.log("fail")
  })

  var url2 = "https://www.kimonolabs.com/api/7xzs2zdm?apikey=tNrHwUhcshyBMnTyYVc5zzku1xjKUq1x"
  $.ajax({
    url: url2,
    dataType: "jsonp"
  }).done(function(response){
    console.log(response)
    response.results.collection1.map(function(trend){
      $('p.trending').append("| " + "<a href='https://twitter.com/search?src=typd&q=%23technology%20%23"+ trend.property1.text +"'>"+ trend.property1.text + "</a> | ")
    })
  })
}

var ventureCapitalAPIs = function(){
  stockWindow()
  $('.links').empty()
  var url = "https://www.kimonolabs.com/api/e8o30vy6?apikey=tNrHwUhcshyBMnTyYVc5zzku1xjKUq1x"
  $.ajax({
    url: url,
    dataType: "jsonp"
  })
  .done(function(response){
    response.results.collection1.map(function(article){
      $('.links').append("<a href = " + article.property1.href + ">" + article.property1.text + "</a> -- Entrepreneur <br>")
    })
  })

  var url2 = "https://www.kimonolabs.com/api/36rgqil8?apikey=tNrHwUhcshyBMnTyYVc5zzku1xjKUq1x"
  $.ajax({
    url: url2,
    dataType: "jsonp"
  })
  .done(function(response){
    var articles = response.results.collection1.slice(0,5)
    articles.map(function(article){
      $('.links').append("<a href = " + article.property1.href + ">" + article.property1.text + "</a> -- VC Daily <br>")
    })
  })
}

var stockWindow= function(){
  new TradingView.MiniWidget({
    "container_id": "tv-miniwidget-93ff8",
    "tabs": [
      "Equities",
      "Commodities",
      "Bonds",
      "Forex"
    ],
    "symbols": {
      "Equities": [
        ["S&P500","SPX500"],
        ["NQ100","NAS100"],
        ["Dow30","DOWI"],
        ["Nikkei225","JPN225"],
        ["Apple","AAPL "],
        ["Google","GOOG"]],
      "Commodities": [["Emini","ES1!"],
        ["Euro","E61!"],
        ["Gold","GC1!"],
        ["Oil","CL1!"],
        ["Gas","NG1!"],
        ["Corn","ZC1!"]
      ],
      "Bonds": [["US 2YR","TUZ2015"],
        ["US 10YR","TYZ2015"],
        ["US 30YR","US1!"],
        ["Euro Bund","FX:BUND"],
        ["Euro BTP","EUREX:II1!"],
        ["Euro BOBL","EUREX:HR1!"]],
      "Forex": ["FX:EURUSD","FX:GBPUSD","FX:USDJPY","FX:USDCHF","FX:AUDUSD","FX:USDCAD"]
    },
    "gridLineColor": "#E9E9EA",
    "fontColor": "#83888D",
    "underLineColor": "#dbeffb",
    "trendLineColor": "#4bafe9",
    "activeTickerBackgroundColor": "#EDF0F3",
    "large_chart_url": "https://www.tradingview.com/chart/",
    "noGraph": false
  });
}
