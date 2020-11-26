//document.querySelector("button").addEventListener("click",testCompact);
$("button").click(function(){

  if($("#firstPerson").val() !=="" && $("#secondPerson").val() !=="") {
    testCompact();
  }else{
      $(".output").html("Please fill up names. Thank you.");
  }
});


$("input").focus(function(){
  $(this).css("font-family","Cookie");//
  $(this).css("background-color","#ffa45b");
  $(this).css("font-size","70px");
  $(this).css("color","gray");
});

$("input").blur(function(){

  $(this).css("background-color","#aee6e6");
    $(this).css("color","#fbf6f0");
});



function testCompact(){

    var firstPerson = $("#firstPerson").val();
    var secondPerson = $("#secondPerson").val();
    var compactable ;

    var checkArr = ["a","p","r","m","s"];

    var firstPersonInitial = firstPerson.slice(0,1);
    firstPersonInitial = firstPersonInitial.toLowerCase();

    var secondPersonInitial = secondPerson.slice(0,1);
    secondPersonInitial = secondPersonInitial.toLowerCase();


    if(checkArr.includes(firstPersonInitial) && checkArr.includes(secondPersonInitial)){
      compactable = true;
    } else if(!checkArr.includes(firstPersonInitial) && !checkArr.includes(secondPersonInitial)) {
      compactable = true;
    } else {
      compactable = false;
    }

    if(compactable){
      $(".output").html(" ✔︎ "+ firstPerson + " and "+ secondPerson + " are compactiable! ✔︎ ");
      $(".output").css("color","#adb36e");
    } else {
      $(".output").html(" ✘ " + firstPerson + " and "+ secondPerson + " are not compactiable! ✘ ");
      $(".output").css("color","#ea2c62");
    }

    $(".output").animate({width: [ "toggle", "swing" ],
    height: [ "toggle", "swing" ],});
    $(".output").animate({width: [ "toggle", "swing" ],
    height: [ "toggle", "swing" ],});

}
