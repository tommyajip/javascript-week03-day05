$(document).ready(function () {
    function validateUsername() {
        let username = $('#username').val();
        if (username == '') {
            $('#usernameHelpBlock').html('* required');
            return false;
        } else if (username.length <= 6) {
            $('#usernameHelpBlock').html('Username must be at least 6 characters long.');
            return false;
        } else {
            $('#usernameHelpBlock').html('');
            return true;
        }
    }

    function validatePassword() {
        let password = $('#password').val();
        if (password == '') {
            $('#passwordHelpBlock').html('* required');
            return false;
        } else if (password.length <= 5 || password.length >= 20) {
            $('#passwordHelpBlock').html('Your password must be 8-20 characters long.');
            return false;
        } else {
            $('#passwordHelpBlock').html('');
            return true;
        }
    }

    function validateConfirmPassword() {
        let password = $('#password').val();
        let passwordConfirm = $('#password-confirm').val();
        if (password == '') {
            $('#passwordConfirmHelpBlock').html('* required');
            return false;
        } else if (password != passwordConfirm) {
            $('#passwordConfirmHelpBlock').html('Password must be the same.');
            return false;
        } else {
            $('#passwordConfirmHelpBlock').html('');
            return true;
        }
    }

    function ValidateRegex(email) {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());

    }
    function validateEmail() {
        let email = $('#email').val();
        if (email == '') {
            $('#emailHelpBlock').html('* required');
            return false;
        } else if (!ValidateRegex(email)) {
            $('#emailHelpBlock').html('Sorry, email is not valid.');
            return false;
        } else {
            $('#emailHelpBlock').html('');
            return true;
        }
    }

    function validateConfirmEmail() {
        let email = $('#email').val();
        let emailConfirm = $('#email-confirm').val();
        if (email == '') {
            $('#emailConfirmHelpBlock').html('* required');
            return false;
        } else if (email != emailConfirm) {
            $('#emailConfirmHelpBlock').html('Email must be the same.');
            return false;
        } else {
            $('#emailConfirmHelpBlock').html('');
            return true;
        }
    }

    $('#btn-submit').click(function () {
        let isValidUsername = validateUsername();
        let isValidPassword = validatePassword();
        let isValidConfirmPassword = validateConfirmPassword();
        let isValidEmail = validateEmail();
        let isValidConfirmEmail = validateConfirmEmail();
        if ((isValidUsername == true) && (isValidPassword == true) && (isValidConfirmPassword == true) && (isValidEmail == true) && (isValidConfirmEmail == true)) {
            return true;
        } else {
            return false;
        }
    });
});