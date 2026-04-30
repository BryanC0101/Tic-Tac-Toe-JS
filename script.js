const cells = document.querySelectorAll("td");
const round = document.querySelector(".round");

let brainSwitch = true;
let x_list = [];
let o_list = [];

const victory = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

cells.forEach((cell, index) => {

    cell.addEventListener("click", () => {

        if (cell.innerHTML != "") return;

        if (brainSwitch === true) {

            cell.innerHTML = '<span class="x">X</span>';
            x_list.push(index);

            if (checkVictory(x_list)) {
                alert("X venceu!");
                return;
            }

            round.innerHTML = "It's <span class='o'>O</span> time to play";
            brainSwitch = false;

        } else {

            cell.innerHTML = '<span class="o">O</span>';
            o_list.push(index);

            if (checkVictory(o_list)) {
                alert("O venceu!");
                return;
            }

            round.innerHTML = "It's <span class='x'>X</span> time to play";
            brainSwitch = true;
        }

    });

});

function checkVictory(list) {

    for (let i = 0; i < victory.length; i++) {

        let count = 0;

        for (let c = 0; c < list.length; c++) {
            if (victory[i].includes(list[c])) {
                count++;
            }
        }

        if (count === 3) return true;
        
    }

    return false;
}

function restart() {
    cells.forEach(cell => {
        cell.innerHTML = "";
        round.innerHTML = "";
        x_list = [];
        o_list = [];
    })
}
