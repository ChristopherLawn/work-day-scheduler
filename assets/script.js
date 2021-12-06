$(document).ready(function() {
    // Style site description
    $(".lead").css('color','wheat');

    // Display & style current day & local time
    $("#today").text(moment().format('LLL'));
    $("#today").css({'color': 'greenyellow', 'font-size': '25px'});

    var now = moment();
    console.log(now);

    // function timeCheck() {
    //     var currentTime = moment().hour();
    // };

    // Functions to save hourly task descriptions to localStorage
    $("#8save").click(function() {
        var eightInput = $("#8text").val();
        localStorage.setItem("eightInput",eightInput);
    });
    $("#8am #8text").val(localStorage.getItem("eightInput"));

    $("#9save").click(function() {
        var nineInput = $("#9text").val();
        localStorage.setItem("nineInput",nineInput);
    });
    $("#9am #9text").val(localStorage.getItem("nineInput"));

    $("#10save").click(function() {
        var tenInput = $("#10text").val();
        localStorage.setItem("tenInput",tenInput);
    });
    $("#10am #10text").val(localStorage.getItem("tenInput"));

    $("#11save").click(function() {
        var elevenInput = $("#11text").val();
        localStorage.setItem("elevenInput",elevenInput);
    });
    $("#11am #11text").val(localStorage.getItem("elevenInput"));

    $("#12save").click(function() {
        var twelveInput = $("#12text").val();
        localStorage.setItem("twelveInput",twelveInput);
    });
    $("#12pm #12text").val(localStorage.getItem("twelveInput"));

    $("#1save").click(function() {
        var oneInput = $("#1text").val();
        localStorage.setItem("oneInput",oneInput);
    });
    $("#1pm #1text").val(localStorage.getItem("oneInput"));

    $("#2save").click(function() {
        var twoInput = $("#2text").val();
        localStorage.setItem("twoInput",twoInput);
    });
    $("#2pm #2text").val(localStorage.getItem("twoInput"));

    $("#3save").click(function() {
        var threeInput = $("#3text").val();
        localStorage.setItem("threeInput",threeInput);
    });
    $("#3pm #3text").val(localStorage.getItem("threeInput"));

    $("#4save").click(function() {
        var fourInput = $("#4text").val();
        localStorage.setItem("fourInput",fourInput);
    });
    $("#4pm #4text").val(localStorage.getItem("fourInput"));



});
