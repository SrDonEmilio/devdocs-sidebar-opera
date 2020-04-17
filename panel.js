document.addEventListener("DOMContentLoaded", function(event) {
	document.title = chrome.i18n.getMessage("extName");
	iframe = document.createElement("iframe");
	iframe.id = 'myIFrame';
	//iframe.src = chrome.i18n.getMessage("extPanelURL");
	//console.log(chrome.i18n.getMessage("extPanelURL"))
	iframe.src = 'http://devdocs.io'
	iframe.onError = iframe.onerror = myErrorHandler;
	document.body.appendChild(iframe);
	iframe.contentWindow.focus();
	//console.log('Hello')
	//console.log(iframe)
 });
 
 function myErrorHandler(error) {
	//alert('zaza');
	document.getElementById('myIFrame').style.display = 'none';
	console.error('Error loading iframe contents: ' + error);
	return true;
 }