$(document).ready(function(){
  $('div#content > table#layout div.item').live('click', function(){
    text = $(this).attr('id').replace(/[a-zA-Z_]+/,"");
    $(this).fadeOut().fadeIn();
    chrome.extension.sendRequest({'text' : text});
  });
});
