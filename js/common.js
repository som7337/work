//work_타이틀 타이핑영역
function autoType(elementClass,typingSpeed){
  var thisElem = $(elementClass);
  thisElem.css({"position":"relative","display":"inline-block"});
  thisElem.prepend("<div class='cursor' style='right: initial; left: 0;'></div>")
  thisElem = thisElem.find(".work_titlet > .text");
  var thisTextSplit = thisElem.text().trim().split(""); //trim은 앞 공백을 지워주는 역활, split은 하나하나 잘라주는 역활
  var ttSplitLeng = thisTextSplit.length; //for 구문으로 돌리기위해 어디까지의 length값을 구하기위해
  var newString = "";
  thisElem.text("");
  setTimeout(function(){
    thisElem.css("opacity",1);
    thisElem.prev().removeAttr("style");
    thisElem.text("");
    for(var i = 0; i < ttSplitLeng; i++){
      (function(i,char){
        setTimeout(function(){
          newString += char;
          thisElem.text(newString); //0,0.5초,1초...마다 chqr값을 받아서 newString에 붙여서 계속 넣는거.....
        },i*typingSpeed)
      })(i+1,thisTextSplit[i]);
    };
  },1500);
}

$(function(){
  //script 입력영역 object
  autoType(".maintitleE",200); //0.2초마다
  // autoType(".maintitleB",200); //0.2초마다
  // autoType(".maintitleU",200); //0.2초마다
  // autoType(".maintitleW",200); //0.2초마다
});

//work_버튼 hover영역
// $(function(){
//   $(".skill_btn_li:nth-child(1)").css("background","#1a2960").css("color","#fff");
//   $(".skill_btn_li").mouseover(function(){
//     //마우스오버 시, 실행구문
//      $(this).css("background","#1a2960").css("color","#fff");
//   }).mouseout(function(){
//     //마우스아웃 시, 실행구문
//     $(this).css("background","#fff").css("color","#1a2960");
//   });
// });

//work_버튼 click영역
$(function(){
$(".skill_btn_li:first-child").addClass("on")

$("#skill_btn ul li").click(function(){
  var indexNum = $(this).index();
  $(".work_wrap .work_area").css("display","none");

  if( $(this).hasClass("on") ){
    }else{
      $(".skill_btn_li").removeClass("on");
      $(this).addClass("on");
    }

  $(".work_wrap .work_title").each(function(i){

    if( i == indexNum ){
      console.log(i+"<<<<<<"+indexNum);
      $(this).css("display","block");
      autoType(".maintitleE",200);
      autoType(".maintitleB",200);
      autoType(".maintitleU",200);
      autoType(".maintitleW",200);

    }else{
      $(this).css("display","none");
    }
  });

  $(".work_wrap .work_area").each(function(i){
    if( i == indexNum ){
      console.log(i+"::::::"+indexNum);
      $(this).css("display","flex");
    }
  });
});






});
