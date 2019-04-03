// ==UserScript==
// @name         StartSOLE Debugger
// @namespace    http://StartSOLE.org
// @version      1.0
// @description  Show/edit session token in cookie
// @author       Drew
// @match        *://localhost:8080/*
// @match        *://app.startsole.org/*
// @match        *://app.staging.startsole.org/*
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';
    var sessionToken = '';
    if (document.cookie) {
      try {
        sessionToken = document.cookie.split(';').filter(function(item) {
            return item.trim().indexOf('sessionToken=') == 0
        })[0].slice(14);
      } catch {
        sessionToken = ''
      }
    }

    var adminPanelHtml = '<div id="admin-panel" style="background: #ddd; z-index: 9999; position: fixed; top: 150px;right: 0;width: 350px; min-height: 100px; padding: 15px; border-radius: 5px;" class="center">ADMIN PANEL<hr><br><div class="row"><form class="col s12"><input id="sessionToken" type="text" placeholder="no session token" value="' + sessionToken + '"><label for="sessionToken">session token</label><br><br><button type="submit" class="btn" onClick="setSessionTokenInCookie(event);">Update Session Token</button></form></div><a id="admin-panel-hide-button" href="#" style="font-size: .75em">hide</a></div>';
    var adminElement = document.createElement('div');
    adminElement.innerHTML = adminPanelHtml;
    document.body.append(adminElement);

$("#admin-panel").submit(function (event) {
    event.preventDefault();
    var sessionTokenNew = $('#sessionToken').val();
    document.cookie = 'sessionToken=; Max-Age=0';//remove the sessionToken from the cookie
    document.cookie = 'sessionToken='+sessionTokenNew; //save the sessionToken in the cookie
    location.reload();
  });
  $("#admin-panel-hide-button").click(function (event) {
    event.preventDefault();
    $("#admin-panel").hide();
  })


})(jQuery)
