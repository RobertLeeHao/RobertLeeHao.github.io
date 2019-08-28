$(document).ready(function(){
	var _fileIn = $('#inputin');
	var _content;
	var _outContent;
	_fileIn.fileinput({
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
	_fileIn.on('change', function(event, numFiles, label) {
		$('.file-caption-main').show();
	    $('.editArea').show();
	    $('.file-preview').hide();
	});

	_fileIn.on('fileclear', function(event) {
	    $('.file-caption-main').hide();
	    // $('.editArea').hide();
	    $('.file-preview').show();
	});

	_fileIn.on('fileloaded', function(event) {
	    // console.log($('#input-b1').fileinput('getPreview'));
	    _content = $('.file-preview-text').val();
	    // console.log(_content);
	    $('#text-input').val(_content);
	    document.getElementById('preview').innerHTML =
      	marked($('#text-input').val());

      	_outContent = $('#outHtml').prop("outerHTML");
      	console.log(_outContent);

	});

	$('#text-input').bind('input propertychange', function() {
	    document.getElementById('preview').innerHTML =
      	marked($('#text-input').val());
	});

	$("#send").click(function(){
	    window.location.href = "mailto: ?subject= &body=<html><body>"+_outContent+"</body></html>";
	});

})