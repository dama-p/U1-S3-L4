
// 1) CREIAMO 76 CELLE NEL TABELLONE 



const createTable = function () {
    const tabellone = document.getElementById("tabellone");
    
    for (let i=0; i < 76; i++) {
    const singleCell = document.createElement("div");
    singleCell.classList.add("cell");
    const cellNum = document.createElement("h3");
    cellNum.innerText = i+1;
    singleCell.appendChild(cellNum)
    tabellone.appendChild(singleCell)
    
    
}


/* if (parseInt(cellNum) === randomNumber()) {
    cellNum.className = "selectedNum";
} */


}


/* function randomNumber() {
    const ranNum = Math.floor(Math.random() * 77);
    document.getElementById('generatedNumber').value = ranNum;


}  */

onlybutton.addEventListener("click", function () {
    const ranNum = Math.floor(Math.random() * 77);
    document.getElementById('generatedNumber').value = ranNum;
    const extractedCell = document.querySelector(".cell:nth-child(" + ranNum + ")")
    extractedCell.className = "selectedNum"
});




window.onload = function () {
    createTable();
}
