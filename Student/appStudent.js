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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
        })
    });
});
