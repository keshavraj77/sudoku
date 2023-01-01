
var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "81-56-2--",
    "----7---3",
    "--6------",
    "96--5--7-",
    "--4---9--",
    "--26-----",
    "59-1--8--",
    "-----8-2-",
    "4--------"
]

var solution = [
    "819563247",
    "245879613",
    "376412589",
    "963251478",
    "154387962",
    "782694351",
    "597126834",
    "631948725",
    "428735196"
]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

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

