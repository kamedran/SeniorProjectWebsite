$(document).ready(function(){
    $("#signBtn").click(function(){
       let  email = $("#inputEmail").val().trim();
       let  password = $("#inputPassword").val().trim();
       var newWindow = window.open("https://www.w3schools.com");

        if( email != "" && password != "" ){
            $.ajax({
                url: "http://localhost:8080/api/login?username=" + email + "&password=" + password,
                type:'get',
                data:{username:email,password:password},
                success:function(response){
                    if(response == 200){
                    newWindow.location.href = "https://www.yahoo.com";
                    }else{
                        console.log("wrong");
                    }
                }
            });
        }
    });
});