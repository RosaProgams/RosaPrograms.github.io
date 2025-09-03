const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Scott-Pilgrim.jpg"){
        myImage.setAttribute("src", "images/scott-pilgrim_2.jpg");
    } else {
        myImage.setAttribute("src", "images/Scott-Pilgrim.jpg")
    }
});

//Personalized Welcome message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to my website ${myName}!`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back ${storedName}!`;
}

myButton.addEventListener("click", () => {
    setUserName();
});
