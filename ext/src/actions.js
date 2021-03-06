// tab functions
/*function openNewTab() {
	chrome.runtime.sendMessage({"action": "newTab"});
}

function duplicateTab() {
	chrome.runtime.sendMessage({"action": "duplicateTab"})
}

function reloadTab() {
	chrome.runtime.sendMessage({"action": "reloadTab"})
}

function removeTab() {
	chrome.runtime.sendMessage({"action": "removeTab"})
}

// social media links
function facebook() {
	chrome.runtime.sendMessage({"action": "loadPage", "url": "https://facebook.com"})
}

function yelp() {
	chrome.runtime.sendMessage({"action": "loadPage", "url": "https://yelp.com"})
}

function twitter() {
	chrome.runtime.sendMessage({"action": "loadPage", "url": "https://twitter.com"})
}

function linkedin() {
	chrome.runtime.sendMessage({"action": "loadPage", "url": "https://linkedin.com"})
}

// design tools
function figma() {
	chrome.runtime.sendMessage({"action": "loadPage", "url": "https://figma.com"})
}

function envision() {
	chrome.runtime.sendMessage({"action": "loadPage", "url": "https://invisionapp.com"})
}

function framer() {
	chrome.runtime.sendMessage({"action": "loadPage", "url": "https://framer.com"})
}

function sketch() {
	chrome.runtime.sendMessage({"action": "loadPage", "url": "https://sketchapp.com"})
}

// other places
function textToSpeech(text, voiceName) {
	if(!voiceName) {
		voiceName = "Ralph"
	}
	chrome.runtime.sendMessage({"action": "say", "text": text, "voice": voiceName})
}

function googleIt(selectedText) {
  var url = "https://www.google.com/search?q=" + selectedText;
  chrome.runtime.sendMessage({"action": "loadPage", "url": url});
}

// only loads the video if webgazer is ready
function loadVideo() {
    if (webgazer.isReady()) {
        loadVideoAction();
        console.log('loaded video...')
    } else {
        setTimeout(loadVideo, 100);
    }
}
*/
// actually performs the actions of loading the video
function loadVideoAction() {
	webgazer.showPredictionPoints(true);
	var width = 320;
    var height = 240;
    var topDist = '0px';
    var leftDist = '0px';

    var video = document.getElementById('webgazerVideoFeed');
    video.style.display = 'block';
    video.style.position = 'absolute';
    video.style.top = topDist;
    video.style.left = leftDist;
    video.width = width;
    video.height = height;
    video.style.margin = '0px';

    webgazer.params.imgWidth = width;
    webgazer.params.imgHeight = height;

    var overlay = document.createElement('canvas');
    overlay.id = 'overlay';
    overlay.style.position = 'absolute';
    overlay.width = width;
    overlay.height = height;
    overlay.style.top = topDist;
    overlay.style.left = leftDist;
    overlay.style.margin = '0px';

    document.body.appendChild(overlay);

    var cl = webgazer.getTracker().clm;

    function drawLoop() {
        requestAnimFrame(drawLoop);
        overlay.getContext('2d').clearRect(0,0,width,height);
        if (cl.getCurrentPosition()) {
            cl.draw(overlay);
        }
    }
    drawLoop();
    textToSpeech("Face. AWAKEN!", "Zarvox")
};
