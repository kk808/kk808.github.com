// ==UserScript==
// @name		Common scripts
// @namespace    http://tampermonkey.net/
// @description collection of handy tools
// @author      Wilson Huynh
// @include		*
// @match       http*://*/*
// @version 	1.0
// @run-at 		document-start
// @grant        none
// ==/UserScript==

(function() {

	function addTools() {
		var s = document.createElement('script');
		s.src = 'https://kk808.github.io/notes/tools/toolkit/index.js';
		document.head.appendChild(s);
	}

	//don't run on frames or iframes
	if (window.top === window.self) 
		document.addEventListener("DOMContentLoaded", addTools);

})();



