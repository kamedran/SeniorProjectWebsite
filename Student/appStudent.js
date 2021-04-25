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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
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
            console.log("completed")
        }).fail(function (error) {
            //shows you failed
            console.log(courseName)
        })
    });
});