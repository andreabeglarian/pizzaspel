let buttonTimer = document.getElementById("buttonTimer").addEventListener("click", klikTimer);
let secondsPassed = 10
let intervalId; 


function klikTimer() {
    if (!intervalId) {
        intervalId = setInterval(countDown, 1000);
    }
}

function countDown() {
    if (secondsPassed == 0) {
        clearInterval(intervalId)
        document.querySelector("p").textContent = "Je pizza is klaar!"        
    } else { 
        document.querySelector("p").textContent = secondsPassed
        secondsPassed -= 1  
    }
} 

