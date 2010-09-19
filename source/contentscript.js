chrome.extension.sendRequest({'action': 'pageStart'}); 

$(document).ready(function(){
  $('div#content > table#layout div.item div.notUnderEdit').live('click', function(){
    text = $(this).attr('id').replace(/.*?(\d+).*/,"$1");
    $(this).parent().fadeOut(50).fadeIn(50);
    chrome.extension.sendRequest({'text' : text});
  });
});
