function runTyping() {
		var element = document.querySelector('#output');
		var typeSpeed = 100; // 80 ms
		var deleteSpeed = 30; // 30 ms
		var deleteAfter = 3000; // 3 seconds
		var items = [
		  "I am self taught",
		  "I code in Java, Groovy and Javascript",
		  "I enjoy learning",
		  "I love designing"
		];
		/* END SETTINGS */

		var sentence = 0;
		var currentChar = 0;
		var direction = 1;
		var deleteInterval = null;

		function type() {
		  if (sentence >= items.length) {
		    sentence = 0;
		  }

		  var chars = items[sentence].split("");

		  setTimeout(function() {
		    if (currentChar >= chars.length) {
		      setTimeout(function() {
		        sentence++;

		        deleteInterval = setInterval(function() {
		        	element.innerHTML = element.innerHTML.substr(0, currentChar - 1);

		          currentChar--;

		          if (currentChar == 1) {
		            clearInterval(deleteInterval);
		            type();
		          }
		        }, deleteSpeed);
		      }, deleteAfter);

		      return;
		    }

		    element.innerHTML += chars[currentChar];
		    currentChar++;

		    type();
		  }, typeSpeed);
		}

		type();
	}