var getRepos = require('./../js/github.js').getRepos;
var getUser= require('./../js/github.js').getUser;
var apiKey = require('./../.env').apiKey;



$(document).ready(function() {
  $(".userGit").hide();
    $('#userInfo').submit(function(event) {
      event.preventDefault();
      $(".userGit").show();
      getUser();
      getRepos();
    });
  });


  // $('.showName').text(userName);
