let colorButton = document.querySelector('#color')
let placeButton = document.querySelector('#place')
let ritualButton = document.querySelector('#ritual')

let catAudio = document.querySelector('#catsMeow')

colorButton.addEventListener("click", () => {
    catAudio.play();
    alert("Muto's favorite color is orange, obviously.")
})

placeButton.addEventListener("click", () => {
    catAudio.play();
    alert("Muto's favorite place is the 3-season room as her personal fishbowl.")
})

ritualButton.addEventListener("click", () => {
    catAudio.play();
    alert("Muto's favorite ritual is going belly-up when you come home so you give her all the pets.")
})