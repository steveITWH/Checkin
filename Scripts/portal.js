
$(document).bind("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
});


$(document).ready(function () {
    loadKeyboard();
    //$.validator.unobtrusive.parse()
});
//$(document).ajaxSuccess(function () {
//    keyboardLoaded();
//    //$(document).validator.unobtrusive.parse()
//});

function toggleDeleteButton() {

    var deleteButton = $(".deleteButtonContainer");
    var inputWithDeleteButton = $(".withDeleteButton input");

    if (inputWithDeleteButton.val() == "") {
        
        deleteButton.hide();
    }
    else {
        
        deleteButton.show();
    }

}

function loadKeyboard() {

    var deleteButton = $(".deleteButtonContainer");

    if (deleteButton.length > 0) {

        var inputWithDeleteButton = $(".withDeleteButton input");

        toggleDeleteButton(inputWithDeleteButton, deleteButton);

        inputWithDeleteButton.on("change keypress paste focus textInput input", toggleDeleteButton);
    }

    $(".applicationKeyboard a").bind("click", function (event, ui) {

        var inputField = $("input[type=text]");

        inputField.val(inputField.val() + $(this).text());
    });

    $(".deleteButtonContainer").bind("click", function (event, ui) {

        var inputField = $("input[type=text]");

        var inputValue = inputField.val();

        inputField.val(inputValue.substring(0, inputValue.length - 1));
    });

    $(".spacebarButtonContainer").bind("click", function (event, ui) {

        var inputField = $("input[type=text]");

        inputField.val(inputField.val() + ' ');
    });


}


//var username = <?php $_GET['visitId']; ?>;
var username = 'P4575923'
var password = '';
var gender = '';
var day = '';
var month = '';
var year = '1947';

function selectGender(sGen) {
    gender = sGen;
    pnlGender.style.display = 'none';
    pnlMonth.style.display = 'block';
}

function selectMonth(sMonth) {
    month = sMonth;
    pnlMonth.style.display = 'none';
    pnlDay.style.display = 'block';
}

function selectDay() {
    day = dayInMonthInput.value;
    password = getPassword();
    auth_user.value = username;
    auth_pass.value = password;
}

function getPassword() {
    return gender + year + month + day;
}

function updateField(fieldName, value) {

    var field = $("." + fieldName);

    field.val(field.val() + value);


}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}




function updateDay(num) {
    if (dayInMonthInput.value < 4 && dayInMonthInput.value.length < 2) {

        dayInMonthInput.value += num;
    }
    else {
        dayInMonthInput.value = num;
    }
    //dayInMonthInput.value = pad(dayInMonthInput.value, 2);
    //selectDay();
}

