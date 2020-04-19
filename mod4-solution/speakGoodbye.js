( function(window){
	var speakGoodbye={};
	var speakWord = "Good Bye";
	speakGoodbye.speak = function (name) {
		console.log(speakWord + " " + name);
	}
	window.speakGoodbye=speakGoodbye;

})(window);
	

	


