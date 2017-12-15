
// FICHIER DE TEST ---- PAS UTILISE
function get_species(){
	console.log(selectedSpeciesName);
	console.log(selectedSpeciesId);
	var query_infospecies = "http://apiv3.iucnredlist.org/api/v3/country/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"; 
	var query = new XMLHttpRequest();
	query.open("GET", query_infospecies, true);
	query.send(null);
	
	query.onreadystatechange = function() {
		if (query.readyState == XMLHttpRequest.DONE) {
			var json = JSON.parse(query.responseText);
			var result = json["result"];
			var population = result[i]["Population"];
			var habitat = result[i]["Habitat"];
			var threats = result[i]["Threats"];
			var conservationMeasures = result[i]["ConservationMeasures"];
			}
			console.log(population);
			console.log(habitat);
			console.log(threats);
			console.log(conservationMeasures);
		}
		}

		
											fetch(query_infospecies).then(function(response) {
												var contentType = response.headers.get("content-type");
												if(contentType && contentType.indexOf("application/json") !== -1) {
												return response.json().then(function(json) {;
												for(j=0;j<infos.length;j++){
														infos[j]["Population"] = json.Population;
														infos[j]["Habitat"] = json.Habitat;
														infos[j]["Threats"] = json.Threats;
														infos[j]["ConservationMeasures"] = json.ConservationMeasures;
																}
															})
														}
													})
												}	