(function(){

	this.Clever = function(){
		this.tags = "app";

		initialize.call(this);
	}
	Clever.prototype.httpGetAsync = function(theUrl, callback) {

	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            callback(xmlHttp.responseText);
	    }
	    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
	    xmlHttp.send(null);

	};
	function initialize() {
		var app = document.getElementsByTagName(this.tags);
		var obj = this;
		console.log(app[0].getAttribute("clvr-id"));
		var anchors = document.querySelector("app > [clvr-href]");
		anchors.addEventListener("click",function(e){
			e = e || window.event;
			    var target = e.target || e.srcElement,
			        text = target.textContent || text.innerText;
			console.log(target.innerHTML);
			obj.httpGetAsync(location.origin+"/git/clever-js/demo.php",function(data) {
				console.log(data);
			});
			if (history.pushState) {
				window.history.pushState("object or string", "demo-url", location.origin+"/git/clever-js/demo.php");
			} else {
			  //document.location.hash = 'lookAtMeNow';
			    document.location.href = "/new-url";
			}
		});
	}
})();