// ==UserScript==
// @name         Show cookie as a popup on any StartSOLE page
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Show sessionToken for a startSole session
// @author       Drew
// @match        *://localhost:8080/*
// @match        *://app.startsole.org/*
// @match        *://app.staging.startsole.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var toastHTML2 = "<span>";

    if (!document.cookie) {
        //no token defined, so output this
        toastHTML2 += 'You are currently logged out. No sessionToken currently defined.';
    } else {
        var sessionToken = document.cookie.split(';').filter(function(item) {
            return item.trim().indexOf('sessionToken=') == 0
        })[0];
        //token is defined, so output it
            //show cookie:

        toastHTML2 += 'Your current sessionToken from the cookie is ' + sessionToken;
    }

    toastHTML2 += '</span>';
    toastHTML2 += '<button class="btn-flat toast-action" onClick="M.Toast.dismissAll();">Dismiss all</button>';
    M.toast({html: toastHTML2, displayLength: 10000});
})();
