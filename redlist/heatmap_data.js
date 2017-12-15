// Initialiser les données:
var data = [
	["gl", 0],["sh", 0],["bu", 0],["lk", 0],["as", 0],["dk", 0],["fo", 0],["gu", 0],["mp", 0],["um", 0],["us", 0],["vi", 0],["ca", 0],["st", 0],
	["jp", 0],["cv", 0],["dm", 0],["sc", 0],["nz", 0],["ye", 0],["jm", 0],["ws", 0],["om", 0],["in", 0],["vc", 0],["bd", 0],["sb", 0],["lc", 0],
	["fr", 0],["nr", 0],["no", 0],["fm", 0],["kn", 0],["cn", 0],["bh", 0],["to", 0],["fi", 0],["id", 0],["mu", 0],["se", 0],["tt", 0],["sw", 0],
	["br", 0],["bs", 0],["pw", 0],["ec", 0],["au", 0],["tv", 0],["mh", 0],["cl", 0],["ki", 0],["ph", 0],["gd", 0],["ee", 0],["ag", 0],["es", 0],
	["bb", 0],["it", 0],["mt", 0],["mv", 0],["sp", 0],["pg", 0],["vu", 0],["sg", 0],["gb", 0],["cy", 0],["gr", 0],["km", 0],["fj", 0],["ru", 0],
	["va", 0],["sm", 0],["am", 0],["az", 0],["ls", 0],["tj", 0],["ml", 0],["dz", 0],["tw", 0],["uz", 0],["tz", 0],["ar", 0],["sa", 0],["nl", 0],
	["ae", 0],["ch", 0],["pt", 0],["my", 0],["pa", 0],["tr", 0],["ir", 0],["ht", 0],["do", 0],["gw", 0],["hr", 0],["th", 0],["mx", 0],["kw", 0],
	["de", 0],["gq", 0],["cnm", 0],["nc", 0],["ie", 0],["kz", 0],["ge", 0],["pl", 0],["lt", 0],["ug", 0],["cd", 0],["mk", 0],["al", 0],	["ng", 0],
	["cm", 0],["bj", 0],["tl", 0],["tm", 0],["kh", 0],["pe", 0],["mw", 0],["mn", 0],["ao", 0],["mz", 0],["za", 0],["cr", 0],["sv", 0],["bz", 0],
	["co", 0],["kp", 0],["kr", 0],["gy", 0],["hn", 0],["ga", 0],["ni", 0],["et", 0],["sd", 0],["so", 0],["gh", 0],["ci", 0],["si", 0],["gt", 0],
	["ba", 0],["jo", 0],["sy", 0],["we", 0],["il", 0],["eg", 0],["zm", 0],["mc", 0],["uy", 0],["rw", 0],["bo", 0],["cg", 0],["eh", 0],["rs", 0],
	["me", 0],["tg", 0],["mm", 0],["la", 0],["af", 0],["jk", 0],["pk", 0],["bg", 0],["ua", 0],["ro", 0],["qa", 0],["li", 0],["at", 0],["sk", 0],
	["sz", 0],["hu", 0],["ly", 0],["ne", 0],["lu", 0],["ad", 0],["lr", 0],["sl", 0],["bn", 0],["mr", 0],["be", 0],["iq", 0],["gm", 0],["ma", 0],
	["td", 0],["kv", 0],["lb", 0],["sx", 0],["dj", 0],["er", 0],["bi", 0],["sn", 0],["gn", 0],["zw", 0],["py", 0],["by", 0],["lv", 0],["bt", 0],
	["na", 0],["bf", 0],["ss", 0],["cf", 0],["md", 0],["gz", 0],["ke", 0],["bw", 0],["cz", 0],["pr", 0],["tn", 0],["cu", 0],["vn", 0],["mg", 0],
	["ve", 0],["is", 0],["np", 0],["sr", 0],["kg", 0]];

// Requetes pour récupérer les données pour la map : 
get_heatmap_data = function(){
	var countrylist = {}; 
	var queries = []; 

	var query_getcountrylist = "http://apiv3.iucnredlist.org/api/v3/country/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"; 
	var query = new XMLHttpRequest();
	query.open("GET", query_getcountrylist, true);
	query.send(null);
	
	query.onreadystatechange = function() {
		if (query.readyState == XMLHttpRequest.DONE) {
			var json = JSON.parse(query.responseText);
			var result = json["results"];
			for(i=0;i<result.length;i++){
				var name = result[i]["country"];
				var isocode = result[i]["isocode"];
				countrylist[isocode] = name;
			}
			
		//console.log(countrylist); 
			var keys = Object.keys(countrylist);		

			for(i=0;i<keys.length;i++){
				var query_getcountrycount = "http://apiv3.iucnredlist.org/api/v3/country/getspecies/"+keys[i]+"?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"; 
				fetch(query_getcountrycount).then(function(response) {
					var contentType = response.headers.get("content-type");
					if(contentType && contentType.indexOf("application/json") !== -1) {
						return response.json().then(function(json) {;
							for(j=0;j<data.length;j++){
								if(data[j]["hc-key"] == json.country.toLowerCase()){
									data[j]["value"] = json.count;
									break;
								}
							}
						});
					} 
				});							
			}						
		}
	}
	console.log(data);
	return(data);
}