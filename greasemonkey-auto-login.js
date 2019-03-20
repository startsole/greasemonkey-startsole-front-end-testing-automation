// ==UserScript==
// @name         StartSOLE Login with Test Account
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Login to StartSOLE with a trow-away testing account
// @author       Drew
// @match        *://app.startsole.org/login*
// @match        *://app.staging.startsole.org/login*
// @match        *://localhost:8080/login*
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';
    const testData = {
        username: '', //add your username here (email address)
        password: '' //add your password here
    };

    window.fillOut = function () {

        $('#email').val(testData.username);
        $('#password').val(testData.password)
        $('#login').click();

    }

    var toastHTML = '<span>Want to login with ' + testData.username + '?</span><button class="btn-flat toast-action" onClick="window.fillOut()">Yes</button> <button class="btn-flat toast-action" onClick="M.Toast.dismissAll();">No thanks</button>';
    M.toast({html: toastHTML, displayLength: 10000});

})(jQuery);
