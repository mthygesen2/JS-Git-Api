var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;



$(document).ready(function() {
    $('#userInfo').submit(function(event) {
      event.preventDefault();
      userName = $('#userName').val();
      $('.showName').text(userName);
      getRepos();
    });
  });
