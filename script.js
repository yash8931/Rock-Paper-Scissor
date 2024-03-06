let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=> {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=> {
    console.log("Game is Draw");
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game is Draw";
}

const showWinner = (userWin, userChoice, compChoice)=> {
    if(userWin) {
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        // console.log("user is win");
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else {
        msg.innerText = `You lost! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        console.log("comp is win");
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    // Generate compute choice 
    const compChoice = genCompChoice();
    let userWin = true;
    if(userChoice === compChoice) {
        drawGame();
        return;
    }
    else {
        
        if(userChoice === "rock") {
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            // scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            // rock paper
            userWin = compChoice === "rock" ? false : true;
        }
    }
    showWinner(userWin, userChoice, compChoice);
}

choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
