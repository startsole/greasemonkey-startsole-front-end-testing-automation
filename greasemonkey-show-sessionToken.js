// ==UserScript==
// @name         Show cookie as a popup on any StartSOLE page
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Show sessionToken for a startSole session
// @author       Drew
// @match        *://localhost:8080/*
// @match        *://app.startsole.org/*
// @match        *://app.staging.startsole.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //show cookie:
    var sessionToken = document.cookie.split(';').filter(function(item) {
        return item.trim().indexOf('sessionToken=') == 0
    })[0].slice(14);
    var toastHTML = "<span>";
    if (sessionToken === "") {
        //no token defined, so output this
        toastHTML += 'You are currently logged out. No sessionToken currently defined.';
    } else {
        //token is defined, so output it
        toastHTML += 'Your current sessionToken from the cookie is ' + sessionToken;
    }

    toastHTML += '</span>';
    toastHTML += '<button class="btn-flat toast-action" onClick="M.Toast.dismissAll();">Dismiss all</button>';
    M.toast({html: toastHTML, displayLength: 10000});
})();
