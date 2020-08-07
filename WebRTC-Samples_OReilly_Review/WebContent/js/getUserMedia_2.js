navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

var constraints = { audio: false, video: true };
var video = document.querySelector("video");

function successCallback(stream) {
  console.log("success");
  window.stream = stream; // make the returned stream available to console...
  if (window.URL) {
    console.log("window.URL");
    video.srcObject = stream;
  } else {
    console.log("else");
    video.src = stream;
  }
  video.play();
}

function errorCallback(error) {
  console.log("navigator.getUserMedia error: ", error);
}

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(successCallback)
  .catch(errorCallback);
