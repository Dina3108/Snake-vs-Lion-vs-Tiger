let score = {
  wins: 0,
  losses: 0,
  ties: 0,
};
// we are not supposed to declare the syntax and store it in the updated code present at down
/*const score = JSON.parse(localStorage.getItem("check")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};*/
updateScore();

//using default operator as shortcut
/*
        if (score === null) {
          //if(!score) as null is a falsy value
          score = {
            wins: 0,
            losses: 0,
            ties: 0,
          };
          //if it is null means after removing in local storage initializing again as zero
        }
          */
console.log(score);
//this declaration ,here before the function code is known as Global declaration that removes the Scope error
//Scope means when you declaring a Variable that will be used in the respective curly bases
//but here declaring the variable before the function shows can be used in any script code in this file
function playGame(playmove) {
  if (playmove === "Snake") {
    const computermove = pickComputerMove();
    let result = " ";
    if (computermove === "Lion") {
      result = "lost";
    } else if (computermove === "Snake") {
      result = "tie";
    } else if (computermove === "Tiger") {
      result = "Win";
    }
    if (result === "Win") {
      score.wins += 1;
    } else if (result === "tie") {
      score.ties += 1;
    } else if (result === "lost") {
      score.losses += 1;
    }
    localStorage.setItem("check", JSON.stringify(score));
    updateScore();
    document.querySelector(".js-result").innerHTML = `You ${result}`;
    //here we for innerHTML we can give innerText also for only selecting the Text
    document.querySelector(
      ".js-choice"
    ).innerHTML = `You Released Your ${playmove}.Oppenent Unlocked His ${computermove}`;
  } else if (playmove === "Lion") {
    const computermove = pickComputerMove();
    let result = " ";
    if (computermove === "Lion") result = "tie";
    else if (computermove === "Tiger") result = "lost";
    else if (computermove === "Snake") result = "Win";
    if (result === "Win") {
      score.wins += 1;
    } else if (result === "tie") {
      score.ties += 1;
    } else if (result === "lost") {
      score.losses += 1;
    }
    updateScore();
    document.querySelector(".js-result").innerHTML = `You ${result}`;
    document.querySelector(
      ".js-choice"
    ).innerHTML = `You Released Your ${playmove}.Oppenent Unlocked His ${computermove}`;
  } else if (playmove === "Tiger") {
    const computermove = pickComputerMove();
    let result = " ";
    if (computermove === "Tiger") result = "tie";
    else if (computermove === "Snake") result = "lost";
    else if (computermove === "Lion") result = "Win";
    if (result === "Win") {
      score.wins += 1;
    } else if (result === "tie") {
      score.ties += 1;
    } else if (result === "lost") {
      score.losses += 1;
    }
    updateScore();
    document.querySelector(".js-result").innerHTML = `You ${result}`;
    document.querySelector(
      ".js-choice"
    ).innerHTML = `You Released Your ${playmove}.Oppenent Unlocked His ${computermove}`;
  }
}
function pickComputerMove() {
  let computermove = " ";
  const ran = Math.random();
  comp_video(ran);
  if (ran >= 0 && ran <= 1 / 3) computermove = "Snake";
  else if (ran >= 1 / 3 && ran <= 2 / 3) computermove = "Lion";
  else computermove = "Tiger";
  return computermove;
  /*here we can give return value at the end of the function
                  return 2+2 //means it returns 4 in all function
                  return 'rock' //means it returns string rock in all function
                  return  //it returns undefined we can check in console.log(function calling)   */
}
function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;
}
let auto_Playing = false;
let interval_stop_id = 0;
function auto_play() {
  if (!auto_Playing) {
    interval_stop_id = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    console.log(interval_stop_id);
    //after started running set-interval function will give us a value that where the fucntion has to be stop
    auto_Playing = true;
  } else {
    clearInterval(interval_stop_id);
    //clearInterval function stops the setInterval function at the given id
    auto_Playing = false;
  }
}
let autoPlaying = true;
function text_to_stop_autoplay() {
  if (autoPlaying) {
    setTimeout(function () {
      document.querySelector(".autoplay-button").innerHTML =
        "Click To Stop Auto Play";
    }, 2000);
    autoPlaying = false;
  } else {
    document.querySelector(".autoplay-button").innerHTML = "Auto Play";
    autoPlaying = true;
  }
}

function video_play_check() {
  let a1 = document.querySelector(".video1-div");
  a1.innerHTML = `
      <video class="video-edit" controls autoplay muted>
        <source src="Files/_Oongi aducha Ondra Ton..._ _ Super Hit Scene from Singam _ Suriya _ Anushka _ Prakash Raj _ SUN NXT.mp4" type="video/mp4" />
      </video>
    `;
  console.log(a1.innerHTML);
}
function button_video_click(choose) {
  let a1 = document.querySelector(".video1-div");
  if (choose === "snake") {
    a1.innerHTML = `
    <video class="video-edit" controls>
      <source src="Files/Snake.mp4" type="video/mp4" />
    </video>
  `;
    console.log(a1.innerHTML);
  } else if (choose === "lion") {
    a1.innerHTML = `
    <video class="video-edit" controls>
      <source src="Files/Lion.mp4" type="video/mp4" />
    </video>
  `;
    console.log(a1.innerHTML);
  } else if (choose === "tiger") {
    a1.innerHTML = `
    <video class="video-edit" controls>
      <source src="Files/Tiger.mp4" type="video/mp4" />
    </video>
  `;
    console.log(a1.innerHTML);
  }
}
function comp_video(ran) {
  let a2 = document.querySelector(".video2-div");
  if (ran >= 0 && ran <= 1 / 3) {
    a2.innerHTML = `
    <video class="video-edit" controls>
      <source src="Files/Snake.mp4" type="video/mp4" />
    </video>
  `;
    console.log(a2.innerHTML);
  } else if (ran >= 1 / 3 && ran <= 2 / 3) {
    a2.innerHTML = `
    <video class="video-edit" controls>
      <source src="Files/Lion.mp4" type="video/mp4"/>
    </video>`;
    console.log(a2.innerHTML);
  } else {
    a2.innerHTML = `
    <video class="video-edit" controls>
      <source src="Files/Tiger.mp4" type="video/mp4" />
    </video>
  `;
    console.log(a2.innerHTML);
  }
}
