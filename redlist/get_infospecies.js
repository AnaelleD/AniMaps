get_infospecies = function(selectedSpeciesId,selectedSpeciesName){
	var query_infospecies = "http://apiv3.iucnredlist.org/api/v3/species/narrative/id/"+selectedSpeciesId+"?token=c708be0c4f48fe00f49303fa23fd85fead705bf151cf4c14add14a5a7d833f68"; 
	fetch(query_infospecies).then(function(response) {
		return response.json().then(function(json) {
			//console.log(json);
			var result = json.result;
			var population = result[0]["population"];
			var threats = result[0]["threats"];
			var populationtrend = result[0]["populationtrend"];
			var conservationmeasures = result[0]["conservationmeasures"];
			var geographicrange = result[0]["geographicrange"];
			var habitat = result[0]["habitat"];
			
			var nomCommun = document.getElementById('nomCommun');
			nomCommun.innerHTML = "";
			
			var populationContainer = document.getElementById('populationContainer');
			populationContainer.innerHTML = '<p>Population : <br />'+population+'</p>';
			
			var populationTrendContainer = document.getElementById('populationTrendContainer');
			populationTrendContainer.innerHTML = '<p>Population trend : <br />'+populationtrend+'</p>';
			
			var nomScientifique = document.getElementById('nomScientifique');
			nomScientifique.innerHTML = selectedSpeciesName;
			
			var mesuresConservations = document.getElementById('mesuresConservations');
			mesuresConservations.innerHTML = '<p>Conservations measures : <br />'+conservationmeasures+'</p>';
			
			var habitatContainer = document.getElementById('habitatContainer');
			habitatContainer.innerHTML = '<p>Habitat : <br />'+habitat+'</p>';
			
			var geographicrangeContainer = document.getElementById('geographicrangeContainer');
			geographicrangeContainer.innerHTML = '<p>Geaographic range : <br />'+geographicrange+'</p>';
			
			var menaces = document.getElementById('menaces');
			menaces.innerHTML = '<p>Threats : <br />'+threats+'</p>';
			
		})
	})
}