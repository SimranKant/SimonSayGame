let gameSeq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "blue"];
let started = false;
let level = 0;
let highestScore = 0;

const h2 = document.getElementById("level-title");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", startGame);

function startGame() {
  if (!started) {
    started = true;
    level = 0;
    gameSeq = [];
    userseq = [];
    startBtn.style.display = "none";
    levelUp();
  }
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randColor = btns[Math.floor(Math.random() * 4)];
  gameSeq.push(randColor);
  let randbtn = document.getElementById(randColor);
  setTimeout(() => btnFlash(randbtn), 500);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 300);
}

function checkAns(idx) {
  if (userseq[idx] === gameSeq[idx]) {
    if (userseq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level > highestScore) highestScore = level;
    h2.innerHTML = `Game Over! Score: ${level}<br>Highest Score: ${highestScore}`;
    startBtn.innerText = "Play Again";
    startBtn.style.display = "inline-block";
    document.body.style.backgroundColor = "#f44336";
    setTimeout(() => (document.body.style.backgroundColor = "#dfe9f3"), 200);
    resetGame();
  }
}

function resetGame() {
  started = false;
  level = 0;
  gameSeq = [];
  userseq = [];
}

function btnPress() {
  if (!started) return;
  let userColor = this.id;
  userseq.push(userColor);
  btnFlash(this);
  checkAns(userseq.length - 1);
}

document.querySelectorAll(".box").forEach((btn) => {
  btn.addEventListener("click", btnPress);
});
