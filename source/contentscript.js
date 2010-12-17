chrome.extension.sendRequest({'action': 'pageStart'});

$(document).ready(function(){
  $('.item').live('click', function(e){
    if (e.shiftKey) {
      var storyId = $(this).attr('id').replace(/.*?(\d+).*/,"$1");
      var text    = "Copied: " + storyId;

      $('<div id="copy-msg">').css({ color: 'black' }).html(text).prependTo('#status');
      $('#status').fadeIn(10).delay(1000).fadeOut(500, function() { $('#copy-msg').remove(); })
      chrome.extension.sendRequest({'text' : storyId});
    }
  });
});
