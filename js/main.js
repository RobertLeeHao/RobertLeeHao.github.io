$(document).ready(function(){
    var _today = new Date();
    var _year = _today.getFullYear();
    var _month = _today.getMonth()+1;

    var count = 42

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
    	// if (_thisDayMonth != _month) {
    	// 	_otherMonthStyle = "other";
    	// }
    	// if (_thisDay.getDay() == 6 || _thisDay.getDay() == 0) {
    	// 	_weekendStyle = "weekend";
    	// }
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

        if (_thisDay.getDate() == _today.getDate() && _thisDayMonth == _month && _thisDay.getFullYear() == _year) {
            _liStyle += " today";
        }


    	$(".calender").append("<li class="+"'"+_liStyle+"'"+"><div class='date'>"+_thisDayNumber+"</div></li>");
    }
})

// calender