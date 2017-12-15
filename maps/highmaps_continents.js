// data_map = get_heatmap_data();
// get_heatmap_data() est dans le script heatmap_data.js. Ce script contient la requete pour avoir les données pour la heat map.
// Nous avons eu beaucoup de problèmes pour transférer directement les données de la requête Redlist à la map.
// Donc nous avons décidé de mettre les résultats de la requête en dur dans data_map: 
data_map = [[ "gl", 525 ], [ "sh", 814 ], [ "bu", 0 ], [ "lk", 3217 ], [ "as", 1346 ], [ "dk", 1329 ], [ "fo", 556 ], [ "gu", 1377 ], [ "mp", 1423 ], [ "um", 1275 ], [ "us", 10004 ], [ "vi", 1413 ], [ "ca", 3235 ], [ "st", 1026 ], [ "jp", 4593 ], [ "cv", 1227 ], [ "dm", 1478 ], [ "sc", 2226 ], [ "nz", 1688 ], [ "ye", 2622 ], [ "jm", 2056 ], [ "ws", 1494 ], [ "om", 1848 ], [ "in", 7207 ], [ "vc", 1429 ], [ "bd", 2149 ], [ "sb", 2644 ], [ "lc", 1428 ], [ "fr", 3574 ], [ "nr", 1154 ], [ "no", 1363 ], [ "fm", 1954 ], [ "kn", 1342 ], [ "cn", 7425 ], [ "bh", 764 ], [ "to", 1516 ], [ "fi", 1134 ], [ "id", 8864 ], [ "mu", 1924 ], [ "se", 1425 ], [ "tt", 2149 ], [ "sw", 0 ], [ "br", 6871 ], [ "bs", 1974 ], [ "pw", 2153 ], [ "ec", 7350 ], [ "au", 7528 ], [ "tv", 1221 ], [ "mh", 1492 ], [ "cl", 1885 ], [ "ki", 1405 ], [ "ph", 5204 ], [ "gd", 1381 ], [ "ee", 864 ], [ "ag", 1430 ], [ "es", 4595 ], [ "bb", 1452 ], [ "it", 3467 ], [ "mt", 982 ], [ "mv", 1455 ], [ "sp", 0 ], [ "pg", 4981 ], [ "vu", 2005 ], [ "sg", 2597 ], [ "gb", 2004 ], [ "cy", 1147 ], [ "gr", 3169 ], [ "km", 1519 ], [ "fj", 2357 ], [ "ru", 2927 ], [ "va", 44 ], [ "sm", 107 ], [ "am", 891 ], [ "az", 1008 ], [ "ls", 581 ], [ "tj", 718 ], [ "ml", 1310 ], [ "dz", 1694 ], [ "tw", 3732 ], [ "uz", 801 ], [ "tz", 6107 ], [ "ar", 3067 ], [ "sa", 2023 ], [ "nl", 1431 ], [ "ae", 1194 ], [ "ch", 1563 ], [ "pt", 3045 ], [ "my", 6456 ], [ "pa", 4428 ], [ "tr", 2706 ], [ "ir", 2221 ], [ "ht", 1808 ], [ "do", 1884 ], [ "gw", 1883 ], [ "hr", 2141 ], [ "th", 5790 ], [ "mx", 7586 ], [ "kw", 867 ], [ "de", 1958 ], [ "gq", 2116 ], [ "cnm", 0 ], [ "nc", 3144 ], [ "ie", 1408 ], [ "kz", 1224 ], [ "ge", 1094 ], [ "pl", 1487 ], [ "lt", 879 ], [ "ug", 2684 ], [ "cd", 5069 ], [ "mk", 1302 ], [ "al", 1798 ], [ "ng", 3506 ], [ "cm", 4309 ], [ "bj", 2211 ], [ "tl", 1170 ], [ "tm", 851 ], [ "kh", 2841 ], [ "pe", 5437 ], [ "mw", 1971 ], [ "mn", 845 ], [ "ao", 3318 ], [ "mz", 3926 ], [ "za", 4746 ], [ "cr", 4098 ], [ "sv", 1931 ], [ "bz", 2365 ], [ "co", 7043 ], [ "kp", 1092 ], [ "kr", 1640 ], [ "gy", 2571 ], [ "hn", 3573 ], [ "ga", 2876 ], [ "ni", 3350 ], [ "et", 2105 ], [ "sd", 2695 ], [ "so", 2817 ], [ "gh", 2930 ], [ "ci", 2839 ], [ "si", 1865 ], [ "gt", 3391 ], [ "ba", 1513 ], [ "jo", 1659 ], [ "sy", 1429 ], [ "we", 0 ], [ "il", 2276 ], [ "eg", 2382 ], [ "zm", 2379 ], [ "mc", 495 ], [ "uy", 1260 ], [ "rw", 1438 ], [ "bo", 3108 ], [ "cg", 2614 ], [ "eh", 1101 ], [ "rs", 1468 ], [ "me", 1634 ], [ "tg", 2248 ], [ "mm", 4496 ], [ "la", 2416 ], [ "af", 1059 ], [ "jk", 0 ], [ "pk", 2155 ], [ "bg", 1797 ], [ "ua", 1634 ], [ "ro", 1719 ], [ "qa", 750 ], [ "li", 697 ], [ "at", 1746 ], [ "sk", 1307 ], [ "sz", 1042 ], [ "hu", 1406 ], [ "ly", 1076 ], [ "ne", 1006 ], [ "lu", 830 ], [ "ad", 471 ], [ "lr", 2367 ], [ "sl", 2497 ], [ "bn", 1793 ], [ "mr", 1803 ], [ "be", 1380 ], [ "iq", 1260 ], [ "gm", 1929 ], [ "ma", 2388 ], [ "td", 1133 ], [ "kv", 0 ], [ "lb", 1280 ], [ "sx", 1118 ], [ "dj", 1603 ], [ "er", 1905 ], [ "bi", 1564 ], [ "sn", 2469 ], [ "gn", 2691 ], [ "zw", 1863 ], [ "py", 1387 ], [ "by", 841 ], [ "lv", 941 ], [ "bt", 1284 ], [ "na", 2359 ], [ "bf", 1047 ], [ "ss", 1389 ], [ "cf", 1745 ], [ "md", 714 ], [ "gz", 0 ], [ "ke", 4657 ], [ "bw", 1357 ], [ "cz", 1419 ], [ "pr", 1884 ], [ "tn", 1425 ], [ "cu", 2447 ], [ "vn", 5169 ], [ "mg", 4927 ], [ "ve", 4649 ], [ "is", 760 ], [ "np", 2007 ], [ "sr", 2352 ], [ "kg", 718 ]]

