/**
 * @description typecho后台编辑器插入的js
 * @author ihewro && yoniu
 */

$(document).ready(function() {
	if ($("#wmd-button-row").length > 0) {
		// $('#wmd-button-row').append('<br><li class="wmd-button" id="wmd-bilibili-button" style="" title="插入bilibili视频"><svg id="bili-anime" viewBox="0 0 1024 1024" style="width:30px; height:30px"><path d="M588.8 359.68l-12.032-7.424 150.272-206.592a30.976 30.976 0 0 0-51.2-36.352l-153.6 210.176L281.6 170.24a30.976 30.976 0 1 0-33.024 52.736L486.4 369.92l-22.784 31.488a30.976 30.976 0 1 0 51.2 36.352l25.6-35.072 16.128 9.728A30.976 30.976 0 1 0 588.8 359.68z" fill="#FB813A"></path><path d="M763.648 850.688m-53.248 0a53.248 53.248 0 1 0 106.496 0 53.248 53.248 0 1 0-106.496 0Z" fill="#FB813A"></path><path d="M261.12 797.44a53.248 53.248 0 1 0 53.504 53.248 53.248 53.248 0 0 0-53.504-53.248z" fill="#FB813A"></path><path d="M141.312 314.368m92.928 0l556.288 0q92.928 0 92.928 92.928l0 360.704q0 92.928-92.928 92.928l-556.288 0q-92.928 0-92.928-92.928l0-360.704q0-92.928 92.928-92.928Z" fill="#FDDE80"></path><path d="M520.448 575.232m-128.256 0a128.256 128.256 0 1 0 256.512 0 128.256 128.256 0 1 0-256.512 0Z" fill="#FFFFFF"></path><path d="M476.928 546.56c0-26.88 19.2-37.632 42.24-25.6l49.664 28.672a25.6 25.6 0 0 1 0 48.64l-49.664 28.672c-23.04 13.568-42.24 2.56-42.24-24.32z" fill="#FB813A"></path></svg></li>'  + 
		// '<style>' + '.wmd-button-row{height: 100%!important;}</style>');
		$('#wmd-button-row').append('<br><li class="wmd-button" id="wmd-bilibili-button" style="" title="插入bilibili视频"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAQAAACl4XcVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAyAAAAMgADzko2IAAAAHdElNRQflAhYFLTCF19MaAAABt0lEQVQ4y63TP0iVURjH8c/7Xr14s2uaN4ukFlEMJKOpBpeGphwiBRtqTAqiJQiCxKiQtoiWcIjAQhDKaIiorYYiyqaChmqI/hC3EsJ/ed+34b731W4GBZ3hHM453+d3fuc5z+E/toKav0V3uKl1pY1m+2ysUr1rSLgSvN6YB44oJPPQeZMa/nRo1h6T7jloDfo80fUrEKDZoBbEShrttslDL/Qqui9IuG8u+xCg2x2PFMVJABmBEonfUIMeez2uQeiLEyJdqU4gSPvIlDm3kWYxZ1ibTwkeIE7GJu8dL0M1yVKtZmdMyqi3IBJrkPdOSY8Rq8RSVxCZs85hZ+XMmNXqgkNyZkQVJEy9xZoMa3dVEUw5ZbtLWpQq8PKXn3bSV53y8tZ6KeuYNvmyhWr4hyIGfbbBFtf0G/DMNnElS2FyQVgEV2xV8Ea/UdNY/F05EujTIRR7KrLotVZHxTbLVlyXU5cx77r9OpZUlpXDuGkZQRmeVXLOgo/q1VbBJd/ttEud+XJkVrtuI24YcMtbmdRawQHjeo2Z8MrckveLpoyqq1I+7bkJjdXVvFrnCqWe05l+h39rPwGlQHDhzol6DgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNy0xOVQwMzozOToxOCswMDowMDsHR9gAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDEtMDhUMTk6NDc6NTYrMDA6MDBiEQKfAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADQ1M50kzCQAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANDI3RvnOpwAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTQ2OTc2ODc2xG3IKAAAABF0RVh0VGh1bWI6OlNpemUANzk0NEIP6RsyAAAAWnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vZGF0YS93d3dyb290L3d3dy5lYXN5aWNvbi5uZXQvY2RuLWltZy5lYXN5aWNvbi5jbi9maWxlcy8xMTgvMTE4ODY0OS5wbme4c1hOAAAAAElFTkSuQmCC"/></li>'  + 
		'<style>' + '.wmd-button-row{height: 100%!important;}</style>');

		
		
		$(document).on('click', '#wmd-bilibili-button',
		function() {
			$('body').append('<div id="bilibiliPanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入bilibili视频</b></p>' + '<p><select id="yoniu-bilibili">' + '<option value="bv">bv号' + '<option value="av">av号' + '</select></p>' + '<p><input name="bilibili-hao" type="text" placeholder="av号或者bv号"></input></p>' + '<p><input name="bilibili-p" type="text" placeholder="第几P，留空及默认为1"></input></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="bilibili_ok">确定</button>' + '<button type="button" class="btn btn-s" id="bilibili_cancel">取消</button>' + '</div>' + '</div>');
		});
		

		
		$(document).on('click', '#bilibili_cancel',
		function() {
			$('#bilibiliPanel').remove();
			$('textarea').focus();
		});
		
		$(document).on('click', '#bilibili_ok',
		function() {
			var myab = $("#yoniu-bilibili option:selected").val();
			var myid = $('.wmd-prompt-dialog input[name="bilibili-hao"]').val();
			var myp = $('.wmd-prompt-dialog input[name="bilibili-p"]').val();
			if (myp == '') {
				myp = '1';
			}
			textContent = '\r\n' + '[bilibili ' + myab + '="' + myid + '" p="' + myp + '"]' + '\r\n';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#bilibiliPanel');
		});
		$(document).on('click', '#location',function() {
		var map = new AMap.Map('map',{
			resizeEnable: true
		});
		AMap.plugin('AMap.Geolocation', function() {
			var geolocation = new AMap.Geolocation({
				timeout: 10000,
				zoomToAccuracy: true
			});
			geolocation.getCurrentPosition(function(status,result){
				if(status=='complete'){
					onComplete(result)
				}else{
					onError(result)
				}
			});
		});
		//解析定位结果
		function onComplete(data) {
			$('input[name="fields[location]"]').val(data.formattedAddress + "|" + data.position.getLng() + "|" + data.position.getLat());
			var marker = new AMap.Marker({
				position: data.position
			});
			map.setZoomAndCenter(15,data.position);
			map.add(marker);
			$('#map').addClass('success');
		}
		//解析定位错误信息
		function onError(data) {
			$('input[name="fields[location]"]').val('定位失败');
		}
		return false;
	});
	};
});
function inserContentToTextArea(myField, textContent, modelId = '') {
	if (modelId != '') {
		$(modelId).remove();
	}
	if (document.selection) {
		myField.focus();
		var sel = document.selection.createRange();
		sel.text = textContent;
		myField.focus();
	} else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var cursorPos = startPos;
		myField.value = myField.value.substring(0, startPos) + textContent + myField.value.substring(endPos, myField.value.length);
		cursorPos += textContent.length;
		myField.selectionStart = cursorPos;
		myField.selectionEnd = cursorPos;
		myField.focus();
	} else { //其他环境
		myField.value += textContent;
		myField.focus();
	}

}