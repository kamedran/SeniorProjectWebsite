$(document).ready(function () {
    ///This runs the click only once
    $("#signBtn").unbind("click").click(function (event) {
        event.preventDefault();
        let email = $("#inputEmail").val().trim();
        let password = $("#inputPassword").val().trim();
        let admin = false;

        if (email != "" && password != "") {
            //Triggers this call when correct email and password are inputted
            $.ajax({
                url: "http://localhost:8080/api/login?username=" + email + "&password=" + password,
                type: 'get',
                data: { username: email, password: password },
            }).done(function (response) {
                var obj = JSON.stringify(response)
                console.log(obj)
                //alert("working");
                $.ajax({
                    url: "http://localhost:8080/isAdmin",
                    type: 'get',
                    
                }).done(function (reponse) {
                    //var obj = JSON.stringify(reponse);
                    console.log("succesfully in")
                    //alert("working");

                }).fail(function (error) {
                    console.log("failure on my part")
                    //$("#error").removeClass("wrongText");
                    //window.open("");
                })
            }).fail(function (error) {
                //alert("Fail");
                $("#error").removeClass("wrongText");
                //window.open("");
            })


        }
    });


    ///for registration form 
});



//add popup
$(document).ready(function () {
    ///This runs the click only once
    $("#register").unbind("click").click(function () {
        let username = $("#username").val().trim();
        let password = $("#password").val().trim();
        let firstName = $("#firstName").val().trim();
        let lastName = $("#lastName").val().trim();
        //var newWindow = window.open("");

        if (username != "" && password != "" && firstName != "" && lastName != "") {
            //Triggers this call when correct email and password are inputted
            $.ajax({
                url: "http://localhost:8080/api/register?username=" + username + "&password=" + password + "&firstName=" + firstName + "&lastName=" + lastName,
                type: 'post',
                data: { username: username, password: password, fn: firstName, ln: lastName },

            }).done(function () {
                alert("Account Succesfully Registered");
            })
        }
    });
    ///for registration form 
});
//fix login design