// Create the chart
Highcharts.mapChart('container', {
    chart: {
		backgroundColor: null,
        map: 'custom/world'
    },

    title: {
        text: ''
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
	
	plotOptions:{
        	series:{
            	point:{
                	events:{
                    	click: function(){
						   
                        	var id_pays = this["hc-key"];
							var species = {};
							var queries = [];
							var ul = document.getElementById("ul");
							
							var query_getspecies = "http://apiv3.iucnredlist.org/api/v3/country/getspecies/"+id_pays+"?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"; 
							var query = new XMLHttpRequest();
							query.open("GET", query_getspecies, true);
							query.send(null);
							
							query.onreadystatechange = function() {
							if (query.readyState == XMLHttpRequest.DONE) {
								var json = JSON.parse(query.responseText);
								var result = json["result"];
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
											var query_infospecies = "http://apiv3.iucnredlist.org/api/v3/species/narrative/id/"+selectedSpeciesId+"?token=c708be0c4f48fe00f49303fa23fd85fead705bf151cf4c14add14a5a7d833f68"; 
												fetch(query_infospecies).then(function(response) {
													return response.json().then(function(json) {
														console.log(json);
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
									})(i);
									ul.appendChild(li);									
								}
							}								
                        }
                    }
                }
            }
        }
	},
	
	legend: {
                title: {
                    text: 'Nombre d\'espèces en danger'
                },
                align: 'left',
                verticalAlign: 'bottom',
                floating: true,
                layout: 'vertical',
                valueDecimals: 0,
                backgroundColor: 'rgba(255,255,255,0.9)',
                symbolRadius: 0,
                symbolHeight: 14
            },
			
	colors: [ 'rgba(255,0,0,0.1)', 
	'rgba(255,0,0,0.2)', 'rgba(255,0,0,0.4)', 
	'rgba(255,0,0,0.6)', 'rgba(255,0,0,0.8)', 'rgba(255,0,0,1)'],
				
    colorAxis: {
                dataClassColor: 'category',
                dataClasses: [ {
                    from: 0,
                    to: 1000
                }, {
                    from: 1000,
                    to: 2000
                }, {
                    from: 2000,
                    to: 3000
                }, {
                    from: 3000,
                    to: 4000
                }, {
                    from: 4000,
                    to: 5000
                }, {
                    from: 5000
                }]
            },

    series: [{
        data: data_map,
        name: 'Nombre d\'espèce en danger',
        states: {
            hover: {
				borderColor: '#303030',
				borderWidth: 2
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});

