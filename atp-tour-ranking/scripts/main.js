const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/atp-tour-logo.png") {
        myImage.setAttribute("src", "images/atp-tour-logo-inverted.png");
    } else {
        myImage.setAttribute("src", "images/atp-tour-logo.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to ATP tour ranking!, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to ATP tour ranking!, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
  


