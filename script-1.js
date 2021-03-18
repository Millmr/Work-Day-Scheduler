//Create a variable for the date that inclueds hour,month,year,hour,minutes and seconds.
var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(date);

//Create a function that will show the date as text on the Document.
function update(){
    var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(date);
};
//Call the update function.
update();
//setInterval with the update pluss a second to make the time run continuously.
setInterval(update, 1000);

//Create a function that will change the color of the rows by what time it is. 
function rowColors() {
    var hour = moment().format("HH");
    console.log(hour);
    if (hour > 9) {
        $("#com9am").addClass("past");
    } else if (hour >= 9 && hour < 10) {
        $("#com9am").addClass("present");
    } else if (hour < 9) {
        $("#com9am").addClass("future");
    }
    if (hour > 10) {
        $("#com10am").addClass("past");
    } else if (hour >= 10 && hour < 11) {
        $("com#10am").addClass("present");
    } else if (hour < 10) {
        $("com#10am").addClass("future");
    }
    if (hour > 11) {
        $("#com11am").addClass("past");
    } else if (hour >= 11 && hour < 12) {
        $("#com11am").addClass("present");
    } else if (hour < 11) {
        $("#com11am").addClass("future");
    }
    if (hour > 12) {
        $("#com12pm").addClass("past");
    } else if (hour >= 12 && hour < 1) {
        $("#com12pm").addClass("present");
    } else if (hour < 12) {
        $("#com12pm").addClass("future");
    }
    if (hour > 13) {
        $("#com1pm").addClass("past");
    } else if (hour >= 13 && hour < 14) {
        $("#com1pm").addClass("present");
    } else if (hour < 13) {
        $("#com1pm").addClass("future");
    }
    if (hour > 14) {
        $("#com2pm").addClass("past");
    } else if (hour >= 14 && hour < 15) {
        $("#com2pm").addClass("present");
    } else if (hour < 15) {
        $("#com2pm").addClass("future");
    }
    if (hour > 15) {
        $("#com3pm").addClass("past");
    } else if (hour >= 15 && hour < 16) {
        $("#com3pm").addClass("present");
    } else if (hour < 16) {
        $("#com3pm").addClass("future");
    }
    if (hour > 16) {
        $("#com4pm").addClass("past");
    } else if (hour >= 16 && hour < 17) {
        $("#com4pm").addClass("present");
    } else if (hour < 16) {
        $("#com4pm").addClass("future");
    }
    if (hour > 17) {
        $("#com5pm").addClass("past");
    } else if (hour >= 17 && hour < 18) {
        $("#com5pm").addClass("present");
    } else if (hour < 17) {
        $("#com5pm").addClass("future");
    }
}

//Make an onload function to keep anything saved when the page is refreshed.
window.onload = function(){
    rowColors();
    nine();
    ten();
    eleven();
    twelve();
    one();
    two();
    three();
    four();
    five();
}

//Create functions that will store any input to the local storage and save it. 
function nine() {
    var input = document.querySelector("#com9am");
    var output = document.querySelector("#com9am");
    var saveBtn = document.querySelector("#button9am");

    saveBtn.addEventListener("click", save);

    output.textContent = localStorage.getItem("content");
    input.value = localStorage.getItem("content");

    function save() {
        localStorage.setItem("content", input.value);
        output.textContent = input.value;
    }
}

function ten() {
    var input2 = document.querySelector("#com10am");
    var output2 = document.querySelector("#com10am");
    var saveBtn2 = document.querySelector("#button10am");

    saveBtn2.addEventListener("click", save2);

    output2.textContent = localStorage.getItem("content2");
    input2.value = localStorage.getItem("content2");

    function save2() {
        localStorage.setItem("content2", input2.value);
        output2.textContent = input2.value;
    }
}

function eleven() {
    var input3 = document.querySelector("#com11am");
    var output3 = document.querySelector("#com11am");
    var saveBtn3 = document.querySelector("#button11am");

    saveBtn3.addEventListener("click", save3);

    output3.textContent = localStorage.getItem("content3");
    input3.value = localStorage.getItem("content3");

    function save3() {
        localStorage.setItem("content3", input3.value);
        output3.textContent = input3.value;
    }
}

function twelve() {
    var input4 = document.querySelector("#com12pm");
    var output4 = document.querySelector("#com12pm");
    var saveBtn4 = document.querySelector("#button12pm");

    saveBtn4.addEventListener("click", save4);

    output4.textContent = localStorage.getItem("content4");
    input4.value = localStorage.getItem("content4");

    function save4() {
        localStorage.setItem("content4", input4.value);
        output4.textContent = input4.value;
    }
}

function one() {
    var input5 = document.querySelector("#com1pm");
    var output5 = document.querySelector("#com1pm");
    var saveBtn5 = document.querySelector("#button1pm");

    saveBtn5.addEventListener("click", save5);

    output5.textContent = localStorage.getItem("content5");
    input5.value = localStorage.getItem("content5");

    function save5() {
        localStorage.setItem("content5", input5.value);
        output5.textContent = input5.value;
    }
}

function two() {
    var input6 = document.querySelector("#com2pm");
    var output6 = document.querySelector("#com2pm");
    var saveBtn6 = document.querySelector("#button2pm");

    saveBtn6.addEventListener("click", save6);

    output6.textContent = localStorage.getItem("content6");
    input6.value = localStorage.getItem("content6");

    function save6() {
        localStorage.setItem("content6", input6.value);
        output6.textContent = input6.value;
    }
}

function three() {
    var input7 = document.querySelector("#com3pm");
    var output7 = document.querySelector("#com3pm");
    var saveBtn7 = document.querySelector("#button3pm");

    saveBtn7.addEventListener("click", save7);

    output7.textContent = localStorage.getItem("content7");
    input7.value = localStorage.getItem("content7");

    function save7() {
        localStorage.setItem("content7", input7.value);
        output7.textContent = input7.value;
    }
}

function four() {
    var input8 = document.querySelector("#com4pm");
    var output8 = document.querySelector("#com4pm");
    var saveBtn8 = document.querySelector("#button4pm");

    saveBtn8.addEventListener("click", save8);

    output8.textContent = localStorage.getItem("content8");
    input8.value = localStorage.getItem("content8");

    function save8() {
        localStorage.setItem("content8", input8.value);
        output8.textContent = input8.value;
    }
}

function five() {
    var input9 = document.querySelector("#com5pm");
    var output9 = document.querySelector("#com5pm");
    var saveBtn9 = document.querySelector("#button5pm");

    saveBtn9.addEventListener("click", save9);

    output9.textContent = localStorage.getItem("content9");
    input9.value = localStorage.getItem("content9");

    function save9() {
        localStorage.setItem("content9", input9.value);
        output9.textContent = input9.value;
    }
}