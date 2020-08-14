var vgaButton = document.querySelector("button#vga");
var qvgaButton = document.querySelector("button#qvga");
var hdButton = document.querySelector("button#hd");

var dimensions = document.querySelector("p#dimensions");

// Video element in the HTML5 page
var video = document.querySelector("video");
// The local MediaStream to play with
var stream;

// Callback to be called in case of success...
function successCallback(gotStream) {
  // Make the stream available to the console for introspection
  window.stream = gotStream;
  // Attach the returned stream to the <video> element
  // in the HTML page
  video.srcObject = stream;
  // Start playing video
  video.play();
}

// Callback to be called in case of failure...
function errorCallback(error) {
  console.log("navigator.getUserMedia error: ", error);
}

/*
function displayVideoDimensions() {
	  dimensions.innerHTML = "Actual video dimensions: " + video.videoWidth +
	    "x" + video.videoHeight + 'px.';
	}

video.addEventListener('play', function(){
  //setTimeout(function(){
    displayVideoDimensions();
  //}, 500);
});
*/

/*
video.addEventListener('play', function(){
  console.log('width: ' + video.videoWidth);
  console.log('height: ' + video.videoHeight);
  
  alert('Video dimensions set to: ' + video.videoWidth +
		    "x" + video.videoHeight + 'px.' );video
      maxHeight: 120
    }
  }
};
*/

// Constraints object for standard resolution video
var vgaConstraints = {
  video: {
    mandatory: {
      maxWidth: 320,
      maxHeight: 240
    }
  }
};
// Constraints object for high resolution video
var hdConstraints = {
  video: {
    mandatory: {
      minWidth: 640,
      minHeight: 480
    }
  }
};

qvgaButton.onclick = function () {
  getMedia(qvgaConstraints);
};
vgaButton.onclick = function () {
  getMedia(vgaConstraints);
};
hdButton.onclick = function () {
  getMedia(hdConstraints);
};

// Simple wrapper for getUserMedia() with constraints object as
// an input parameter
function getMedia(constraints) {
  if (!!stream) {
    video.src = null;
    // stream.stop();
  }
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(successCallback)
    .catch(errorCallback);
}