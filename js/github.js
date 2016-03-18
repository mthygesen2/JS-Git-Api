var apiKey = require('./../.env').apiKey;


exports.getUser = function(){
  userName = $('#userName').val();
  $("#username").val("");
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
      console.log(response);
    $('.showName').append (
      "<img src='" + response.avatar_url + "' alt='picture of user'/>" +
      "<h1>" + response.name + "</h1>" +
      "<h4>" + response.login + "</h4>" +
      "<h4>" + response.location + "</h4>"
    );
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.getRepos = function(){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey + '&per_page=9999').then(function(response){
    for(var i = 0; i < response.length; i ++) {
    $('.showRepo').append(
      "<li>" + "<a href=" + response[i].html_url + ">" + response[i].name + "</a></li>" +
      "<p>" + response[i].description + "</p>"
    );
  }
    console.log(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};
