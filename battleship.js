'use strict';

$(document).ready();

var view = {
  //takes a string msg and displays it in messageArea
  displayMessage: function(msg) {
    var message = $('#messageArea');
    message.text(msg);
  },
  displayHit: function(location) {
    var td = document.getElementById(location);
    td.setAttribute('class', 'hit');
  },
  displayMiss: function(location) {
    var td = document.getElementById(location);
    td.setAttribute('class', 'miss');
  }
};

// view.displayMessage("BattleSHIP!!!!!");
// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
