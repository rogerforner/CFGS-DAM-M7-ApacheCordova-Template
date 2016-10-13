var $ = require('jquery');

//Millor d'aquesta manera.
window.$ = window.jQuery = require('jquery');

var _  = require('underscore');

window._ = require('underscore');
require('bootstrap-sass');

$(document).ready(function(){
    $("#msgid").html("hello world");
});