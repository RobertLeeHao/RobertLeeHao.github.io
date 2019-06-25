$(document).ready(function(){
    var _today = new Date(); //获取今天年月日，这个是常量，用作第一次载入页面设置日历和条件比对
    var _year = _today.getFullYear(); //获取当月，这个变量负责展示日历，切换月份时变化
    var _month = _today.getMonth()+1; //获取当年，这个变量负责展示日历，切换月份时变化

    var count = 42 // 定义每月格子数量

    //定义加载日历方法
    function getCalender(){
       var _firstDay = new Date(_year, _month - 1, 1);  //设定当前月第一天

        $("#calender-title").text(_year + "年" + _month + "月"); //显示日历所在年月

        // 填充日历日期框架
        for (var i = 0; i < count; i++) {
            var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay()); //定义每格年月日
            var _thisDayNumber = _thisDay.getDate(); //定义每格日期展示
            var _thisDayMonth = _thisDay.getMonth()+1; //定义每格月份
            var _liStyle = ""; //每格包含类集合
            var _otherMonthStyle = "other"; //非本月格子类名
            var _weekendStyle = "weekend"; //周末格子类名
            // 判断每格日期是否为非当月日期、是否为周末并确定每格包含类
            if (_thisDayMonth != _month) {
                if (_thisDay.getDay() == 6 || _thisDay.getDay() == 0) {
                    _liStyle = _otherMonthStyle+ " " +_weekendStyle;
                } else {
                    _liStyle = _otherMonthStyle;
                }
            } else {
                if (_thisDay.getDay() == 6 || _thisDay.getDay() == 0) {
                    _liStyle = _weekendStyle;
                } else {
                    _liStyle = "";
                }
            }
            // 当日高亮
            if (_thisDay.getDate() == _today.getDate() && _thisDayMonth == _today.getMonth()+1 && _thisDay.getFullYear() == _today.getFullYear()) {
                _liStyle += " today";
            }
            //放置格子
            $(".calender").append("<li class="+"'"+_liStyle+"'"+"><div class='date'>"+_thisDayNumber+"</div></li>");
        }
    }
    //定义清除日历方法
    function removeCalender(){
        $(".calender *").remove();
    }
    //加载日历
    getCalender();
    // 切换上月日历
    $("#lastMonth").click(function(){
        //切换年份
        if (_month != 1) {
            _month -= 1;
        } else {
            _year -= 1;
            _month = 12;
        }
        removeCalender();
        getCalender();
    })
    // 切换下月日历
    $("#nextMonth").click(function(){
        //切换年份
        if (_month != 12) {
            _month += 1;
        } else {
            _year += 1;
            _month = 1;
        }
        
        removeCalender();
        getCalender();
    })

})