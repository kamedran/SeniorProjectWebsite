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
              
            }).fail(function (error) {
                //Error message that shows user entered wrong password/email
                $("#error").removeClass("wrongText");
            })
        }
    });
});

//Function that checks if user is ADMIN
function isAdmin(userInfo) {
    ///This runs the click only once
    $.ajax({
        url: "http://localhost:8080/isAdmin",
        type: 'get',
        headers: {Authorization: 'Bearer ' + userInfo.token
    }
        //'Access-Control-Allow-Origin': '*'}
    }).done(function (reponse) {
        //opens the window for admin 
        window.location.assign("Admin/admin_view_student.html")

    }).fail(function (error) {
        //opens the window to the student page
        window.location.assign("Student/student_view.html");
    })
};

//Function that shows user information if not ADMIN 
/* function userOverview(userInfo) {
    ///This runs the click only once
    $.ajax({
        url: "http://localhost:8080/MyInfo",
        type: 'get',
        headers: {Authorization: 'Bearer ' + userInfo.token
    }
        //'Access-Control-Allow-Origin': '*'}
    }).done(function (reponse) {
        //opens the window for admin 
       console.log("hello user")

    }).fail(function (error) {
        //opens the window to the student page
        console.log("goodbye user");
    })
}; */

//Function that lets administrator see student information 
/* function adminInfo(studentInfo) {
    ///This runs the click only once
    $("#searchingBtn").unbind("click").click(function (event) {
        event.preventDefault();
        let studentEmail = $("#studentEmail").val().trim();
        let studentID = $("#studenID").val().trim();

        if (email != "" && password != "") {
            //Triggers this call when correct email and password are inputted
            $.ajax({
                url: "http://localhost:8080/MyInfo",
                type: 'get',
                headers: {Authorization: 'Bearer ' + studentInfo.token},
                data: { email: studentEmail, userid: studentID},
            }).done(function (response) { 
                //ajax response to check if the user is an admin or student 
                var obj = JSON.stringify(response);
                console.log(obj);
              
            }).fail(function (error) {
                //Error message that shows user entered wrong password/email
                console.log("could not load");
            })
        }
    });
}; */


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



