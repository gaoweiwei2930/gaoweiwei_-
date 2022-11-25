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
// 订单切换封装后
(function () {
    var timTabs = document.getElementsByClassName('filter')[0].children;
    var orderData = document.getElementsByClassName('orderData');
    var index_ = 0;

    for (var i = 0; i < timTabs.length; i++) {
        timTabs[i].setAttribute('index', i)
        timTabs[i].onclick = function () {
            //因为接下来定时器中需要index_++  所有我们-1
            // 否则 点击哪一个 切换到的是下一个

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
    // 把定时器封装成一个函数
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

    // 当鼠标移入的时候  停止切换  移出继续
    var order = document.querySelector('.order');
    // 移入停止
    order.onmouseenter = function () {
        console.log('移入了');
        clearInterval(timer);
    }

    // 移出继续
    order.onmouseleave = auto;
})();
// 销售额统计折线图
//销售额统计模块


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
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [
            {
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[0],
                smooth: true// 折现变圆滑
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
    var timer = null;//计时器
    for (var i = 0; i < timeTab.length; i++) {
        timeTab[i].setAttribute('index', i);

        timeTab[i].onclick = function () {
            index_ = this.getAttribute('index');

            for (var j = 0; j < timeTab.length; j++) {
                timeTab[j].classList.remove('active');
                timeTab[index_].classList.add('active');
            }

            // 获取自定义属性携带的时间

            var dataTime = this.getAttribute('data-time');

            option.series[0].data = data[dataTime][0];
            option.series[1].data = data[dataTime][1];

            //修改option数据后 要重新配置option
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

    // 鼠标移入暂停 移出继续
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
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    // 2.指定配置

    var option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
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
            // 修改雷达图的大小
            radius: "60%",
            shape: "circle",
            // 分割的圆圈个数
            splitNumber: 4,
            name: {
                // 修饰雷达图文字的颜色
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            // 分割的圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴的线修改为白色半透明
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
                // 填充区域的线条颜色
                lineStyle: {
                    normal: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.5
                    }
                },
                data: [[90, 19, 56, 11, 34]],
                // 设置图形标记 （拐点）
                symbol: "circle",
                // 这个是设置小圆点大小
                symbolSize: 5,
                // 设置小圆点颜色
                itemStyle: {
                    color: "#fff"
                },
                // 让小圆点显示数据
                label: {
                    show: true,
                    fontSize: 10
                },
                // 修饰我们区域填充的背景颜色
                areaStyle: {
                    color: "rgba(238, 197, 102, 0.6)"
                }
            }
        ]
    };
    // 3.把配置和数据给对象
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
    window.addEventListener("load", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
