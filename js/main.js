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
    	var _otherMonthStyle = "other";
    	var _weekendStyle = "";
    	if (_thisDayMonth == _month) {
    		_otherMonthStyle = "";
    	}
    	if (_thisDay.getDay() == 6 || _thisDay.getDay() == 0) {
    		_weekendStyle = "weekend";
    	}
    	$(".calender").append("<li class="+"'"+_otherMonthStyle+ "&nbsp;" +_weekendStyle+"'"+">"+_thisDayNumber+"</li>");
    }
})

// calender