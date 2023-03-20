var recognition = new webkitSpeechRecognition(); // create speech recognition object
recognition.onresult = function(event) {
    var command = event.results[0][0].transcript;
    document.getElementById("commandEntered").value = command;
    switchLight();
switchFan();
switchTV();
switchCam();
}
function startRecognition() {
    recognition.start();
}

function combined() {
    switchCam();
    switchTV();
    switchLight();
    switchFan();
}

function switchLight() {
    var command = document.getElementById("commandEntered").value;
    var light = document.getElementById("light");
    if (command == "turn on the light") {
        light.src = "light-on.png";
    } else if (command == "turn off the light") {
        light.src = "light-off.png";
    }
}

function switchFan() {
    var command = document.getElementById("commandEntered").value;
    var fan = document.getElementById("fan");
    if (command == "turn on the fan") {
        fan.src = "fan-on.png";
    } else if (command == "turn off the fan") {
        fan.src = "fan-off.png";
    }
}

function switchTV() {
    var command = document.getElementById("commandEntered").value;
    var tv = document.getElementById("tv");
    if (command == "turn on the TV") {
        tv.src = "tv-on.png";
    } else if (command == "turn off the TV") {
        tv.src = "tv-off.png";
    }
}

function switchCam() {
    var command = document.getElementById("commandEntered").value;
    var cam = document.getElementById("cam");
    if (command == "turn on the CCTV") {
        cam.src = "cam-on.png";
    } else if (command == "turn off the CCTV") {
        cam.src = "cam-off.png";
    }
}
