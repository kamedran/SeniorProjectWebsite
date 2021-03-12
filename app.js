//solution to Problem 1
$(function(){
  //changes wishes ID
  //ADDED ON HERE
   $("#wishes").text("I hate you, Bob");
   
});

//solution to Problem 2
$(function(){
    //changes id changeDuck
    $("#changeDuck").attr("src", "https://images.homedepot-static.com/productImages/473f00c4-673f-4208-bd94-fe64a0cc40ac/svn/hi-line-gift-garden-statues-87808-b-64_1000.jpg");
});

//solution to Problem 3
$(function(){
  //changes the size of class animal
   $(".animals").width(300);
});

//solution to Problem 4
$(function(){
   //when you press btn class, text turns red and doubles size
   $(".btn").click(function(){
    let num = parseInt($("#yell").css("fontSize"));
    $("#yell").css({"color": "red", "fontSize": num*2});
    });
});

//Solution to Problem 5
$(function(){
   //hides the hidden class when pressed
    $("#circle").click(function(){
        $("#circle").hide();
        $("#showing").removeClass("hidden");
    });
 });

 //solution to problem 6
 $(function(){
    //when hovering over class menu adds border
      $(".menu").hover(function(){
        $(".menu").css("border", "2px solid yellow");
      }, function(){  //when mouse is off
        $(".menu").css("border", "none");
      });
 });

 //solution to problem 7
 $(function(){
   //assigns  textbox value to message and pushes it back to other txtbox
   $(".typing").on("input", function(){
     let message = $(".typing").val();
     console.log(message);
     $(".writing").val(message);
   })
});

//solution to problem 8 
$(function(){
    //changes txtbox message to HAHA 
    $(".erase").change(function(){
      $(".erase").val("HAHAHA");
    });
});   

//solution to problem 9
$(function(){
  //keeps box checked true 
  $(".box").prop("checked", true);

  $(".box").change(function(){
    //assigns value to checked1
   let checked1 = $(".box").prop("checked");

   if(checked1){
       $(".selection").attr("disabled", false);
     }
     else{
      $(".selection").attr("disabled", true);
     }
  });
}); 

//solution to problem 10
$(function(){
  //hides incomplete when pressed
  $("#completeBTN").click(function(){
      $(".todo2").hide();
  });
  //hides complete when pressed
  $("#incompleteBTN").click(function(){
    $(".todo1").hide();
  });
  //show all 
  $("#allBTN").click(function(){
    $(".todo1").show();
    $(".todo2").show();
  });   
});