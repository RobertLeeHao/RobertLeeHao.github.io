$(document).ready(function(){
    var _today = new Date();
    var _year = _today.getFullYear();
    var _month = _today.getMonth()+1;

    var _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
    // console.log(year + "and" + month);
    $("#calender-title").text(_year + "年" + _month + "月");
    console.log(_firstDay);
})

// calender