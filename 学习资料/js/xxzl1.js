window.onload = function () {
    let ctLis = document.querySelectorAll("main .CT_bigBox .nextBox .leftBox ul li.a");
    let ctLisYc = document.querySelectorAll("main .CT_bigBox .nextBox .leftBox ul li.b");
    let ctyc = document.querySelector("main .CT_bigBox .nextBox .leftBox ul li .yc");
    let ctycSJ = document.querySelector("main .CT_bigBox .nextBox .leftBox ul li  .sanjiao");

    console.log(ctLisYc);
    //每一个按钮的操作
    ctLis.forEach(function (value,index) {
        value.onclick  = function (e) {
            e.stopPropagation();
            for (let i=0;i<ctLis.length;i++) {
                ctLis[i].classList.remove("active");
                ctyc.style.opacity = 0;
                ctycSJ.style.display = "none"
                ctyc.classList.remove("bounceInDown");
                ctyc.classList.remove("bounceOutDown");
            }
            this.classList.toggle("active");

        }


    })

    // 隐藏的按钮点击效果
    ctLisYc.forEach(function (value,index) {
            value.onclick  = function () {
                for (let i=0;i<ctLisYc.length;i++) {
                    ctLisYc[i].classList.remove("active");

                }
                this.classList.toggle("active");



            }


    })


    // spark独自的操作
    ctLis[5].addEventListener("click",OP,false);


        function  OP(e) {
        e.stopPropagation();
        ctyc.style.opacity = 1;

        ctycSJ.style.display = "block";
        ctyc.classList.add("bounceInDown");

    }

    // 点击空白处隐藏
    document.body.addEventListener("click",bodyYc,false);
        function bodyYc() {
            for (let i=0;i<ctLis.length;i++) {
                ctLis[i].classList.remove("active");
            }

            ctycSJ.style.display = "none"
            ctyc.classList.remove("bounceInDown");
            ctyc.classList.add("bounceOutDown");
            for (let i=0;i<ctLisYc.length;i++) {
                ctLisYc[i].classList.remove("active");

            }
            //0.5s后 透明度降低
            setTimeout(function () {
                ctyc.style.opacity = 0;
            },500);

            setTimeout(function () {
                ctyc.classList.remove("bounceOutDown");
            },2000);

        }


}
