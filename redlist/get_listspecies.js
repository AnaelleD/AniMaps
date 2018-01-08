get_listspecies = function(id_pays){
	var species = {};
	var queries = [];
	$('#ul').empty();
	var ul = document.getElementById("ul");
	var token = document.getElementById("itoken").value;
			
	var query_getspecies = "http://apiv3.iucnredlist.org/api/v3/country/getspecies/"+id_pays+"?token="+token; 

	fetch(query_getspecies).then(function(response) {
		return response.json().then(function(json) {
			var result = json.result;
			for(i=0;i<result.length;i++) {
				var scientific_name = result[i]["scientific_name"];
				var id_species = result[i]["taxonid"];
				var li = document.createElement("li");						
				li.innerHTML = '<a href="#/">'+scientific_name+'</a>'; 
				li.onclick = (function(i){
					return function(){
						var scientific_name_wiki = result[i]["scientific_name"].replace(" ","_");
						get_image(scientific_name_wiki);
						
						var selectedSpeciesName = result[i]["scientific_name"];
						var selectedSpeciesId = result[i]["taxonid"];
						get_infospecies(selectedSpeciesId,selectedSpeciesName);
					}
				})(i);
				ul.appendChild(li);									
			}
		})								
	})
}