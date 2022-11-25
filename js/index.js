(function () {
    // 左侧监控部分点击切换tab
    var choseTabs = document.getElementsByClassName('choseTab');

    // 找到要显示和隐藏的内容
    var showTabs = document.getElementsByClassName("showTab");
    for (var i = 0; i < choseTabs.length; i++) {
        choseTabs[i].setAttribute('index', i);

        choseTabs[i].onclick = function () {
            var index = this.getAttribute('index');
            console.log(index);
            //排他法 切换选中的类名
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
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2. 指定配置项和数据
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
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
                // 如果radius是百分比则必须加引号
                radius: ["10%", "60%"],
                center: ["50%", "50%"],
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
                // 修饰饼形图文字相关的样式 label对象
                label: {
                    fontSize: 10
                },
                // 修饰引导线样式
                labelLine: {
                    // 连接到图形的线长度
                    length: 6,
                    // 连接到文字的线长度
                    length2: 8
                }
            }
        ]
    };

    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });

    //5. 页面加载完成 就让图标自动重置大小
    window.addEventListener("load", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });

})();
// 全国用户总量统计

(function () {
    //自定义的柱状条
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
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ],
            global: false // 缺省为 false
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            show: true,
            // 宫格的颜色
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
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
    //页面加载完成 就让图标自动重置大小
    window.addEventListener("load", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
