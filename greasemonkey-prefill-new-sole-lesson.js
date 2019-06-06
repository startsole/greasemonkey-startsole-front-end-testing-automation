// ==UserScript==
// @name         StartSOLE Example Lesson
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Fill out a StartSOLE lesson plan on the web app
// @author       Drew
// @match        *://app.startsole.org/soles/plan*
// @match        *://app.staging.startsole.org/soles/plan*
// @match        *://localhost:8080/soles/plan*
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';
    const testData = {
        question: 'Test question',
        plannedDate: 'Mar 22, 2022',
        plannedTime: '04:44 PM',
        duration: '60',
        grade: 'Third Grade',
        subject: 'English',
        numberOfStudents: '25',
        numberOfDevices: '5',
        numberOfGroups: '5',
        contentObjective: 'Allowing students to discover and explore interests related to a topic'
    };

    window.fillOutNewSole = function () {
        M.Toast.dismissAll();
        $('#question').val(testData.question);
        $('#planned_date').val(testData.plannedDate);
        $('#planned_time').val(testData.plannedTime);
        $('#duration').val(testData.duration);
        $('#soles-add-form > div:nth-child(3) > div:nth-child(5) > div > input').val(testData.grade);
        $('#soles-add-form > div:nth-child(3) > div:nth-child(6) > div > input').val(testData.subject);
        $('#num_students').val(testData.numberOfStudents);
        $('#num_devices').val(testData.numberOfDevices);
        $('#num_groups').val(testData.numberOfGroups);

        //click on the dropdowns
        $('.select-wrapper ul li').each(function(index){ $(this).click() })

        //click on checkboxes
        $('#soles-add-form > div:nth-child(3) > div:nth-child(13) > p:nth-child(3) > label').click();
        $('#soles-add-form > div:nth-child(3) > div:nth-child(15) > div > div:nth-child(3) > label').click();
        $('#soles-add-form > div:nth-child(3) > div:nth-child(14) > p:nth-child(3) > label').click()

    }

    var toastHTML = '<span>Want to fill this with example content?</span><button class="btn-flat toast-action" onClick="window.fillOutNewSole()">Yes</button> <button class="btn-flat toast-action" onClick="M.Toast.dismissAll();">No thanks</button>';
    M.toast({html: toastHTML, displayLength: 10000});


//    M.Toast.dismissAll();

})(jQuery);
