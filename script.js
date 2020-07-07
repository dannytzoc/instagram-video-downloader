var apiacces = "?__a=1"
var x
var newurl
var videourl
var objectjson
function myfunction(){
 x = document.getElementById("urltext").value;
 console.log(x)
var n = x.search("\\?")// searches for the index of ?
var y = x.substr(0, n)
newurl = y.concat(apiacces);





var data=httpGet(newurl)
var jsonResponse = JSON.parse(data);
var objectjson= jsonResponse["graphql"]
var download = objectjson["shortcode_media"]
var download2 = download["edge_sidecar_to_children"]
if(download['edge_sidecar_to_children'])
var download3 = download2["edges"]
var download4= download3[0].node


var content = objectjson["shortcode_media"]
videourl = content["display_url"]


document.getElementById("json").poster = videourl;
document.getElementById("download").href = download4.video_url;

}
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );

    return xmlHttp.responseText;

}