(function () {
    var choseTabs = document.getElementsByClassName('choseTab');
    var showTabs = document.getElementsByClassName("showTab");
    for (var i = 0; i < choseTabs.length; i++) {
        choseTabs[i].setAttribute('index', i);
        choseTabs[i].onclick = function () {
            var index = this.getAttribute('index');
            console.log(index);
            for (var j = 0; j < choseTabs.length; j++) {
                choseTabs[j].classList.remove('active');
                choseTabs[index].classList.add('active');
            }
            for (var k = 0; k < showTabs.length; k++) {
                showTabs[k].style.display = 'none';
                showTabs[index].style.display = 'block';
            }

        }
    }
})();
// 点位分布统计模块
(function () {
    var myChart = echarts.init(document.querySelector(".pie"));
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [
            {
                name: "点位统计",
                type: "pie",
                radius: ["10%", "75%"],
                center: ["60%", "50%"],
                roseType: "radius",
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "四川" },
                    { value: 42, name: "湖北" }
                ],
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 6,
                    length2: 8
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    window.addEventListener("load", function () {
        myChart.resize();
    });

})();
(function () {
    var item = {
        name: '',
        value: '1200',
        itemStyle: {
            color: "#254065"
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }
    }
    var myChart = echarts.init(document.querySelector('.bar'));

    var option = {
        tooltip: {
            trigger: 'item',
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                { offset: 0, color: '#00fffb' },
                { offset: 1, color: '#0061ce' }
            ],
            global: false
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "#71f2fb"
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    window.addEventListener("load", function () {
        myChart.resize();
    });
})();
(function () {
    var timTabs = document.getElementsByClassName('filter')[0].children;
    var orderData = document.getElementsByClassName('orderData');
    var index_ = 0;

    for (var i = 0; i < timTabs.length; i++) {
        timTabs[i].setAttribute('index', i)
        timTabs[i].onclick = function () {
            index_ = this.getAttribute('index');
            for (var k = 0; k < timTabs.length; k++) {
                timTabs[k].classList.remove('active');
                timTabs[index_].classList.add('active');
            }
            for (var j = 0; j < orderData.length; j++) {
                orderData[j].classList.add('orderDataHidden');
                orderData[index_].classList.remove('orderDataHidden');
            }
        }
    }

    var timer = null;
    function auto() {
        timer = setInterval(function () {
            index_++;
            if (index_ >= timTabs.length) {
                index_ = 0;
            }
            timTabs[index_].click();
        }, 1500)
    }
    auto();
    var order = document.querySelector('.order');
    order.onmouseenter = function () {
        console.log('移入了');
        clearInterval(timer);
    }
    order.onmouseleave = auto;
})();

(function () {
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    var myChart = echarts.init(document.querySelector('.sline'));

    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd'
            },
            right: '10%'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false
            },
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [
            {
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[0],
                smooth: true
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[1],
                smooth: true
            }
        ]
    };
    myChart.setOption(option);
    var timeTab = document.getElementsByClassName('timeTab');
    var index_ = 0;
    var timer = null;
    for (var i = 0; i < timeTab.length; i++) {
        timeTab[i].setAttribute('index', i);
        timeTab[i].onclick = function () {
            index_ = this.getAttribute('index');
            for (var j = 0; j < timeTab.length; j++) {
                timeTab[j].classList.remove('active');
                timeTab[index_].classList.add('active');
            }
            var dataTime = this.getAttribute('data-time');
            option.series[0].data = data[dataTime][0];
            option.series[1].data = data[dataTime][1];
            myChart.setOption(option);
        }
    }
    function auto() {
        timer = setInterval(function () {
            index_++;
            if (index_ >= timeTab.length) {
                index_ = 0;
            }
            timeTab[index_].click();
        }, 1000);
    }
    auto();
    var sales = document.querySelector('.sales');
    sales.onmouseenter = function () {
        clearInterval(timer);
    }
    sales.onmouseleave = function () {
        auto();
    }
    window.addEventListener('load', function () {
        myChart.resize();
    })

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
// 销售渠道模块 雷达图
(function () {

    var myChart = echarts.init(document.querySelector(".radar"));
    var option = {
        tooltip: {
            show: true,
            position: ["60%", "10%"]
        },
        radar: {
            indicator: [
                { name: "机场", max: 100 },
                { name: "商场", max: 100 },
                { name: "火车站", max: 100 },
                { name: "汽车站", max: 100 },
                { name: "地铁", max: 100 }
            ],
            radius: "60%",
            shape: "circle",
            splitNumber: 4,
            name: {
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        series: [
            {
                name: "北京",
                type: "radar",
                lineStyle: {
                    normal: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.5
                    }
                },
                data: [[90, 19, 56, 11, 34]],

                symbol: "circle",

                symbolSize: 5,

                itemStyle: {
                    color: "#fff"
                },

                label: {
                    show: true,
                    fontSize: 10
                },

                areaStyle: {
                    color: "rgba(238, 197, 102, 0.6)"
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    window.addEventListener("load", function () {
        myChart.resize();
    });
})();
