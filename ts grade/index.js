function getGrade(marks) {
    if (marks >= 60) {
        return "First Division";
    }
    else if (marks >= 45 && marks < 60) {
        return "Second Division";
    }
    else if (marks >= 33 && marks < 45) {
        return "Third Division";
    }
    else {
        return "Fail";
    }
}
console.log(getGrade(65));
console.log(getGrade(54));
console.log(getGrade(43));
console.log(getGrade(30));
