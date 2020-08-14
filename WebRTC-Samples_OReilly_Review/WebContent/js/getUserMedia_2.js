
var constraints = { audio: false, video: true };
var video = document.querySelector("video");

function successCallback(stream) {
  console.log("success");
  window.stream = stream; // make the returned stream available to console...
  video.srcObject = stream;
  video.play();
}

function errorCallback(error) {
  console.log("navigator.getUserMedia error: ", error);
}

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(successCallback)
  .catch(errorCallback);
