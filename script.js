let currentPlayer = "X";
let arr = Array(9).fill(null)


function checkWinner() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||

        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||

        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        alert(`Winner is ${currentPlayer}`);
        window.location.reload();
    }

    // Match Draw
    if (!arr.some(el => el === null)) {
        alert(`DRAW!!`)
        window.location.reload();
    }
}


function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null) return;  // this is to prevent that if X or 0 is already there , than user cannot change the values.

    // putting ids in the array  as the currentplayer i.e X
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer == "X" ? "0" : "X";
    console.log(arr)
}
