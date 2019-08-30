$(document).ready(function(){
	var searchUrl = window.location.href;
  	var searchData = searchUrl.split("?"); //截取 url中的“=”,获得“=”后面的参数
  	var searchText = decodeURI(searchData[1]); //decodeURI解码
  	$("body").prepend(searchText);
})