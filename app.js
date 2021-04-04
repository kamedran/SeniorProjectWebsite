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
                //returns token as a string 
                var obj = JSON.stringify(response)
                console.log(obj)
                //alert("working");
                //ajax response to check if the user is an admin or student 
                $.ajax({
                    url: "http://localhost:8080/isAdmin",
                    type: 'get',
                }).done(function (reponse) {
                    //opens the window for admin 
                    //var obj = JSON.stringify(reponse);
                    //console.log("succesfully in")
                    //window.location.replace("http://www.w3schools.com");

                }).fail(function (error) {
                    //opens the window to the student signed in as the user is not signed in 
                    console.log("failure on my part")
                    window.location.replace("Student/student_view.html");
                })
            }).fail(function (error) {
                //Error message that shows user entered wrong password/email
                $("#error").removeClass("wrongText");
            })


        }
    });


    ///for registration form 
});



//Registers the user
$(document).ready(function () {
    ///This runs the click only once
    $("#register").unbind("click").click(function () {
        let username = $("#username").val().trim();
        let password = $("#password").val().trim();
        let firstName = $("#firstName").val().trim();
        let lastName = $("#lastName").val().trim();

        if (username != "" && password != "" && firstName != "" && lastName != "") {
            //Triggers this call when correct email and password are inputted
            $.ajax({
                url: "http://localhost:8080/api/register?username=" + username + "&password=" + password + "&firstName=" + firstName + "&lastName=" + lastName,
                type: 'post',
                data: { username: username, password: password, fn: firstName, ln: lastName },

            }).done(function () {
                $("#success").removeClass("wrongText");
            })
        }
    });
});



