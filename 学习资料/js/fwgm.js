window.onload = function () {
    let buttom=document.querySelector(".buttom");
    let shy_zz=document.querySelector(".shy_zz");
    let icon=document.querySelector(".icon1");

    console.log(1);
    console.log(buttom,shy_zz,icon);

    buttom.onclick=function () {
        shy_zz.style.display="block";
    }
    icon.onclick=function () {
        shy_zz.style.display="none";
    }
}