/**
 * Grid-light theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
	href: 'http://fonts.googleapis.com/css?family=Dosis:400,600',
	rel: 'stylesheet',
	type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
	colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
		"#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
		backgroundColor: null,
		style: {
			color: '#FFF',
			textShadow: 'none',
			fontFamily: "Dosis, sans-serif"
		}
	},
	title: {
		style: {
			color: '#FFF',
			textShadow: 'none',
			fontSize: '16px',
			fontWeight: 'bold',
			textTransform: 'uppercase'
		}
	},
	tooltip: {
		color: '#FFF',
		textShadow: 'none',
		borderWidth: 0,
		backgroundColor: 'rgba(219,219,216,0.8)',
		
	},
	legend: {
		itemStyle: {
			color: '#FFF',
			textShadow: 'none',
			fontWeight: 'bold',
			fontSize: '13px'
		}
	},
	xAxis: {
		gridLineWidth: 1,
		labels: {
			style: {
				color: '#FFF',
				textShadow: 'none',
				fontSize: '12px'
			}
		}
	},
	yAxis: {
		minorTickInterval: 'auto',
		title: {
			style: {
				color: '#FFF',
				textShadow: 'none',
				textTransform: 'uppercase'
			}
		},
		labels: {
			style: {
				color: '#FFF',
				textShadow: 'none',
				fontSize: '12px'
			}
		}
	},
	plotOptions: {
		candlestick: {
			color: '#FFF',
			textShadow: 'none',
			lineColor: '#404048'
		}
	},


	// General
	background2: '#F0F0EA'
	
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
