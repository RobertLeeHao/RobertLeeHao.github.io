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

            // 格式化日期月份，做id用

            var _dateForId;
            if (_thisDay.getDate()<10) {
                _dateForId = "0" + _thisDay.getDate();
            } else {
                _dateForId = _thisDay.getDate();
            }

            var _monthForId;
            if (_thisDayMonth < 10) {
                _monthForId = "0" + _thisDayMonth;
            } else {
                _monthForId = _thisDayMonth;
            }

            var _id = "date"+_thisDay.getFullYear() + _monthForId + _dateForId; //定义id
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
            $(".calender").append("<li id="+"'"+_id+"'"+" class="+"'"+_liStyle+"'data-date='"+_thisDay.getFullYear() + _monthForId + _dateForId+"'><div class='date'>"+_thisDayNumber+"</div></li>");
        }
        getdata();
    }

    //定义清除日历方法
    function removeCalender(){
        $(".calender *").remove();
    }


    function getdata(){
        // 显示JSON数据至页面
        $.getJSON("json/data.json",function(data){
            // 获取json数据
            $.each(data.list,function(i,n){
                var _thisStart = n["startDate"];
                var _thisFinish = n["finishDate"]
                // 确认年月做基准
                var _thisMonth;
                if (_month <10){
                    _thisMonth = _year + "0" + _month;
                } else {
                    _thisMonth = _year + _month;
                }
                //判断项目是否在本月出现
                if (Math.floor(_thisStart/100) <= _thisMonth && Math.floor(_thisFinish/100) >= _thisMonth) {
                    //循环查看格子是否符合项目时间区间
                    for (var i = 0; i < count; i++) {
                        var _thisId = $(".calender").find("li").eq(i).attr("data-date");
                        if (_thisId > _thisStart && _thisId <= _thisFinish) {
                            //展示项目
                            $(".calender").find("li").eq(i).append(
                                "<div class='pjt bg"+(n["bg"]%6)+"'></div>"
                            );
                        } else if (_thisId == _thisStart) {
                            //展示项目标题
                            $(".calender").find("li").eq(i).append(
                                "<div class='pjt bg"+(n["bg"]%6)+"'>"+ n["title"] +"</div>"
                            );
                        }
                    }
                }   
            })
        });
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