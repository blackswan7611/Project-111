//https://teachablemachine.withgoogle.com/models/Qh65rHLcT/
Webcam.set
({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Qh65rHLcT/model.json", modelLoaded);

function modelLoaded()
{
    console.log( "Model Loaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "This hand gesture is of " +prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

