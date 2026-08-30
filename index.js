var gameActive = false;
var Random = -1;
var Cell = document.getElementsByClassName('Bomb');

var Start = document.getElementById('Start');
Start.onclick = function() {
    Start.disabled = true;
    gameActive = true;
    console.log("Start");

    if (gameActive === true) {
        console.log("Игра запустилась");

        for (var i = 0; i < Cell.length; i++) {
            Cell[i].disabled = false;
        }

        Random = Math.floor(Math.random() * 9);
        console.log(Random);
    }
};

for (var i = 0; i < Cell.length; i++) {
    Cell[i].disabled = true;
}

function CellClick(CellNum) {
    if (gameActive == false) {
        console.log("Игра неактивна");
        return;
    }
    
    var button = document.getElementById('Cell' + CellNum);
    
    if (CellNum == Random) {
        
        
        button.textContent = "💣";
        console.log("💣");
        
        gameActive = false;
        
        setTimeout(function() {
            alert("💥 Вы проиграли!");
            Start.disabled = false;
            
            for (var i = 0; i < Cell.length; i++) {
                Cell[i].textContent = '?';
                Cell[i].disabled = true;
            }
        }, 100);
    } else {
        button.textContent = '︎ ︎ ︎';
        button.disabled = true;
    }
}