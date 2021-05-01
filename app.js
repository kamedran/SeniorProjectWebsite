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
                url: "http://localhost:8080/api/login",
                type: 'get',
                //sends params
                data: { username: email, password: password }
            }).done(function (response) {
                //ajax response to check if the user is an admin or student 
                isAdmin(response);
                //saves token globally 
                localStorage.setItem('token', response.token);
                localStorage.setItem('email', email);
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
    var changedGPA;
    $("#searchingBtn").unbind("click").click(function (event) {

        //Empties out DOM from courses, grades and semesters
        $('.name').empty();
        $('.grade').empty();
        $('.semester').empty();

        event.preventDefault();
        let studentEmail = $("#studentEmail").val().trim();

        $.ajax({
            url: "http://localhost:8080/userInfo",
            type: 'get',
            headers: { "Authorization": 'Bearer ' + localStorage.getItem('token') },
            data: { Email: studentEmail },
        }).done(function (response) {
            //removes error message when correct user is entered
            $("#error").addClass("wrongText");
            //Sends email to course function that will display all classes available 
            studentCourse(studentEmail)
            //shows student information 
            response = JSON.parse(response);
            $("#student").text(response.FirstName + " " + response.LastName);
            changedGPA = response.GPA.toFixed(2);
            $("#GPA").text(changedGPA);
            $("#catYear").text(response.CatalogYear);
            //Makes sure that correct classification shows based on hours
            if (response.Hours <= 29) {
                $("#class").text("Freshman");
            } else if (response.Hours >= 30 && response.Hours <= 59) {
                $("#class").text("Sophomore");
            } else if (response.Hours >= 60 && response.Hours <= 89) {
                $("#class").text("Junior");
            } else {
                $("#class").text("Senior");
            }
            $("#hours").text(response.Hours);
            $("#ADhours").text(response.AdvancedHours);
            //unhides the div to show information when button is clicked
            $("#hidden").removeClass("information");
        }).fail(function () {
            //Error message that shows user entered wrong password/email
            $("#error").removeClass("wrongText");
            $("#hidden").addClass("information");
            $("#title").addClass("removal");
        })
    });
});

//displays student courses for student 
function studentCourse(studentEmail) {
    $.ajax({
        url: "http://localhost:8080/MyAndAllCourses",
        type: 'get',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        data: { Email: studentEmail },
    }).done(function (response) {
        //show title of courses
        $("#title").removeClass("removal");
        response = JSON.parse(response);
        //goes through array to send to function that will display courses with grade and semester
        $.each(response, function (index, value) {
            //if a class has no grade, it will no display
            if (value.Grade != "n") {
                displayClasses(value.Name, value.Grade, value.Semester);
            }
        });
    }).fail(function (error) {
        //shows you failed
        console.log("failure")
    })
}

//displays the courses that students have completed based on the template
function displayClasses(courses, grades, semester) {
    //making copy of template
    let copy = $(".template").clone();
    //removing template class
    copy.removeClass("template");
    //replaces text with name of course
    copy.find(".name").text(courses);
    copy.find(".grade").text("Grade: " + grades);
    copy.find(".semester").text("Semester: " + semester);
    //displays list
    $("#course-list").append(copy);
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
                $("#exists").addClass("wrongText");
            }).fail(function (xhr, statusText, errorThrown) {
                if (xhr.status == 400) {
                    $("#missing").removeClass("wrongText");
                }
                if (xhr.status == 422) {
                    $("#exists").removeClass("wrongText");
                }

            })
        }
    });
});


//Function that lets administrator add courses
///This runs the click only once
$(document).ready(function () {
    $("#addcourse").unbind("click").click(function (event) {

        event.preventDefault();
        let courseName = $("#courseName").val().trim();
        let courseDept = $("#courseDept").val().trim();
        let institute = $("#institute").val().trim();
        let courseNum = $("#courseNum").val().trim();
        //let courseCredit = $("#courseCredit").val().trim();

        $.ajax({
            url: "http://localhost:8080/add/Course",
            type: 'post',
            headers: { "Authorization": 'Bearer ' + localStorage.getItem('token') },
            data: { CourseDept: courseDept, CourseNum: courseNum, Name: courseName, Institution: institute},
        }).done(function (response) {
                $("#error2").removeClass("wrongText");
                $("#error1").addClass("wrongText");
        }).fail(function (xhr, statusText, errorThrown) {
            if (xhr.status == 409) {
                $("#error1").removeClass("wrongText");
            }
        })
    });
});