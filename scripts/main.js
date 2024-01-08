const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/stoic-statue.jpg") {
        myImage.setAttribute("src", "images/stoic-st2.jpg");
    } else {
        myImage.setAttribute("src", "images/stoic-statue.jpg");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Stoicism is a great philosophy, ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Stoicism is a great philosophy, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
};