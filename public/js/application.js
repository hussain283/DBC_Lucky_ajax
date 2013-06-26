$(document).ready(function() {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  $('#dice_form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: '/rolls',
      type: 'post',
      data: $('#input').serialize(),
      dataType: 'json'
    }).done(function(data){
      var value = data.roll.value;
      $('#die').find('img').remove();
      $('#die').append('<img src=/' + value + '.png title=' + value + ' alt="the roll">');
    });
  });

});
