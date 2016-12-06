$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2013',
            direction: 1,
            ppm: 45,
            bodytemp: 78
        }, {
            period: '2013',
            direction: 2,
            ppm: 53,
            bodytemp: 80
        }, {
            period: '2014',
            direction: 14,
            ppm: 69,
            bodytemp: 91
        }, {
            period: '2014',
            direction: 1,
            ppm: 97,
            bodytemp: 89
        }, {
            period: '2015',
            direction: 23,
            ppm: 19,
            bodytemp: 93
        }, {
            period: '2015',
            direction: 3,
            ppm: 93,
            bodytemp: 81
        }, {
            period: '2016',
            direction: 1,
            ppm: 95,
            bodytemp: 88
        }, {
            period: '2016',
            direction: 4,
            ppm: 67,
            bodytemp: 75
        }, {
            period: '2016',
            direction: 14,
            ppm: 60,
            bodytemp: 28
        }, {
            period: '2017',
            direction: 2,
            ppm: 57,
            bodytemp: 91
        }],
        xkey: 'period',
        ykeys: ['direction', 'ppm', 'bodytemp'],
        labels: ['Direction', 'Pulses per minute', 'Body Temperature'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2016',
            a: 50,
            b: 40
        }, {
            y: '2016',
            a: 75,
            b: 65
        }, {
            y: '2016',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
