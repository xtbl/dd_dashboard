/**
 * DiDi Analytics Graphs
 * dependencies:
 *  jQuery
 *  morris.js
 */

var DiDiAnalyticsCharts = {
    settings: {
        lineGraphEl: "analytics-grafico-lineas",
        barGraphEl: "analytics-grafico-barras",
        colors: ['#93c23e', '#2681a7', '#ba131a', '#808285'] // DiDi colors
    },
    analyticsLineChart: null,
    analyticsBarChart: null,
    lineChartInit: function() {
        // initializes linechart with default data set (eg: numero de personas)
        var analyticsLineChart = Morris.Line({
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
        // assign the line chart object created
        this.analyticsLineChart = analyticsLineChart;
        // initializes line chart dropdown controls/selection of chart data
        var self = this;
        $("#line-chart-options li a").on("click", function(e) {
            e.preventDefault();
            var chartDataSelected = $(this).data("lineChartSet");
            self.setLineChartData(chartDataSelected);
            var chartDataSelectedText = $(this).text();
            //update dropdown with selection
            ($("#line-chart-options").siblings("button.chart-selection-btn")).text(chartDataSelectedText);
        })
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
    setLineChartData: function(selectedDataId) {
        // get fake dataset
        var dataSet = getLineChartData();
        // get data according to selection
        var selectedData = $.grep(dataSet, function(item){
            return item.id === selectedDataId;
        });

        if(selectedData.length){
            this.analyticsLineChart.setData(selectedData[0].data);
        }
    },
    // request for server data might be here when service is ready
    getLineChartData: function() {
        var dataSet = [];

        return dataSet;
    },
    createNewLineChart: function(dataSet) {

    },
    updateBarChartData: function() {

    },
    init: function() {
        console.log("DiDiAnalytics init");
    }
};

DiDiAnalyticsCharts.lineChartInit();
DiDiAnalyticsCharts.barChartInit();


//    replace with data from server
function getLineChartData() {
    var lineChartData = [
        {
            id: "numPersonas",
            name: "# de personas",
            data: [
                { y: '2006', a: 100, b: 90, c: 100 },
                { y: '2007', a: 75, b: 65, c: 100 },
                { y: '2008', a: 50, b: 40, c: 50 },
                { y: '2009', a: 75, b: 65, c: 2 },
                { y: '2010', a: 50, b: 40, c: 100 },
                { y: '2011', a: 75, b: 65, c: 100 },
                { y: '2012', a: 100, b: 90, c: 100 }
            ]
        },
        {
            id: "criterio1",
            name: "criterio personalizado 1",
            data: [
                { y: '2006', a: 100, b: 90, c: 100 },
                { y: '2007', a: 75, b: 65, c: 100 },
                { y: '2008', a: 50, b: 40, c: 1 },
                { y: '2009', a: 75, b: 65, c: 100 },
                { y: '2010', a: 50, b: 40, c: 100 },
                { y: '2011', a: 75, b: 65, c: 1 },
                { y: '2012', a: 100, b: 90, c: 100 }
            ]
        },
        {
            id: "criterio2",
            name: "criterio personalizado 2",
            data: [
                { y: '2006', a: 100, b: 90, c: 100 },
                { y: '2007', a: 75, b: 65, c: 100 },
                { y: '2008', a: 50, b: 40, c: 100 },
                { y: '2009', a: 75, b: 65, c: 100 },
                { y: '2010', a: 50, b: 40, c: 100 },
                { y: '2011', a: 75, b: 65, c: 100 },
                { y: '2012', a: 100, b: 90, c: 100 }
            ]
        }
    ];
    return lineChartData;
};

function getBarChartData() {
    var barChartData = [
        {
            id: "numPersonas",
            name: "# de personas",
            data: [
                { y: '2006', a: 100, b: 90, c: 100 },
                { y: '2007', a: 75, b: 65, c: 100 },
                { y: '2008', a: 50, b: 40, c: 50 },
                { y: '2009', a: 75, b: 65, c: 2 },
                { y: '2010', a: 50, b: 40, c: 100 },
                { y: '2011', a: 75, b: 65, c: 100 },
                { y: '2012', a: 100, b: 90, c: 100 }
            ]
        },
        {
            id: "criterio1",
            name: "criterio personalizado 1",
            data: [
                { y: '2006', a: 100, b: 90, c: 100 },
                { y: '2007', a: 75, b: 65, c: 100 },
                { y: '2008', a: 50, b: 40, c: 1 },
                { y: '2009', a: 75, b: 65, c: 100 },
                { y: '2010', a: 50, b: 40, c: 100 },
                { y: '2011', a: 75, b: 65, c: 1 },
                { y: '2012', a: 100, b: 90, c: 100 }
            ]
        },
        {
            id: "criterio2",
            name: "criterio personalizado 2",
            data: [
                { y: '2006', a: 100, b: 90, c: 100 },
                { y: '2007', a: 75, b: 65, c: 100 },
                { y: '2008', a: 50, b: 40, c: 100 },
                { y: '2009', a: 75, b: 65, c: 100 },
                { y: '2010', a: 50, b: 40, c: 100 },
                { y: '2011', a: 75, b: 65, c: 100 },
                { y: '2012', a: 100, b: 90, c: 100 }
            ]
        }
    ];
    return barChartData;
};
