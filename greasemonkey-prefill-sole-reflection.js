// ==UserScript==
// @name         StartSOLE Example Reflection
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Fill out a StartSOLE lesson plan on the web app
// @author       Drew
// @match        *://app.startsole.org/soles/*/reflect*
// @match        *://app.staging.startsole.org/soles/*/reflect*
// @match        *://localhost:8080/soles/*/reflect*
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';
    const testData = {
        content_objective_why: 'Lorem ipsum',
        dok_why: 'Lorem ipsum',
        notes: 'Lorem ipsum'
    };

    window.fillOut = function () {
        $('.select-wrapper ul li').each(function(index){ $(this).click() });

        $('#content_objective_why').val(testData.content_objective_why);
        $('#dok_why').val(testData.dok_why);
        $('#notes').val(testData.notes);

    }

    var toastHTML = '<span>Want to fill this with example content?</span><button class="btn-flat toast-action" onClick="window.fillOut()">Yes</button> <button class="btn-flat toast-action" onClick="M.Toast.dismissAll();">No thanks</button>';
    M.toast({html: toastHTML, displayLength: 10000});


//    M.Toast.dismissAll();

})(jQuery);
