// A. Dambreville //
get_image = function(){
	
	///// Récupérer le lien vers la page dbpedia principale de l'espece en partant de son nom scientifique /////
	var url = "http://dbpedia.org/sparql"; 
	var query_label_wiki = [
		 "PREFIX dbp: <http://dbpedia.org/resource/>",
		 "PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>",
		 "SELECT ?label_wiki",
		 "WHERE {dbp:Raphus_cucullatus dbpedia-owl:wikiPageRedirects ?label_wiki }"].join(" ");
	var query_label_wiki_Url = url+"?query="+ encodeURIComponent(query_label_wiki) +"&format=json"; // Requete SPARQL pour dbpedia
	
	// Requete HTTP avec l'Url pour récupérer le nom de la page principale de l'espece: 
	var Requete_label_wiki = new XMLHttpRequest();
	Requete_label_wiki.open("GET", query_label_wiki_Url, true);
	Requete_label_wiki.send(null);
	Requete_label_wiki.onreadystatechange = function() {
		if (Requete_label_wiki.readyState == XMLHttpRequest.DONE) {
			var json = JSON.parse(Requete_label_wiki.responseText);
			var label_wiki = json.results;
			label_wiki = label_wiki["bindings"][0]["label_wiki"]["value"];
			
			///// Récupérer l'image à partir de la page dbpedia principale de l'espece  /////
			var query_image = [
				"PREFIX foaf: <http://xmlns.com/foaf/0.1/>",
				"SELECT ?image WHERE {",
				["<",label_wiki,">"].join(""),
				"foaf:depiction ?image }"].join(" ");
			var query_image_Url = url+"?query="+ encodeURIComponent(query_image)+"&format=json"; // Requete SPARQL pour dbpedia
			
			// Requete HTTP avec l'Url pour récupérer l'image: 
			var Requete_image = new XMLHttpRequest();
			Requete_image.open("GET", query_image_Url, true);
			Requete_image.send(null);
			Requete_image.onreadystatechange = function() {
				if (Requete_image.readyState == XMLHttpRequest.DONE) {
					var json = JSON.parse(Requete_image.responseText);
					var image = json.results;
					image = image["bindings"][0]["image"]["value"];

					var image_wiki = document.getElementById('image_wiki');
					image_wiki.innerHTML = '<img src="' + image + '"/>';  // Lien vers le HTML
					//console.log(image_wiki);
				}
			}
		}
	}	
}