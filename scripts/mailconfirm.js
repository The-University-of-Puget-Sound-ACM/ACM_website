//Code snippet from http://papermashup.com/read-url-get-variables-withjavascript/
//10 - 1 - 15
function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}
