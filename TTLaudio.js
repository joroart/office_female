let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

//speech.text = "hello! welcome"
const startButton = document.getElementById("speakButton");

startButton.addEventListener("click", speakText);

function speakText() {
  speech.text = document.getElementById("textArea").value;
  window.speechSynthesis.speak(speech);
  console.log(window.speechSynthesis.getVoices())
}