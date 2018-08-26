    window.onload = function () {

    var rand = random();
    counter();
    document.getElementById('btn').onclick = function () {
        game(rand);

    };
    document.getElementById('new_game').onclick = function () {
        window.location.reload();
    }
}
    var count = 11;
    function  random() {
         var rand = Math.floor(Math.random() * 100);
         console.log(rand);
        return rand;
    }


    function counter(){
        var p = document.getElementById("counter");
        count--;
         if (count>0){
        p.innerHTML = "У вас осталось: "+count+" попиток";
         }
        else{
        newGame= confirm("Начать новую игру?");
        if(newGame==true){
            window.location.reload();
        }
    }


}
    function game(rand) {


         var num = document.getElementById("some_number").value;
         var answer = document.getElementById("answer");
         var fon = document.createElement("div");
         var pattern =/[0-99]/;
        for (var i = 0; i < answer.childNodes.length; ++i) {
            if (answer.childNodes[i].nodeType==1){
             answer.childNodes[i].style.backgroundColor = "inherit";
            }
        }
        if (pattern.test(num)==true&&num<100) {
            if(rand<num){
                answer.childNodes[1].style.backgroundColor  = "#3FFF19";
                counter();
                allTry(num,rand);
            }else if(rand>num){
                answer.childNodes[3].style.backgroundColor = "#3FFF19";
                counter();
                allTry(num,rand);
             }else if(rand==num){

                animationWindow(top);
                rezult(count);
             }
        }else {
            alert("Введите коректное выражение!!!");
        }
}

    function animationWindow() {
        var win = document.getElementById("game_and__window");
        var fon = document.getElementById("opasity_fon");
        var interval;
        var top = 0
        win.style.display="block";
        fon.style.display ="block";
        interval = setInterval(function () {
            win.style.top = "" + top + "%";
            top++;
            if (top==25){
            clearInterval(interval);
         }
         }, 25);
    }
    function rezult(count) {
        var p = document.createElement("p");
        var game_and__window =document.getElementById('game_and__window');
        var life=0;
        life= 11-count;
        p.innerHTML ="Вы угадали с "+life+" попытки";
        p.className ="text_win";
        game_and__window.appendChild(p);
        var color = 0;
        setInterval(function () {
            color = color+ 1%360;
            p.style.color = "hsl(" + color + ", 100%, 50%)";
        },25)
    }
    function allTry(num,rand) {
        var numberTry = 1;
        var p = document.createElement("p");
        var allTry = document.getElementById("all-try");
        if (num<rand){
            p.innerHTML =  ""+numberTry+") "+num+" меньше чем загаданое."
        } else if (num>rand) {
            p.innerHTML =  ""+numberTry+") "+num+" больше чем загаданое."
        }
        numberTry++;
        allTry.appendChild(p);

    }

