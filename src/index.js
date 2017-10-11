require('webpack-jquery-ui/effects');
require('webpack-jquery-ui/tabs');

$( function() {
  $( "#tabs" ).tabs({ show: { effect: "blind", duration: 400 } });

    showHide();
});

function showHide() {
  // Show/hide function for faculty page
  var $showhide = $('.show_hide'), $bio = $('.bio');
  $bio.hide();
  $showhide.click(function(e) {
      $(this).text(($(this).text() === 'Read less' ? 'Read more...' : 'Read less')).next('.bio').slideToggle(300);
      e.preventDefault();
  });
}
