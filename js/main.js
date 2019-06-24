$(document).ready(function(){
    var _today = new Date(); //获取今天
    var _year = _today.getFullYear(); //获取当月
    var _month = _today.getMonth()+1; //获取当年

    var count = 42 // 定义格子

    function getCalender(){
       var _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
        // console.log(year + "and" + month);
        $("#calender-title").text(_year + "年" + _month + "月");

        for (var i = 0; i < count; i++) {
            var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
            var _thisDayNumber = _thisDay.getDate();
            var _thisDayMonth = _thisDay.getMonth()+1;
            var _liStyle = "";
            var _otherMonthStyle = "other";
            var _weekendStyle = "weekend";
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

            if (_thisDay.getDate() == _today.getDate() && _thisDayMonth == _today.getMonth()+1 && _thisDay.getFullYear() == _today.getFullYear()) {
                _liStyle += " today";
            }


            $(".calender").append("<li class="+"'"+_liStyle+"'"+"><div class='date'>"+_thisDayNumber+"</div></li>");
        }
    }
    function removeCalender(){
        $(".calender *").remove();
    }
    getCalender();
    // 进入上月
    $("#lastMonth").click(function(){
        if (_month != 1) {
            _month -= 1;
        } else {
            _year -= 1;
            _month = 12;
        }
        removeCalender();
        getCalender();
    })
    // 进入下月
    $("#nextMonth").click(function(){
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

// calender