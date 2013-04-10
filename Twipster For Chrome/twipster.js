$(document).ready(function(){

  chrome.extension.sendMessage({method: "getFontSize"}, function(response) {
    if (response.status){
      var twipsterFontSize = response.status;
    } else {
      var twipsterFontSize = 20;
    };
    $("<style id='twipster-settings' type='text/css'>.js-tweet-text { font-size: " + twipsterFontSize + "px !important; opacity: 1 !important; }</style>").appendTo("head");
  });
  
  chrome.extension.sendMessage({method: "getTheme"}, function(response) {
    if (response.status){
      var twipsterTheme = response.status;
    } else {
      var twipsterTheme = dark;
    };
    $("body").addClass("theme-" + twipsterTheme); 
  });

});
