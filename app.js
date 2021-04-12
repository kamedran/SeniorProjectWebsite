var result;
$(document).ready(function () {
    ///This runs the click only once
    $("#signBtn").unbind("click").click(function (event) {
        event.preventDefault();
        let email = $("#inputEmail").val().trim();
        let password = $("#inputPassword").val().trim();

        if (email != "" && password != "") {
            //Triggers this call when correct email and password are inputted
            $.ajax({
                url: "http://localhost:8080/api/login?username=" + email + "&password=" + password,
                type: 'get',
                data: { username: email, password: password },
            }).done(function (response) {
                //ajax response to check if the user is an admin or student 
                isAdmin(response);
                //saves token globally 
                localStorage.setItem('token', response.token);
            }).fail(function (error) {
                //Error message that shows user entered wrong password/email
                $("#error").removeClass("wrongText");
            })
            return result;
        }
    });
});

//Function that checks if user is ADMIN
function isAdmin(isAdmin) {
    ///This runs the click only once
    $.ajax({
        url: "http://localhost:8080/isAdmin",
        type: 'get',
        headers: {
            Authorization: 'Bearer ' + isAdmin.token
        }
    }).done(function (reponse) {
        //opens the window for admin 
        window.location.assign("Admin/admin_view_student.html")

    }).fail(function (error) {
        //opens the window to the student page
        window.location.assign("Student/student_view.html");
    })
};


//Function that lets administrator see student information 
///This runs the click only once
$(document).ready(function () {
    $("#searchingBtn").unbind("click").click(function (event) {
        event.preventDefault();
        let studentEmail = $("#studentEmail").val().trim();
       // let studentID = $("#studentID").val().trim();
        $.ajax({
            url: "http://localhost:8080/userInfo",
            type: 'get',
            //headers: { Authorization: 'Bearer ' + result },
            headers: { "Authorization": 'Bearer ' + localStorage.getItem('token') },
            data: { email: studentEmail },
        }).done(function (response) {
            //ajax response to check if the user is an admin or student 
            var obj = JSON.stringify(response);
            console.log(obj);

        }).fail(function () {
            //Error message that shows user entered wrong password/email
            console.log("unable to load")
        })
    });
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



