const decButton = document.getElementById("decrease");
const incButton = document.getElementById("increase");
const counterLabel = document.getElementById("counter-label");

function changeCounter (byNumber)
{
    counterLabel.innerText = parseInt(counterLabel.innerText) + byNumber;
}

decButton.onclick = () => {
    changeCounter(-1);
};

incButton.onclick = () => {
    changeCounter(1);
};