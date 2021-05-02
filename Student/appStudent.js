//FUNCTION TO ADD INTRO TO COMPUTER SCIENCE 
$(document).ready(function () {
    let semester = document.getElementById("semester1");
    let grades = document.getElementById("grades1");
    let course = document.getElementById("course1")
    let courseNum = document.getElementById("courseNum1")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn1").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning1").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting1").removeClass("removingbox");
        })
    });
});

//FUNCTION TO ENGINEERING COMPUTER SCIENCE LAB 1
$(document).ready(function () {
    let semester = document.getElementById("semester2");
    let grades = document.getElementById("grades2");
    let course = document.getElementById("course2")
    let courseNum = document.getElementById("courseNum2")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn2").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning2").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting2").removeClass("removingbox");
        })
    });
});

//FUNCTION TO ENGINEERING COMPUTER SCIENCE 1
$(document).ready(function () {
    let semester = document.getElementById("semester3");
    let grades = document.getElementById("grades3");
    let course = document.getElementById("course3")
    let courseNum = document.getElementById("courseNum3")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn3").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning3").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting3").removeClass("removingbox");
        })
    });
});

//FUNCTION TO COMPUTER ORGANIZATION AND ASSEMBLY 
$(document).ready(function () {
    let semester = document.getElementById("semester4");
    let grades = document.getElementById("grades4");
    let course = document.getElementById("course4")
    let courseNum = document.getElementById("courseNum4")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn4").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning4").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting4").removeClass("removingbox");
        })
    });
});

//FUNCTION TO Programming in Unix
$(document).ready(function () {
    let semester = document.getElementById("semester5");
    let grades = document.getElementById("grades5");
    let course = document.getElementById("course5")
    let courseNum = document.getElementById("courseNum5")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn5").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning5").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting5").removeClass("removingbox");
        })
    });
});

//FUNCTION TO CS 2
$(document).ready(function () {
    let semester = document.getElementById("semester6");
    let grades = document.getElementById("grades6");
    let course = document.getElementById("course6")
    let courseNum = document.getElementById("courseNum6")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn6").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning6").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting6").removeClass("removingbox");
        })
    });
});

//FUNCTION TO FOUNDATIONS OF CS
$(document).ready(function () {
    let semester = document.getElementById("semester7");
    let grades = document.getElementById("grades7");
    let course = document.getElementById("course7")
    let courseNum = document.getElementById("courseNum7")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn7").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning7").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting7").removeClass("removingbox");
        })
    });
});

//FUNCTION TO CS3
$(document).ready(function () {
    let semester = document.getElementById("semester8");
    let grades = document.getElementById("grades8");
    let course = document.getElementById("course8")
    let courseNum = document.getElementById("courseNum8")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn8").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning8").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting8").removeClass("removingbox");
        })
    });
});

//FUNCTION TO ORGANIZATION OF LANG
$(document).ready(function () {
    let semester = document.getElementById("semester9");
    let grades = document.getElementById("grades9");
    let course = document.getElementById("course9")
    let courseNum = document.getElementById("courseNum9")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn9").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning9").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting9").removeClass("removingbox");
        })
    });
});

//FUNCTION TO Software Eng 1
$(document).ready(function () {
    let semester = document.getElementById("semester10");
    let grades = document.getElementById("grades10");
    let course = document.getElementById("course10")
    let courseNum = document.getElementById("courseNum10")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn10").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning10").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting10").removeClass("removingbox");
        })
    });
});

//FUNCTION TO AUTOMATA
$(document).ready(function () {
    let semester = document.getElementById("semester11");
    let grades = document.getElementById("grades11");
    let course = document.getElementById("course11")
    let courseNum = document.getElementById("courseNum11")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn11").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning11").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting11").removeClass("removingbox");
        })
    });
});

//FUNCTION TO SENIOR PROJECT
$(document).ready(function () {
    let semester = document.getElementById("semester12");
    let grades = document.getElementById("grades12");
    let course = document.getElementById("course12")
    let courseNum = document.getElementById("courseNum12")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn12").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning12").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting12").removeClass("removingbox");
        })
    });
});

//FUNCTION TO JAVA
$(document).ready(function () {
    let semester = document.getElementById("semester13");
    let grades = document.getElementById("grades13");
    let course = document.getElementById("course13")
    let courseNum = document.getElementById("courseNum13")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn13").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning13").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting13").removeClass("removingbox");
        })
    });
});

//FUNCTION TO VISUAL BASIC
$(document).ready(function () {
    let semester = document.getElementById("semester14");
    let grades = document.getElementById("grades14");
    let course = document.getElementById("course14")
    let courseNum = document.getElementById("courseNum14")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn14").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning14").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting14").removeClass("removingbox");
        })
    });
});

//FUNCTION TO C#
$(document).ready(function () {
    let semester = document.getElementById("semester15");
    let grades = document.getElementById("grades15");
    let course = document.getElementById("course15")
    let courseNum = document.getElementById("courseNum15")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn15").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning15").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting15").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DATABASE DESIGN 
$(document).ready(function () {
    let semester = document.getElementById("semester16");
    let grades = document.getElementById("grades16");
    let course = document.getElementById("course16")
    let courseNum = document.getElementById("courseNum16")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn16").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning16").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting16").removeClass("removingbox");
        })
    });
});

//FUNCTION TO OPERATING SYSTEM 
$(document).ready(function () {
    let semester = document.getElementById("semester17");
    let grades = document.getElementById("grades17");
    let course = document.getElementById("course17")
    let courseNum = document.getElementById("courseNum17")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn17").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning17").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting17").removeClass("removingbox");
        })
    });
});

