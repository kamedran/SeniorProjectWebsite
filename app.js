$(document).ready(function () {
    ///This runs the click only once
    $("#signBtn").unbind("click").click(function () {
        let email = $("#inputEmail").val().trim();
        let password = $("#inputPassword").val().trim();

        if (email != "" && password != "") {
            //Triggers this call when correct email and password are inputted
            /* $.getJSON("http://localhost:8080/api/login?username=" + email + "&password=" + password, function (result) {
            var llave = JSON.parse(data)
            //response data are now in the result variable
            alert(llave.token);

            }); */
            $.ajax({
                url: "http://localhost:8080/api/login?username=" + email + "&password=" + password,
                type: 'get',
                dataType: 'json',
                data: { username: email, password: password },
                //FIGURE OUT WHAT TO DO WITH DATA
                success: function(response){
                    alert(response.token);
                },
                error: () => {
                    alert("Wrong Username " + email);
                }
            });
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
                //responseType:'application/json',
                data: { username: username, password: password, fn: firstName, ln: lastName },
                success: function (response) {
                    if (response == 200) {
                        // newWindow.location.href = "https://www.yahoo.com";
                        // }else{
                        console.log("hello");
                    }
                }
            });
        }
    });
    ///for registration form 
});
//fix login design


