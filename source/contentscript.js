chrome.extension.sendRequest({'action': 'pageStart'});

$(document).ready(function(){
  $('.item').live('click', function(e){
    if ((e.altKey) || (e.shiftKey && e.ctrlKey)) {
      var storyId = $(this).attr('id').replace(/.*?(\d+).*/,"$1");
      var storyLink = 'https://www.pivotaltracker.com/story/show/'+storyId;
      var text    = "Copied link: " + storyLink;

      $('<div id="copy-msg">').css({ color: 'black' }).html(text).prependTo('#status');
      $('#status').fadeIn(10).delay(1000).fadeOut(500, function() { $('#copy-msg').remove(); })
      chrome.extension.sendRequest({'text' : storyLink});
    } else if (e.shiftKey) {
      var storyId = $(this).attr('id').replace(/.*?(\d+).*/,"$1");
      var text    = "Copied: " + storyId;

      $('<div id="copy-msg">').css({ color: 'black' }).html(text).prependTo('#status');
      $('#status').fadeIn(10).delay(1000).fadeOut(500, function() { $('#copy-msg').remove(); })
      chrome.extension.sendRequest({'text' : storyId});
    }
    return false;
  });
});
