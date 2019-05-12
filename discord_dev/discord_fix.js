var observer = -1;

var msgs = document.getElementsByClassName("messagesWrapper-3lZDfY")[0];	//	Message bar
//	Options for removing specific divs.
var desc_image = ["anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB imageW…W1cML embedMarginLarge-YZDCEs embedWrapper-3AbfJJ", true];
var video_preview = ["embedVideo-3nf0O9 embedMarginLarge-YZDCEs", true];
var description = ["embedDescription-1Cuq9a embedMargin-UO5XwE", true];
var article_thumbnail = ["anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB imageWrapper-2p5ogY imageZoom-1n-ADA clickable-3Ya1ho embedImage-2W1cML embedMarginLarge-YZDCEs embedWrapper-3AbfJJ",true];
var thumbnail = ["anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB imageWrapper-2p5ogY imageZoom-1n-ADA clickable-3Ya1ho embedThumbnail-2Y84-K", true];
var removal_targets = [desc_image,video_preview,description,article_thumbnail,thumbnail];
//	Cleans every DOM element in chat using removal_targets
function clean() {
	var array = document.getElementsByClassName("embedInner-1-fpTo");
	if(array.length != 0) {
		for(var elem of array) {
			element = elem;
			// console.log(elem);
			for(var action of removal_targets) {
				
				if(action[1] == true) {
					// console.log(action[0]);
					var set = elem.getElementsByClassName(action[0]);
					for(var bloat of set) {
						bloat.style.display = "none";
					}
				}
			}
			
		}
	}
	scroll_to_bottom_of_chat();
}
//	Calling clean to clean initial chat.
clean();

//	Title
var app = document.getElementsByTagName("title")[0];
var config = {attributes: true, childList: true, subtree: true};
//	Observer for a title element.
//	Discord switches chat when a title is modified, or does it.

var channel_observer = new MutationObserver(function(){
	//	Cleans new window
	console.log("hop");
	clean();
	//	declares msgs to be the new chat.
	msgs = document.getElementsByClassName("messagesWrapper-3lZDfY")[0];
	//	Need to make or disable an observer
	if(observer == -1) {
		console.log("no observer");
		observer = new MutationObserver(callback_HTML_test);
	} else {
		//	Need to disable the previous observer
		observer.disconnect();		
	}
	// var config = { attributes: false, childList: true, subtree: true };
	observer = new MutationObserver(callback_HTML_test);
	observer.observe(msgs,config);
});
channel_observer.observe(app,config); // start channel observer

var cfg = {characterData: false,attributes:false, childList: true, subtree:false};
var server_name = document.getElementsByClassName("flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 container-PNkimc firefoxFixScrollFlex-cnI2ix")[0];
// server_name.addEventListener("change",function(){console.log("success?");});
var name = document.getElementsByClassName("name-3YKhmS")[0].innerText;

var server_observer = new MutationObserver(function() {
	var new_name = document.getElementsByClassName("name-3YKhmS")[0].innerText;
	if(name != new_name) {
		name = new_name;
		console.log("hop");
		clean();
		//	declares msgs to be the new chat.
		msgs = document.getElementsByClassName("messagesWrapper-3lZDfY")[0];
		//	Need to make or disable an observer
		if(observer == -1) {
			console.log("no observer");
			observer = new MutationObserver(callback_HTML_test);
		} else {
			//	Need to disable the previous observer
			observer.disconnect();		
		}
		// var config = { attributes: false, childList: true, subtree: true };
		observer = new MutationObserver(callback_HTML_test);
		observer.observe(msgs,config);
	}
});
server_observer.observe(server_name,config);

function scroll_to_bottom_of_chat() {
	var msg_wrapper = document.getElementsByClassName("scroller-2FKFPG firefoxFixScrollFlex-cnI2ix systemPad-3UxEGl messages-3amgkR")[0];
	msg_wrapper.scrollTo(0,msg_wrapper.scrollHeight);
}

function cleanPreview(elem) {
	// console.log(elem);
	// console.log(removal_targets);
	for(var action of removal_targets) {
				//	Hides every element with removal_targets
				if(action[1] == true) {
					// console.log(action[0]);
					var set = elem.getElementsByClassName(action[0]);
					for(var bloat of set) {
						bloat.style.display = "none";
					}
				}
			}
}
function callback_HTML_test(mutationsList,observer) {

	
	for(var node of mutationsList) {
		
		if(node.type == "childList" ) {
			if(node.addedNodes.length != 0) {
				var mg = node.addedNodes[0];
				console.log(mg.className);
				var embeded_previews = mg.getElementsByClassName("embed-IeVjo6 embedWrapper-3AbfJJ");
				if(embeded_previews.length != 0) {
					var embeded = embeded_previews[0];
					cleanPreview(embeded);
				}

				
			}
		}
	}
	
}
//	new observer for elements added.
observer = new MutationObserver(callback_HTML_test);
observer.observe(msgs,config);