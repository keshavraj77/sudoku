
var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "467921358",
    "895473261",
    "231865749",
    "513698427",
    "928754613",
    "746132985",
    "354287196",
    "189346572",
    "672519834"
]

var solution = [
    "467921358",
    "895473261",
    "231865749",
    "513698427",
    "928754613",
    "746132985",
    "354287196",
    "189346572",
    "672519834"
]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    // for (let i = 1; i <= 9; i++) {
    //     //<div id="1" class="number">1</div>
    //     let number = document.createElement("div");
    //     number.id = i
    //     number.innerText = i;
    //     number.addEventListener("click", selectNumber);
    //     number.classList.add("number");
    //     document.getElementById("digits").appendChild(number);
    // }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
            let audio= document.getElementById("audio1");
            audio.play();
            document.getElementById("errors").innerText = "Right Move👏";
            
        }
        else {
            // errors = -1;
            // if(errors==-1){
                let audio= document.getElementById("audio2");
                audio.play();
            document.getElementById("errors").innerText = "😥Rethink";
        }
    }
}

