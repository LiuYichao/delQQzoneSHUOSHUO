var delay = 1000; 

//删除我的那段中二的黑历史
function del() { 

    var iframe = document.querySelector('.app_canvas_frame')
					  .contentDocument
					  .querySelector('.del_btn').click(); 
    if(typeof iframe != 'null') {
		setTimeout("yes()", delay); 
	}else {
		window.frames["app_canvas_frame"].location.reload();
		setTimeout("del()", delay); 
	}
	
	
} 
//是的！一刻都不要停，把我的中二黑历史给删除了！！！！！ 
function yes() { 
	
    document.querySelector('.qz_dialog_layer_btn').click();
	
	var verify = document.querySelector("#verify_dialog_frame");
	
	if(typeof verify != 'null') {
		alert("你的黑历史太多了，已经需要验证码才能删除了，图像识别好难搞定，所以明天你再删吧");
		return false;
	}else{
		setTimeout("del()", delay); 
	}
} 

//删除它！
del();