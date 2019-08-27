$(document).ready(function(){
	$("#input-b1").fileinput({
		'showUpload':false, 
		'browseOnZoneClick':true,
		'showClose':false,
		// 'showCaption':false,
		// 'showUploadedThumbs':false,
		'hideThumbnailContent':true,
		'showBrowse':false
	});
	$('.file-caption-main').hide();
	$('.editArea').hide();
	$("#input-b1").on('change', function(event, numFiles, label) {
		$('.file-caption-main').show();
	    $('.editArea').show();
	    $('.file-preview').hide();
	});

	$("#input-b1").on('fileclear', function(event) {
	    $('.file-caption-main').hide();
	    $('.editArea').hide();
	    $('.file-preview').show();
	});

	$("#input-b1").on('fileloaded', function(event) {
	    // console.log($('#input-b1').fileinput('getPreview'));
	    var _content = $('.file-preview-text').text();
	    $('.editArea textarea').text(_content);
	});
})