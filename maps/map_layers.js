// ajoute la map au div "map"
			// var map = L.map('map');
			// // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); //marche
			// L.tileLayer('http://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png').addTo(map);
			// map.setView([43.65009,3.57468], 2);

			mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY3d3aWNoZWdyb2QiLCJhIjoiY2pha3RubXlkMzdnNjMybmk5ZGRnbGx4ciJ9.h8iFk0RfKBM3w3vZVFLbIg';
			// var map = new mapboxgl.Map({
			// container: 'map',
			// style: 'mapbox://styles/mapbox/streets-v10'
			// });

			var mapboxAccessToken = 'pk.eyJ1IjoibWFyY3d3aWNoZWdyb2QiLCJhIjoiY2pha3RubXlkMzdnNjMybmk5ZGRnbGx4ciJ9.h8iFk0RfKBM3w3vZVFLbIg';
			var map = L.map('map').setView([30, 30], 3);

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
			    id: 'mapbox.light'
			}).addTo(map);

			


			// function loadJSON(callback) {   

			//     var xobj = new XMLHttpRequest();
		 //        xobj.overrideMimeType("application/json");
			//     xobj.open('GET', 'us-states.json', true); // Replace 'my_data' with the path to your file
			//     xobj.onreadystatechange = function () {
			//     	alert("tre");
			//         if (xobj.readyState == 4 && xobj.status == "200") {
			//         	// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			// 			L.geoJson(statesData).addTo(map);
			// 			alert("test");
		 //        	    callback(xobj.responseText);
			//         }
			//     };
			//     xobj.send(null);  
		 // 	}
		 // 	loadJSON();

		 // 	request = new XMLHttpRequest(); //chrome, safari … but not IE
			// request.open('GET', 'us-states.json', true);
			// request.send(null);
			// L.geoJson(statesData).addTo(map);