var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
var camera= document.getElementById("camera");

Webcam.set({
width: 360,
height: 250,
image_format:'png',
png_quality: 90
});

function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult= function(event){
console.log(event);
var content= event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
console.log(content);
if(content=="take my selfie")
{
console.log("taking selfie in 5 seconds");
speak();

}
}
function speak(){
synth= window.speechSynthesis;
var speak_data="Taking your selfie in 5 seconds";
var utterthis= new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
take_snapshot();
save();

},5000);
}
