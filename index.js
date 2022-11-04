let startingPoint = { x: 100, y: 0 };
const Start = { x: 100, y: 0 };
const A = { x: 200, y: 100 };
const B = { x: 0, y: 100 };
const C = { x: 100, y: 0 };

const getABC = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if (randomNumber < 3) return "A";
    if (randomNumber < 5 && randomNumber > 2) return "B";
    if (randomNumber > 4) return "C";
    return randomNumber;
};

const app = document.getElementById("app");
const restartBtn = document.createElement("button");
restartBtn.innerHTML = "Restart";
restartBtn.addEventListener("click", restart);
app.appendChild(restartBtn);
const timer = (ms) => new Promise((res) => setTimeout(res, ms));
async function makeRandomPoint(x, y) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 1, y + 1);
    ctx.stroke();

    let startXY = { x: x + 1, y: y + 1 };

    for (let i = 0; i < 1000; i++) {
        const res = getABC();
        await timer(2);

        if (res === "A") {
            const newAX =
                startXY.x > A.x
                    ? startXY.x - (startXY.x - A.x) / 2
                    : A.x - (A.x - startXY.x) / 2;
            const newAY =
                startXY.y > A.y
                    ? startXY.y - (startXY.y - A.y) / 2
                    : A.y - (A.y - startXY.y) / 2;
            ctx.moveTo(newAX, newAY);
            ctx.lineTo(newAX + 1, newAY + 1);
            ctx.strokeStyle = "green";
            ctx.stroke();
            startXY.x = newAX + 1;
            startXY.y = newAY + 1;
        }
        if (res === "B") {
            const newBX =
                startXY.x > B.x
                    ? startXY.x - (startXY.x - B.x) / 2
                    : B.x - (B.x - startXY.x) / 2;
            const newBY =
                startXY.y > B.y
                    ? startXY.y - (startXY.y - B.y) / 2
                    : B.y - (B.y - startXY.y) / 2;
            ctx.moveTo(newBX, newBY);
            ctx.lineTo(newBX + 1, newBY + 1);
            ctx.strokeStyle = "blue";
            ctx.stroke();
            startXY.x = newBX + 1;
            startXY.y = newBY + 1;
        }
        if (res === "C") {
            const newCX =
                startXY.x > C.x
                    ? startXY.x - (startXY.x - C.x) / 2
                    : C.x - (C.x - startXY.x) / 2;
            const newCY =
                startXY.y > C.y
                    ? startXY.y - (startXY.y - C.y) / 2
                    : C.y - (C.y - startXY.y) / 2;
            ctx.moveTo(newCX, newCY);
            ctx.lineTo(newCX + 1, newCY + 1);
            ctx.strokeStyle = "red";
            ctx.stroke();
            startXY.x = newCX + 1;
            startXY.y = newCY + 1;
        }
    }
}

function restart() {
    startingPoint.y = Math.floor(Math.random() * 100);
    makeRandomPoint(startingPoint.x, startingPoint.y);
}

function draw() {
    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(Start.x, Start.y);
        ctx.lineTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.lineTo(C.x, C.y);
        ctx.fillStyle = "#d3d3d3";
        ctx.fill();
        ctx.stroke();
    }
}
draw();
