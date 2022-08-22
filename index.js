const northGreen = document.getElementById("north-green")
const northYellow = document.getElementById("north-yellow")
const northRed = document.getElementById("north-red")
const southGreen = document.getElementById("south-green")
const southYellow = document.getElementById("south-yellow")
const southRed = document.getElementById("south-red")
const eastGreen = document.getElementById("east-green")
const eastYellow = document.getElementById("east-yellow")
const eastRed = document.getElementById("east-red")
const westGreen = document.getElementById("west-green")
const westYellow = document.getElementById("west-yellow")
const westRed = document.getElementById("west-red")
const activateBtn = document.getElementById('activate-btn')


function verticalTrafficSignal() {
    northGreen.style.opacity = 1
    southGreen.style.opacity = 1
    setTimeout(() => {
        northGreen.style.opacity = .2
        northRed.style.opacity = 1
        northYellow.style.opacity = .2
        southGreen.style.opacity = .3
        southRed.style.opacity = 1
        southYellow.style.opacity = .3
    }, 10000)
    setTimeout(() => {
      northGreen.style.opacity = .3
      northRed.style.opacity = .3
      northYellow.style.opacity = 1
      southGreen.style.opacity = .3
      southRed.style.opacity = .3
      southYellow.style.opacity = 1;
    }, 17000)
    setTimeout(() => {
        northGreen.style.opacity = 1
        northRed.style.opacity = .3
        northYellow.style.opacity = .3
        southGreen.style.opacity = 1
        southRed.style.opacity = .3
        southYellow.style.opacity = .3
    }, 20000)
}

function horizontalTrafficSignal() {
    eastRed.style.opacity = 1
    westRed.style.opacity = 1
    setTimeout(() => {
        eastGreen.style.opacity = .3
        eastRed.style.opacity = .3
        eastYellow.style.opacity = 1
        westGreen.style.opacity = .3
        westRed.style.opacity = .3
        westYellow.style.opacity = 1
    },7000)
    setTimeout(() => {
        eastGreen.style.opacity = 1
        eastRed.style.opacity = .3
        eastYellow.style.opacity = .3
        westGreen.style.opacity = 1
        westRed.style.opacity = .3
        westYellow.style.opacity = .3
    }, 10000)
    setTimeout(() => {
        eastGreen.style.opacity = .3
        eastRed.style.opacity = 1
        eastYellow.style.opacity = .3
        westGreen.style.opacity = .3
        westRed.style.opacity = 1
        westYellow.style.opacity = .3
    }, 20000)
}



activateBtn.addEventListener('click', function(){
    setInterval(function () {
        verticalTrafficSignal()
        horizontalTrafficSignal()
      } ,20000);
      verticalTrafficSignal()
      horizontalTrafficSignal()
})

