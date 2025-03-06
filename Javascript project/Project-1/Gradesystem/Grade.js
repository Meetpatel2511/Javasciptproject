function calculatepercentage() {
    let math = Number(document.getElementById("math").value);
    let english = Number(document.getElementById("english").value);
    let science = Number(document.getElementById("science").value);
    let hindi = Number(document.getElementById("hindi").value);
    let totalmarks = 400;
    let obtainedmarks = math + english + science + hindi;
    let percentage = (obtainedmarks / totalmarks) * 100;

    document.getElementById("obtainedmarks").value = obtainedmarks;


    document.getElementById("percentage").value = percentage;
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    document.getElementById("grade").value = grade;

    let result;

    if (percentage >= 35) {
        result = "Pass";
    } else {
        result = "Fail";
    }
    document.getElementById("result").value = result;
    document.getElementById("result")
    let res = document.getElementById("result");
    res.innerText = `Result: ${obtainedmarks} ${percentage}% ${grade} ${result}`;

    
}
