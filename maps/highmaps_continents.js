
//data_map = get_heatmap_data();
//console.log(data_map);

// data_map est modifié par des fonctions internes de highcharts. Avec nos données ça ne marche pas, il les ajoute juste a la fin.
// Quand ça marche il remplace comme il faut les valeurs. Essaie avec le data map du dessous : 
//data_map=[["fr",1000],["en",200]]; OK avec ça ça marche

data_map=[["fr",1000],["en",200],["gl",7]];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
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
									var li = document.createElement("li");
									li.appendChild(document.createTextNode(scientific_name));
									ul.appendChild(li);
									}				
								}	
								
							};
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
	'rgba(255,0,0,0.2)', 'rgba(255,0,0,0.4)', 'rgba(255,0,0,0.5)', 
	'rgba(255,0,0,0.6)', 'rgba(255,0,0,0.8)', 'rgba(255,0,0,1)'],
				
    colorAxis: {
                dataClassColor: 'category',
                dataClasses: [{
                    to: 3
                }, {
                    from: 3,
                    to: 10
                }, {
                    from: 10,
                    to: 30
                }, {
                    from: 30,
                    to: 100
                }, {
                    from: 100,
                    to: 300
                }, {
                    from: 300,
                    to: 1000
                }, {
                    from: 1000
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

