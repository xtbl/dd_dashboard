/**
 * DiDi Analytics Graphs
 * dependencies:
 *  morris.js
 */

var DiDiAnalyticsCharts = {
    settings: {
        lineGraphEl: "analytics-grafico-lineas",
        barGraphEl: "analytics-grafico-barras",
        colors: ['#93c23e', '#2681a7', '#ba131a', '#808285'] // DiDi colors
    },
    lineChartInit: function() {
        Morris.Line({
            element: this.settings.lineGraphEl,
            data: [
                { y: '2006', a: 100, b: 90, c: 40 },
                { y: '2007', a: 75,  b: 65, c: 50 },
                { y: '2008', a: 50,  b: 40, c: 70 },
                { y: '2009', a: 75,  b: 65, c: 40 },
                { y: '2010', a: 50,  b: 40, c: 20 },
                { y: '2011', a: 75,  b: 65, c: 90 },
                { y: '2012', a: 100, b: 90, c: 100 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b', 'c'],
            labels: ['Producto A', 'Producto B', 'Producto C'],
            lineColors: this.settings.colors,
            lineWidth: 5,
            smooth: false,
            grid: false
        });
    },
    barChartInit: function() {
        Morris.Bar({
            element: this.settings.barGraphEl,
            data: [
                { y: '2006', a: 100, b: 90, c: 40 },
                { y: '2007', a: 75,  b: 65, c: 50 },
//                { y: '2008', a: 50,  b: 40, c: 70 },
//                { y: '2009', a: 75,  b: 65, c: 40 },
//                { y: '2010', a: 50,  b: 40, c: 20 },
//                { y: '2011', a: 75,  b: 65, c: 90 },
                { y: '2012', a: 100, b: 90, c: 100 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b', 'c'],
            labels: ['Producto A', 'Producto B', 'Producto C'],
            barColors: this.settings.colors,
            grid: false
        });
    },
    init: function() {
        console.log("DiDiAnalytics init");
    }
};

DiDiAnalyticsCharts.lineChartInit();
DiDiAnalyticsCharts.barChartInit();