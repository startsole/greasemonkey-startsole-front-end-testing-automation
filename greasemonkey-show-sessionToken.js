// ==UserScript==
// @name         StartSOLE Debugger
// @namespace    http://StartSOLE.org
// @version      1.1
// @description  Show/edit session token in cookie
// @author       Drew
// @match        *://localhost:8080/*
// @match        *://app.startsole.org/*
// @match        *://app.startsole.org/*/login
// @match        *://app.staging.startsole.org/*
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';
    //get the sessionToken & language from the cookie
    var sessionToken = '';
    var language = 'en'; //default
    if (document.cookie) {
      try {
        sessionToken = document.cookie.split(';').filter(function(item) {
            return item.trim().indexOf('sessionToken=') == 0
        })[0].slice(14);
      } catch {
        sessionToken = '';
      }

      try {
        language = document.cookie.split(';').filter(function(item) {
            return item.trim().indexOf('language=') == 0
        })[0].slice(10);
      } catch {
        language = 'en';
      }

    }

    var adminPanelHtml = '<div id="admin-panel" style="background: #ddd; z-index: 9999; position: fixed; top: 150px;right: 0;width: 350px; min-height: 100px; padding: 15px; border-radius: 5px;" class="center">ADMIN PANEL <hr> <form class="row"> <div class="input-field col s12"> <input id="admin-panel-sessionToken" type="text" placeholder="no session token" value="no sessionToken"> <label for="admin-panel-sessionToken" class="active">session token</label> </div> <div class="input-field col s12"> <select id="admin-panel-language"> <option value="en">English</option> <option value="es">Español (Colombia)</option> </select> <label for="admin-panel-language">Language</label> </div> <button type="submit" class="btn">Update Cookie</button> </form> <a id="admin-panel-hide-button" href="#" style="font-size: .75em">hide</a> </div>';
    var adminElement = document.createElement('div');
    adminElement.innerHTML = adminPanelHtml;
    document.body.append(adminElement);
    $('#admin-panel-sessionToken').val(sessionToken); //add sessionToken to admin panel from cookie
    $('#admin-panel-language').val(language); //add language to admin panel from cookie
    //initiliaze dropdown
    $(document).ready(function(){
        $('select').formSelect();
  });
$("#admin-panel").submit(function (event) {
    event.preventDefault();
    //update cookie with data from form
    var sessionTokenNew = $('#admin-panel-sessionToken').val();
    var language = $('#admin-panel-language').val();

    document.cookie = 'sessionToken=; Max-Age=0;path=/';//remove the sessionToken from the cookie
    document.cookie = 'sessionToken='+sessionTokenNew+'path=/'; //save the sessionToken in the cookie
    document.cookie = 'language=; Max-Age=0;path=/';//remove the language from the cookie
    document.cookie = 'language='+language + 'path=/'; //save the language in the cookie
    location.reload();
  });
  $("#admin-panel-hide-button").click(function (event) {
    event.preventDefault();
    $("#admin-panel").hide();
  })


})(jQuery)
