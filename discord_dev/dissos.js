//Testing.js
docum

observer.disconnect();
observer = new MutationObserver(function(mutationList, observer) {
	mutationList();
});
observer.observe(msgs);


var msgs = document.getElementsByClassName("messagesWrapper-3lZDfY")[0];
observer.disconnect();

function workMagicOnContainer(child,parent) {
	console.log("hello");
	console.log(child);
	var elements = child.getElementsByTagName("a");
	console.log(elements);
	if(elements.length != 0) {
		var link_containter = elements[0];
		temp = link_containter;	//	This must be removed
		var move_in_handler = temo.addEventListener("mouseleave",function(){console.log("Goodbye World")});
		var move_out_handler = temo.addEventListener("mouseleave",function(){console.log("Goodbye World")});
		console.log("Ah shit, here we go again");
		//	Link object, we can generate a preview
		//	We have a link we can preview, now we must generate a preview?
	}
}
function hover_handler() {
	console.log("Hey");
}


function callback_HTML_test(mutationsList,observer) {

	
	for(var node of mutationsList) {
		
		if(node.type == "childList" ) {
			if(node.addedNodes.length != 0) {
				var mg = node.addedNodes[0];
				var children = mg.children;
				//console.log(children);
				// console.log(typeof children === 'undefined');
				if(!(typeof children === 	 'undefined') ) {
					var container = children[0];
					workMagicOnContainer(container,node);
				}
				
			}
		}
	}
	
}

observer.disconnect;
var config = { attributes: false, childList: true, subtree: true };
var observer = new MutationObserver(callback_HTML_test);
observer.observe(msgs,config);



var channel = null;


//	Testing
if(typeof observer === "undefined") {
	console.log("no observer");
} else {
	if(!typeof observer.disconnect === "undefined") {
		observer.disconnect();
	}
	
}
var count = 0;
var app = document.getElementsByTagName("title")[0];
var config = {attributes: true, childList: true, subtree: true};
var observer = new MutationObserver(function(){
	console.log("Switch");
});
observer.observe(app,config);


function hover_handler() {
	console.log("Hey");
}

//embedMarginLarge-YZDCEs Watch out for this, for youtube
//	embedDescription-1Cuq9a embedMargin-UO5XwE Desc
// anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB imageWrapper-2p5ogY imageZoom-1n-ADA clickable-3Ya1ho embedThumbnail-2Y84-K
//	For plain links, there should be no need for images, only the link, and maybe a description.
//	Could set flags for this and shit.

//	Could definetly be set to iterate over all the elements, but it is good to have a specific version too, when a new link gets added
var element = "1";
//	So convoluted.
function clean() {
	var array = document.getElementsByClassName("embedInner-1-fpTo");
	if(array.length != 0) {
		for(var elem of array) {
			element = elem;
			var description_className = ["embedDescription-1Cuq9a embedMargin-UO5XwE",false];
			var video_desc = ["embedVideo-3nf0O9 embedMarginLarge-YZDCEs",true];
			var thumb_className = ["anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB imageWrapper-2p5ogY imageZoom-1n-ADA clickable-3Ya1ho embedThumbnail-2Y84-K",true];
			var removal_targets = [description_className,video_desc,thumb_className];
			for(var action of removal_targets) {
				
				if(action[1] == true) {
					// console.log(action[0]);
					var set = elem.getElementsByTagName(action[0]);
					console.log(elem);
					for(var bloat of set) {
					console.log(bloat);
						bloat.display = "none";
					}
					// elem.getElementsByClassName(action[0]) => {
						// bloat.display = "none";
					// }
				}
			}
			
		}
	}


}


clean();