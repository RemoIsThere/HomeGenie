function switchLight() {
    var input = document.getElementById("input").value;
    var light = document.getElementById("light");
  
    if (input == "turn on the light") {
      light.classList.add("on");
    } else if (input == "turn off the light") {
      light.classList.remove("on");
    }
  }
  