var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;



$(document).ready(function() {
    // getRepos();
    $('#userInfo').submit(function(event) {
      event.preventDefault();
      userName = $('#userName').val();
      $('.showName').text(userName);
    });
  });



// $(document).ready(function() {
//     $('#userName').val(""); //clears userName input
//     $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
//       console.log(response);
//     })  .fail(function(error) {
//         $('.showName').text(error.message);
//   });
// });
// });
