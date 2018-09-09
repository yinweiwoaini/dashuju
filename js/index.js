/*
* @Author: 123
* @Date:   2018-09-08 16:53:30
* @Last Modified by:   123
* @Last Modified time: 2018-09-08 23:55:59
*/
window.onload=function(){
	let Btn=document.querySelector(".FYD_submit");
	let hint=document.querySelector(".FYD_alert");
	let Btn2=document.querySelector(".FYD_close");
	console.log(Btn,hint,Btn2);
	Btn.onclick=function(){
		hint.style.display="block";
		hint.classList.remove("bounceOut");
		hint.classList.add("bounceIn");
	}
	Btn2.onclick=function(){
		hint.classList.remove("bounceIn");
		hint.classList.add("bounceOut");
		setTimeout(function(){
			hint.style.display="none"},600);						 						
	}
}