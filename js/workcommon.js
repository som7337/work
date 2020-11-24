function autoType(elementClass,typingSpeed){
  var thisElem = $(elementClass);
  thisElem.css({"position":"relative","display":"inline-block"});
  thisElem.prepend("<div class='cursor' style='right: initial; left: 0;'></div>")
  thisElem = thisElem.find(".text");
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
  autoType("#maintitle",200); //0.2초마다
});
