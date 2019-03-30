window.onload = function(){
	var block = document.getElementById("block");
	var pass = document.getElementById("pass");
//	console.log(block);
	pass.type = "password";    //先设置为password
	block.onmouseover = function(){
		this.style.opacity = 0.9;
		this.style.filter="Alpha(opacity=90)";     //IE8 以及更早的版本支持替代的 filter 属性
	}
	block.onmouseout = function(){
		this.style.opacity = 0.2;
		this.style.filter="Alpha(opacity=20)";
	}
	block.onclick = function(){
		console.log(pass.type);
		if(pass.type == "password"){
			pass.type = "text";
		}
		else{
			pass.type = "password";
		}
	}
	
}