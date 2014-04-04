/*! github.com/tomByrer/jsperf-tutorial 0.5.0 (c)2014; MIT licence */
// readies http://jsperf.com/ for intro.js

;(function(){
//load scripts
$.ajax({
url: "//cdn.jsdelivr.net/intro.js/0.6.0/intro.min.js",
type: "GET",
dataType: "script",
cache: true
});
var fileref=document.createElement("link")
fileref.setAttribute("rel", "stylesheet")
fileref.setAttribute("type", "text/css")
fileref.setAttribute("href", '//cdn.jsdelivr.net/intro.js/0.6.0/introjs.min.css')
document.getElementsByTagName("head")[0].appendChild(fileref)
fileref=document.createElement("link") //fileref needs to be rebuilt for atleast FF20
fileref.setAttribute("rel", "stylesheet")
fileref.setAttribute("type", "text/css")
fileref.setAttribute("href", 'https://rawgithub.com/tomByrer/jsperf-tutorial/master/jsperf-tutorial.src.css')
document.getElementsByTagName("head")[0].appendChild(fileref)
//+ button
$('body').append('<span id="btnCorner"><a href="javascript:void(0);" onclick="javascript:introJs().start();">Run tutorial.</a></span>');
// inserts data attributes
$('a:contains("test cases")')
.attr('data-step','1')
.attr('data-intro','Link to browse & search others published tests.  Protip: <a href="http://jsperf.com/browse" target="_blank">Search</a> & <a href=http://www.youtube.com/watch?v=RLbAKxCAdI8>watch Bynens video</a> & <a href=http://mrale.ph/blog/2014/02/23/the-black-cat-of-microbenchmarks.html>Egorov&#39;s warning</a> before posting.');
$('fieldset:nth-child(1)')
.attr('data-step','2')
.attr('data-intro','Entries here saved in browser.  Helpful when you need find your old tests, or revise a recent case.');
$('input#title')
.attr('data-step','3')
.attr('data-intro','Auto-populates URL-slug.');
$('input#visible')
.attr('data-step','4')
.attr('data-intro','Protip: Always uncheck first so you can test before publishing.');
$('textarea#info')
.attr('data-step','5')
.attr('data-intro','Good place to link library home pages, blog, StackOverflow answer, bug reports.  Protip: There is no diff, so post version & reasons for changes.');

$('div:contains("Preparation")')
.attr('data-step','6')
.attr('data-intro','In here, load libraries, set up global variables & methods, enter large test scripts as a function.  Ran once at page load.');
$('#add-buttons')
.attr('data-step','7')
.attr('data-intro','Protip: do not use; <a href="https://github.com/mathiasbynens/jsperf.com/issues/167#issue-29073408" target="_blank">outdated</a>.  Link CDNs from Google/<a href="http://cdnjs.com/" target="_blank">cdnjs</a>/<a href="http://www.jsdelivr.com/" target="_blank">jsDelivr</a>, dropbox, or in emergency <a href="http://rawgithub.com/" target="_blank">rawgithub.com</a>.');
$('div:contains("setup")')
.attr('data-step','8')
.attr('data-intro','Ran before each test starts; helpful for resetting arrays that have been changed, etc.');
$('div:contains("teardown")')
.attr('data-step','9')
.attr('data-intro','Ran after each test ends; helpful to remove junk that the tests create.');
$('#tests fieldset:nth-child(2) div:nth-child(2)')
.attr('data-step','10')
.attr('data-intro','Protip: short names are better to read in result key.');
$('#tests fieldset:nth-child(2) div:nth-child(4)')
.attr('data-step','11')
.attr('data-intro','This is what gets looped.  Protip: Keep this code < 5 lines; use <b>Preparation code</b> above for longer scripts.');
$('.submit')
.attr('data-step','12')
.attr('data-intro','Protip: check if you unchecked <b>Published</b> before saving.');

})();
