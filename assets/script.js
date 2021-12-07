// Style site description
$(".lead").css('color','sandybrown');
$(".time-block").css('padding-bottom','2px');

// Use moment to display + style current day & local time in jumbotron
$("#today").text(moment().format('LLL'));
$("#today").css({'color': 'greenyellow', 'font-size': '25px'});

// Save hourly task descriptions to localStorage when "Save" button is clicked
$("#8save").click(function() {
    var eightInput = $("#8").val();
    localStorage.setItem("eightInput",eightInput);
});
$("#8am #8").val(localStorage.getItem("eightInput"));

$("#9save").click(function() {
    var nineInput = $("#9").val();
    localStorage.setItem("nineInput",nineInput);
});
$("#9am #9").val(localStorage.getItem("nineInput"));

$("#10save").click(function() {
    var tenInput = $("#10").val();
    localStorage.setItem("tenInput",tenInput);
});
$("#10am #10").val(localStorage.getItem("tenInput"));

$("#11save").click(function() {
    var elevenInput = $("#11").val();
    localStorage.setItem("elevenInput",elevenInput);
});
$("#11am #11").val(localStorage.getItem("elevenInput"));

$("#12save").click(function() {
    var twelveInput = $("#12").val();
    localStorage.setItem("twelveInput",twelveInput);
});
$("#12pm #12").val(localStorage.getItem("twelveInput"));

$("#1save").click(function() {
    var oneInput = $("#13").val();
    localStorage.setItem("oneInput",oneInput);
});
$("#1pm #13").val(localStorage.getItem("oneInput"));

$("#2save").click(function() {
    var twoInput = $("#14").val();
    localStorage.setItem("twoInput",twoInput);
});
$("#2pm #14").val(localStorage.getItem("twoInput"));

$("#3save").click(function() {
    var threeInput = $("#15").val();
    localStorage.setItem("threeInput",threeInput);
});
$("#3pm #15").val(localStorage.getItem("threeInput"));

$("#4save").click(function() {
    var fourInput = $("#16").val();
    localStorage.setItem("fourInput",fourInput);
});
$("#4pm #16").val(localStorage.getItem("fourInput"));


// Function to check work day scheduler hours against current time
function checkHours() {
        
    // Use Moment JS to set current time
    var currentHour = moment().hour();

    // Use Moment JS to check if the current schedule hour of the day is past, present, or future
    var timeBlocks = $(".description");
    for (var i = 0; i < timeBlocks.length; i++) {
        var hourID = timeBlocks[i].id;

        var hourNumber = document.getElementById(timeBlocks[i].id);

        if (hourID < currentHour) {
            $(hourNumber).addClass("past");
        };

        if (hourID === currentHour) {
            $(hourNumber).addClass("present")
        };

        if (hourID > currentHour) 
            $(hourNumber).addClass("future")
        };
};

// Run the function constantly to check the time
checkHours();
