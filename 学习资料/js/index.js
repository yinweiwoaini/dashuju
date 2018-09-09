window.onload= function () {


    let op = document.querySelectorAll(".op");
    let guizi = document.querySelectorAll(".guizi");
    console.log(op,guizi);
    for (let i=0; i < guizi.length; i++) {
        op[i].onclick =function () {
            if (guizi[i].style.height == 78 +"px") {
                guizi[i].style.height=0+"px";
            }else{
                guizi[i].style.height=78+"px";
            }

        };
    }
    // 获取左侧标签
    let LISTS = document.querySelectorAll(".list p.a");
    console.log(LISTS);
    let LISTSyc = document.querySelectorAll(".list p.b");
    console.log(LISTSyc);

    let BOXs = document.querySelectorAll(".BOX");
    console.log(BOXs);

    let BOXycs = document.querySelectorAll(".BOXyc");
    console.log(BOXycs);
    // console.log(BOXS);
    LISTS.forEach((v,i)=>{
        v.onclick = function () {
            for(let j=0;j<BOXs.length;j++){
                BOXs[j].style.display = "none";
            }
            for(let j=0;j<BOXycs.length;j++){
                BOXycs[j].style.display = "none";
            }
            BOXs[i].style.display = "block";
        }
    })

    LISTSyc.forEach((v,index)=>{
        v.onclick = function () {
            for(let i=0;i<BOXs.length;i++){
                BOXs[i].style.display = "none";
            }
            for(let i=0;i<BOXycs.length;i++){
                BOXycs[i].style.display = "none";
            }
            BOXycs[index].style.display = "block";
        }
    })
    //添加按钮
    let addbtn =document.querySelector(".CX_content .goods1 .between .right");

    //修改按钮
    let fixbtn =document.querySelectorAll(".CX_content .goods1 .bottom .operating .down .text2");
    //关闭按钮
    let close =document.querySelectorAll(".CX_content .goods1 .add .nav .text1 .close");
    //遮罩
    let cover = document.querySelector(".CX_content .goods1 .add");
    //修改框1，添加框0
    let nav  = document.querySelectorAll(".CX_content .goods1 .add .nav");
    console.log(nav);
    //点击添加按钮，跳出添加框
    addbtn.onclick =function (){
        cover.style.display = "block"  ;
        nav[0].style.zIndex= 3;
        nav[1].style.zIndex = 1;

        nav[0].style.opacity=1;
        nav[1].style.opacity=0;
        nav[0].classList.add("fadeInDown");
        setTimeout(function () {
            nav[0].classList.remove("fadeInDown");
        },700)
    };
    //点击修改按钮，跳出修改框
    for (let i=0;i<fixbtn.length;i++){
        fixbtn[i].onclick = function (){
            cover.style.display = "block"  ;
            nav[0].style.zIndex=1;
            nav[1].style.zIndex = 3;
            nav[1].style.opacity=1;
            nav[0].style.opacity=0;
            nav[1].classList.add("fadeInDown");
            setTimeout(function () {
                nav[1].classList.remove("fadeInDown");
            },700)
        };

    }
    //点击 添加页面的 关闭，
    close[0].onclick =function(){
        setTimeout(function () {
            cover.style.display = "none";
            nav[0].classList.remove("fadeOutDown");

        },700);

        nav[0].classList.add("fadeOutDown");

    };
    close[1].onclick =function(){
        setTimeout(function () {
            cover.style.display = "none";
            nav[1].classList.remove("fadeOutDown");

        },700);

        nav[1].classList.add("fadeOutDown");

    };


    console.log(close);





};