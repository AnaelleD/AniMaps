
get_heatmap_data = function(){
	var countrylist = {}; 
	var queries = []; 
	var data = [];
	
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

		for(i=0;i<11;i++){ 
			var query_getcountrycount = "http://apiv3.iucnredlist.org/api/v3/country/getspecies/"+keys[i]+"?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"; 
			fetch(query_getcountrycount).then(function(response) {
				var contentType = response.headers.get("content-type");
				if(contentType && contentType.indexOf("application/json") !== -1) {
					return response.json().then(function(json) {
						data.push([json.country.toLowerCase(),json.count]); // toLowerCase sinon la map de marche pas
						});
					} 
				});							
			}					
		}	
	}
	return(data);
}