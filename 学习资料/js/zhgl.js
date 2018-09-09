window.onload=function(){
    //获取新建学生
    let newStudent=document.querySelector("main .WH_content .manage .bottom .new");
    //获取批量导入
    let importStudent=document.querySelector("main .WH_content .manage .bottom .Importing");
    //获取删除
    let delStudent=document.querySelector("main .WH_content .user .name .del");
    // 获取刷新
    let renStudent=document.querySelector("main .WH_content .user .name .ren");
    //获取遮盖
    let cover=document.querySelectorAll(".WH_Cover");
    // 获取新建学生弹框
    let studentFrame=document.querySelector(".WH_Cover .study");
    // 获取新建学生上的关闭
    let newStudentClose=document.querySelector(".WH_Cover .study .top .icon img");
    // 获取新建学生上的保存
    let saveStudent=document.querySelector(".WH_Cover .study .bottom .save");
    //获取新建学生弹框上的内容
    let values=document.querySelectorAll(".WH_Cover .study ul li input");
    // 获取警告弹框
    let warn=document.querySelector(".WH_Cover .studyCover");
    //获取警告弹框关闭
    let warnClose=document.querySelector(".WH_Cover .studyCover .icon img");
    // 获取新建学生上的取消
    let cancelStudent=document.querySelector(".WH_Cover .study .bottom .cancel");
    // 获取批量导入弹框
    let impFrame=document.querySelector(".WH_Cover .port");
    // 获取批量导入上的关闭
    let impFrameClose=document.querySelector(".WH_Cover .port .top .icon img");
    //获取表单内容
    let listContent=document.querySelector("main .WH_content .user .list .table .bottom .content");
    //新建学生框
    let next=0;
    newStudent.onclick=function(){
        cover[0].style.display="block";
        studentFrame.style.opacity="1";
        studentFrame.classList.add("bounceIn");
    };
    newStudentClose.onclick=function(){
        studentFrame.classList.remove("bounceIn");
        studentFrame.classList.add("bounceOut");
        values.forEach((e1)=>{
            e1.value = "";
        })
        setTimeout(function () {
            cover[0].style.display="none";

        },700);
        setTimeout(function () {
            studentFrame.classList.remove("bounceOut");

        },700);
    };
    cancelStudent.onclick=function() {
        studentFrame.classList.remove("bounceIn");
        studentFrame.classList.add("bounceOut");
        setTimeout(function () {
            cover[0].style.display = "none";

        }, 700);
        setTimeout(function () {
            studentFrame.classList.remove("bounceOut");

        }, 700);
    };

    //    新建学生框结束


    //    批量导入框
    importStudent.onclick=function(){
        cover[1].style.display="block";
        impFrame.style.opacity="1";
        impFrame.classList.add("bounceIn");
    };
    impFrameClose.onclick=function(){
        impFrame.classList.remove("bounceIn");
        impFrame.classList.add("bounceOut");
        setTimeout(function () {
            cover[1].style.display="none";

        },700);
        setTimeout(function () {
            impFrame.classList.remove("bounceOut");

        },700);
    };
    //    批量导入框结束

    //表单操作
    // 删除
    delStudent.onclick=function(){
        listContent.innerHTML="";
        next=0;
    };
    // 刷新
    renStudent.onclick=function(){
        window.history.go(0);
    };
    // 添加表内容
    saveStudent.onclick=function(){
        let flag = false;
        values.forEach((v)=>{
            console.log(v);
            if(v.value==""){
                warn.style.opacity="1";
                warn.style.top="0";
                flag = turn;
                return;
            }
        });
        if(flag){
            return;
        }


        if(listContent.innerHTML=="没有找到匹配的记录!"){
            listContent.innerHTML="";
        }


        studentFrame.classList.remove("bounceIn");
        studentFrame.classList.add("bounceOut");

        setTimeout(function () {
            cover[0].style.display = "none";

        }, 700);
        setTimeout(function () {
            studentFrame.classList.remove("bounceOut");

        }, 700);
        listContent.innerHTML+=`<div class="top">
                <div class="checkbox">
                <span>
                <input type="checkbox" id="questionNo${next}">
                <label for="questionNo${next}"></label>
                </span>
                </div>
                <div class="login">${values[0].value}</div>
                <div class="name">${values[1].value}</div>
                <div class="id">${values[2].value}</div>
                <div class="sex">${values[3].value}</div>
                <div class="pro">${values[4].value}</div>
                <div class="aca">${values[5].value}</div>
                <div class="class">${values[6].value}</div>
                <div class="ope"><div class="del">删除</div></div>
                </div>`;
        next++;
        values.forEach((e1)=>{
            e1.value = "";
        });
        // 获取所有表单列表
        let lists=document.querySelectorAll("main .WH_content .user .list .table .bottom .content .top");
        // 获取表单中的所有删除
        let dels=document.querySelectorAll("main .WH_content .user .list .table .bottom .content .top .ope .del");
        console.log(lists, dels);
        dels.forEach((value,index)=>{
            value.onclick=function () {
                listContent.removeChild(lists[index]);
            }
        });
        let WH_checkboxs=document.querySelectorAll("main .WH_content .user .list .table  .bottom .content .checkbox input");
        console.log(WH_checkboxs);

    };

    //警告框关闭
    warnClose.onclick=function(){
        warn.style.opacity="0";
        warn.style.top="-600px";
    };
    // console.log(newStudent,importStudent,delStudent,renStudent,cover,studentFrame,newStudentClose,impFrame,impFrameClose,listContent);
    console.log(values,warn);
};