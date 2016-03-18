var getRepos = require('./../js/github.js').getRepos;
var getUser= require('./../js/github.js').getUser;
var apiKey = require('./../.env').apiKey;



$(document).ready(function() {
    $('#userInfo').submit(function(event) {
      event.preventDefault();
      getUser();
      getRepos();
    });
  });


  // $('.showName').text(userName);
