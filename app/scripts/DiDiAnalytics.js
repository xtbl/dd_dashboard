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
        var analyticsBarChart = Morris.Bar({
            element: this.settings.barGraphEl,
            data: [
                { y: 'Alajuela', a: 100 },
                { y: 'Heredia', a: 75},
                { y: 'Cartago', a: 80},
                { y: 'San Jose', a: 100},
                { y: 'Puntarenas', a: 50},
                { y: 'Guanacaste', a: 40}
            ],
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Promocion'],
            xLabelMargin: 10, // set smaller margin to allow longer names like provincias, etc
            barColors: this.settings.colors,
            grid: false,
            hideHover: true
        });
        // assign the line chart object created
        this.analyticsBarChart = analyticsBarChart;
        // initializes line chart dropdown controls/selection of chart data
        var self = this;
        $("#bar-chart-options li a").on("click", function(e) {
            e.preventDefault();
            var chartDataSelected = $(this).data("barChartSet");
            self.setBarChartData(chartDataSelected);
            var chartDataSelectedText = $(this).text();
            //update dropdown with selection
            ($("#bar-chart-options").siblings("button.chart-selection-btn")).text(chartDataSelectedText);
        })
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
    setBarChartData: function(selectedDataId) {
        // get fake dataset
        var dataSet = getBarChartData();
        // get data according to selection
        var selectedData = $.grep(dataSet, function(item){
            return item.id === selectedDataId;
        });

        if(selectedData.length){
            this.analyticsBarChart.setData(selectedData[0].data);
        }
    },
    // request for server data might be here for integration with backend
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
                { y: '2009', a: 75, b: 65, c: 40 },
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
                { y: '2008', a: 4, b: 40, c: 1 },
                { y: '2009', a: 75, b: 65, c: 100 },
                { y: '2010', a: 2, b: 40, c: 100 },
                { y: '2011', a: 75, b: 100, c: 1 },
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
                { y: '2009', a: 75, b: 80, c: 100 },
                { y: '2010', a: 10, b: 40, c: 100 },
                { y: '2011', a: 75, b: 10, c: 100 },
                { y: '2012', a: 100, b: 90, c: 100 }
            ]
        }
    ];
    return lineChartData;
};

function getBarChartData() {
    var barChartData = [
        {
            id: "lugar",
            name: "Lugar",
            data: [
                { y: 'Alajuela', a: 100 },
                { y: 'Heredia', a: 75},
                { y: 'Cartago', a: 80},
                { y: 'San Jose', a: 100},
                { y: 'Puntarenas', a: 50},
                { y: 'Guanacaste', a: 40}
            ]
        },
        {
            id: "criterio1",
            name: "criterio personalizado 1",
            data: [
                { y: 'Alajuela', a: 100 },
                { y: 'Heredia', a: 20},
                { y: 'Cartago', a: 80},
                { y: 'San Jose', a: 90},
                { y: 'Puntarenas', a: 80},
                { y: 'Guanacaste', a: 70}
            ]
        },
        {
            id: "criterio2",
            name: "criterio personalizado 2",
            data: [
                { y: 'Alajuela', a: 60 },
                { y: 'Heredia', a: 75},
                { y: 'Cartago', a: 40},
                { y: 'San Jose', a: 99},
                { y: 'Puntarenas', a: 70},
                { y: 'Guanacaste', a: 80}
            ]
        }
    ];
    return barChartData;
};
