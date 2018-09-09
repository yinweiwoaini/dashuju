/*
* @Author: Administrator
* @Date:   2018-09-08 18:34:41
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-08 23:46:32
*/
window.onload=function() {
	
	let user=document.getElementsByClassName("username")[0];
	let pass=document.querySelector(".password");
	let hint=document.querySelector(".HXH_box-list .hint");
	let correct=document.querySelector(".dui");
	let correct1=document.querySelector(".dui1");
	let mistake=document.querySelector(".cuo");
	let mistake1=document.querySelector(".cuo1");
	let btn=document.querySelector(".HXH_submit1");
	console.log(user,pass,hint,correct,btn);
	btn.onclick=function(){
		if(user.value=="还有一天放假" && pass.value!="cjhszcfjw"){
			correct.style.display="block";
			hint.style.display="none"
			mistake1.style.display="block";
			correct1.style.display="none";
			mistake.style.display="none";
		}else if(user.value!="还有一天放假" && pass.value=="cjhszcfjw"){
			mistake.style.display="block";
			hint.style.display="block"
			correct1.style.display="block";
			mistake1.style.display="none";
			correct.style.display="none";
		}else if(user.value!="还有一天放假" && pass.value!="cjhszcfjw"){
			mistake.style.display="block";
			hint.style.display="block"
			mistake1.style.display="block";
			correct.style.display="none";
			correct1.style.display="none";
		}else if(user.value=="还有一天放假" && pass.value=="cjhszcfjw"){
			mistake.style.display="none";
			hint.style.display="none"
			mistake1.style.display="none";
            correct.style.display="block";
            correct1.style.display="block";
			setTimeout(function () {
				alert("登录成功");
            },200);
            setTimeout(function () {
                window.open(`学习资料/index.html`);
            },400);

		}

}
}