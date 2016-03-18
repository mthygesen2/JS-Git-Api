var apiKey = require('./../.env').apiKey;


exports.getRepos = function(){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i ++) {

    $('.showRepo').append(

      "<li>" + "<a href=" + response[i].html_url + ">" + response[i].name + "</a></li>" +
      "<ul><li>" + response[i].description + "</li></ul>"
    );
  }
    console.log(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};
