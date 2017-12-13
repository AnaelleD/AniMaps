data = get_heatmap();

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
							document.getElementById("listeID").innerHTML = id_pays;
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
        data: data,
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