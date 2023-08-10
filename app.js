// const changeColor = document.getElementById("changeColorButton");

// changeColorButton.addEventListener("click", () => {
//   // Generate a random color for the accent color
//   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

//   // Set the new color value to the --accent-color root variable
//   document.documentElement.style.setProperty("--accent-color", randomColor);
// });

const changeColor = e => {
    const colorPalette=`#${e}`
    document.documentElement.style.setProperty("--accent-4", colorPalette);
};
