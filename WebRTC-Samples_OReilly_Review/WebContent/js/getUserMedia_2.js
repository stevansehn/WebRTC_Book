navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {audio: false, video: true};
var video = document.querySelector("video");

function successCallback(stream) {
  console.log("success")
  window.stream = stream; // make the returned stream available to console...
  if (window.URL) {
    // video.srcObject = window.URL.createObjectURL(stream);
    video.srcObject = stream;
  } else {
    video.src = stream;
  }
  video.play();
}

function errorCallback(error){
  console.log("navigator.getUserMedia error: ", error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);