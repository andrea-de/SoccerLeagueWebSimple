    var today = new Date();
    var today1000 = Date.parse(today);
    var birthdate = null;
    
function check() {
    console.log();
}

function checkS(school) {
    if (document.forms.myForm.schoolNear.value == document.forms.myForm.schoolLessNear.value) {
        alert("Please select a different school as the Second Closest.")
        school.checked = false;
    } else {}
}

function uncheck2School() {
    length = document.forms.myForm.schoolNear.length;
    for (i=0;i< length;i++) {
    document.forms.myForm.schoolLessNear[i].checked = false;
    }
}
function checkZip() {
    var zipCode = document.getElementsByName("zip")[0].value;
    if (zipCode.length < 4) {
        alert("Too short!!!");
        zipCode = document.getElementsByName("zip")[0].value = null;
    } else {
        true;
    }
}
function bDay() {
    birthdate = document.forms.myForm.bdate.value;
    var aliveMil = Date.parse(birthdate);
    var yearsAlive = Math.round((today1000-aliveMil) / (1000*60*60*24*365));
    if ( yearsAlive > 3 && yearsAlive < 13 ) {
        true;
    }
    else {
        alert("Players must be between the ages of 4 - 12.");
        document.forms.myForm.bdate.value = null;
    }
    
}
/*
    checkDate();
    checkSchools();
    checkUniform();
    checkPhone();
    checkEmail();

*/