var getRepos = require('./../js/github.js').getRepos;
var getUser= require('./../js/github.js').getUser;
var apiKey = require('./../.env').apiKey;



$(document).ready(function() {
  $(".userGit").hide();
    $('#userInfo').submit(function(event) {
      event.preventDefault();
      $(".showName").empty();
      $(".showRepo").empty();
      $(".userGit").show();
      getUser();
      getRepos();
    });
  });


  // $('.showName').text(userName);
