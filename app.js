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
            url: "http://localhost:8080/userInfo?Email=" + studentEmail,
            type: 'get',
            //headers: { Authorization: 'Bearer ' + result },
            headers: { "Authorization": 'Bearer ' + localStorage.getItem('token') },
            //data: { email: studentEmail },
        }).done(function (response) {
            //ajax response to check if the user is an admin or student 
            studentCourse()
            response = JSON.parse(response);
            $("#error").addClass("wrongText");
            $("#student").text(response.FirstName + " " + response.LastName);
            $("#GPA").text(response.GPA);
            $("#catYear").text(response.CatalogYear);
            //Makes sure that correct classification shows based on hours
            if (response.Hours < 30) {
                $("#class").text("Freshman");
            } else if (response.Hours > 30 && response.Hours < 60) {
                $("#class").text("Sophomore");
            } else if (response.Hours > 60 && response.Hours < 90) {
                $("#class").text("Junior");
            } else {
                $("#class").text("Senior");
            }
            $("#hours").text(response.Hours);
            $("#ADhours").text(response.AdvancedHours);
            $("#hidden").removeClass("information");
        }).fail(function () {
            //Error message that shows user entered wrong password/email
            $("#error").removeClass("wrongText");
        })
    });
});

//displays student courses for student 
function studentCourse(){
    let studentEmail = $("#studentEmail").val().trim();
    $.ajax({
        url: "http://localhost:8080/MyAndAllCourses?Email=" + studentEmail,
        type: 'get',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).done(function (reponse) {
        //opens the window for admin 
        //window.location.assign("Admin/admin_view_student.html")
        var obj = JSON.stringify(reponse);
        console.log(obj);
    }).fail(function (error) {
        //opens the window to the student page
        console.log("failure")
    })
}










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



