fetch('./jokes.json')
    .then((response) => response.json())
    .then((json) => document.getElementById("question"));
document.getElementById("answer1").hidden = true
document.getElementById("button1").hidden = true
function showButton() {
    document.getElementById("button1").hidden = false
}
setTimeout(showButton, 10000)
function showAnswer() {
    document.getElementById("answer1").hidden = false
}
document.getElementById("button1").addEventListener("click", showAnswer)
//this is currentley a test and practice website