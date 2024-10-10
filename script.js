let secretNumber = randomNum();
let attempts = 3
document.querySelector(".check").onclick = function(){
    attempts = attempts - 1;
    document.querySelector(".attempts").innerHTML = attempts;
    let  userNumber = document.querySelector(".number").value;
    if(secretNumber == userNumber){
        document.querySelector(".hint").innerHTML = "ПОБЕДА!!!";
        document.querySelector(".check").disabled = true;
        document.querySelector(".number").disabled = true;
        attempts = attempts + 1
    }
    if(secretNumber > userNumber){
        document.querySelector(".hint").innerHTML = "Секретное число большье";
    }
    if(secretNumber < userNumber){
        document.querySelector(".hint").innerHTML = "Секретное число меньше";
    }
    if(attempts == 0){
        document.querySelector(".check").disabled = true;
        document.querySelector(".number").disabled = true;
        document.querySelector(".hint").innerHTML = "ВЫ ПРОИГРАЛИ";
    }
}
document.querySelector(".start").onclick = function(){
    secretNumber = randomNum();
    attempts = 3;
    document.querySelector(".attempts").innerHTML = attempts;
    document.querySelector(".hint").innerHTML = "Здесь будут подскаски";
    document.querySelector(".check").disabled = false;
    document.querySelector(".number").disabled = false;
    document.querySelector(".number").value = "";
}
function randomNum(){
    let number = Math.round(Math.random() * 9) + 1;
    return number

}