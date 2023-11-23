function roll() {
  var dices = document.getElementsByClassName("faces");
  for( var i=0;i<dices.length;i++){
    dices[i].style.visibility="hidden";
  }
  var randomNumber1 = Math.ceil(Math.random() * 6);
  var diceNumber1="d1"+randomNumber1
  var diceOne = document.getElementsByClassName(diceNumber1);
  for( var i=0;i<diceOne.length;i++){
    diceOne[i].style.visibility="visible";
  }
  var randomNumber2 = Math.ceil(Math.random() * 6);
  var diceNumber2="d2"+randomNumber2
  var diceTwo = document.getElementsByClassName(diceNumber2);
  for( var i=0;i<diceTwo.length;i++){
    diceTwo[i].style.visibility="visible";
  }
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }

  
}
  
  