//FUNCTION TO COMPUTER ARCHITECTURE
$(document).ready(function () {
    let semester = document.getElementById("semester18");
    let grades = document.getElementById("grades18");
    let course = document.getElementById("course18")
    let courseNum = document.getElementById("courseNum18")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn18").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning18").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting18").removeClass("removingbox");
        })
    });
});

//FUNCTION TO COMPUTER NETWORKS
$(document).ready(function () {
    let semester = document.getElementById("semester19");
    let grades = document.getElementById("grades19");
    let course = document.getElementById("course19")
    let courseNum = document.getElementById("courseNum19")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn19").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning19").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting19").removeClass("removingbox");
        })
    });
});

//FUNCTION TO INTERNSHIP
$(document).ready(function () {
    let semester = document.getElementById("semester20");
    let grades = document.getElementById("grades20");
    let course = document.getElementById("course20")
    let courseNum = document.getElementById("courseNum20")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn20").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning20").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting20").removeClass("removingbox");
        })
    });
});

//FUNCTION TO INTERNET PROGRAMMING
$(document).ready(function () {
    let semester = document.getElementById("semester21");
    let grades = document.getElementById("grades21");
    let course = document.getElementById("course21")
    let courseNum = document.getElementById("courseNum21")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn21").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning21").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting21").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL CLASS
$(document).ready(function () {
    let semester = document.getElementById("semester22");
    let grades = document.getElementById("grades22");
    let course = document.getElementById("course22")
    let courseNum = document.getElementById("courseNum22")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn22").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning22").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting22").removeClass("removingbox");
        })
    });
});

//FUNCTION TO TECHNICAL COMM
$(document).ready(function () {
    let semester = document.getElementById("semester23");
    let grades = document.getElementById("grades23");
    let course = document.getElementById("course23")
    let courseNum = document.getElementById("courseNum23")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn23").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning23").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting23").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester24");
    let grades = document.getElementById("grades24");
    let course = document.getElementById("course24")
    let courseNum = document.getElementById("courseNum24")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn24").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning24").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting24").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester25");
    let grades = document.getElementById("grades25");
    let course = document.getElementById("course25")
    let courseNum = document.getElementById("courseNum25")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn25").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning25").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting25").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester26");
    let grades = document.getElementById("grades26");
    let course = document.getElementById("course26")
    let courseNum = document.getElementById("courseNum26")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn26").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning26").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting26").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester27");
    let grades = document.getElementById("grades27");
    let course = document.getElementById("course27")
    let courseNum = document.getElementById("courseNum27")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn27").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning27").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting27").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester28");
    let grades = document.getElementById("grades28");
    let course = document.getElementById("course28")
    let courseNum = document.getElementById("courseNum28")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn28").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning28").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting28").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester44");
    let grades = document.getElementById("grades44");
    let course = document.getElementById("course44")
    let courseNum = document.getElementById("courseNum44")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn44").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning44").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting44").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester44");
    let grades = document.getElementById("grades44");
    let course = document.getElementById("course44")
    let courseNum = document.getElementById("courseNum44")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn44").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning44").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting44").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester45");
    let grades = document.getElementById("grades45");
    let course = document.getElementById("course45")
    let courseNum = document.getElementById("courseNum45")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn45").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning45").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting45").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester50");
    let grades = document.getElementById("grades50");
    let course = document.getElementById("course50")
    let courseNum = document.getElementById("courseNum50")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn50").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning50").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting50").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester51");
    let grades = document.getElementById("grades51");
    let course = document.getElementById("course51")
    let courseNum = document.getElementById("courseNum51")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn51").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning51").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting51").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester52");
    let grades = document.getElementById("grades52");
    let course = document.getElementById("course52")
    let courseNum = document.getElementById("courseNum52")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn52").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning52").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting52").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester53");
    let grades = document.getElementById("grades53");
    let course = document.getElementById("course53")
    let courseNum = document.getElementById("courseNum53")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn53").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning53").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting53").removeClass("removingbox");
        })
    });
});

//FUNCTION TO DIGITAL LAB
$(document).ready(function () {
    let semester = document.getElementById("semester46");
    let grades = document.getElementById("grades46");
    let course = document.getElementById("course46")
    let courseNum = document.getElementById("courseNum46")
    let completed = "Complete";
    ///This runs the click only once
    $("#coursesBtn46").unbind("click").click(function (event) {
        event.preventDefault();
        if (semester.value == 1) {
            semester = "Fall"
        } else if (semester.value == 2) {
            semester = "Spring"
        } else if (semester.value == 3) {
            semester = "Summer 1"
        } else {
            semester = "Summer 2"
        }
        if (grades.value == 1) {
            grades = "A"
        } else if (grades.value == 2) {
            grades = "B"
        } else if (grades.value == 3) {
            grades = "C"
        } else if (grades.value == 4) {
            grades = "D"
        } else {
            grades = "F"
        }
        let courseName = courseNum.textContent + " " + course.textContent;

        $.ajax({
            url: "http://localhost:8080/selfadd/StudentCourses",
            type: 'post',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: { Semester: semester, Grade: grades, CourseCompleteness: completed, CourseName: courseName },
        }).done(function (response) {
            //show title of courses
            $("#warning46").removeClass("addingbox");
        }).fail(function (error) {
            //shows you failed
            $("#alerting46").removeClass("removingbox");
        })
    });
});