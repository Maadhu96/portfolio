// const changeColor = document.getElementById("changeColorButton");

// changeColorButton.addEventListener("click", () => {
//   // Generate a random color for the accent color
//   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

//   // Set the new color value to the --accent-color root variable
//   document.documentElement.style.setProperty("--accent-color", randomColor);
// });

const changeColor = (e, x) => {
    let homeBg = document.getElementById("Home");
    if (x === 1) {
      homeBg.style.backgroundImage = 'url("./imgs/img2.jpg")';
    } else if (x === 2) {
      homeBg.style.backgroundImage = 'url("./chidiyaud.jpeg")';
    } else if (x === 3) {
      homeBg.style.backgroundImage = 'url("./imgs/img3.jpg")';
    } else if (x === 4) {
      homeBg.style.backgroundImage =
        'url("./HT_vulnerabilities_GettyImages-923729070.webp")';
    } else if (x === 5) {
      homeBg.style.backgroundImage = 'url("./imgs/img4.jpg")';
    }
    const colorPalette=`#${e}`
    document.documentElement.style.setProperty("--accent-4", colorPalette);
};
