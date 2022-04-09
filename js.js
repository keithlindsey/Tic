

const boxes =document.querySelectorAll(".box");
console.log(boxes)
const resetButtonContainer = document.getElementsByClassName('reset')
console.dir(resetButton)
const message = document.getElementById('gameText')
console.dir(message)
const player_O = 'o' 
const player_X = 'x'
let currentPlayer = player_O
let space=[null,null,null, null,null,null,null,null,null]
//input buttons_____________________________________________
const p1Button= document.getElementById("p1")
const p1Text = document.getElementById('inputOne')
const out1 = document.getElementById('pOne')



function fun1(){
    out1.innerHTML = p1Text.value + " is O and goes first!!!"
    p1Text.value =""
}


p1Button.addEventListener('click', fun1 )

const p2button = document.getElementById("p2")
const p2Text = document.getElementById('inputTwo')
const out2 = document.getElementById('pTwo')




function fun2(){
    out2.innerHTML = p2Text.value + " is X and goes second!!!"
    p2Text.value = ""
    
}

p2button.addEventListener('click', fun2)

















//Style____________________________________________________________________________

function borderBottom(){
    document.getElementById("0").style.borderBottom = "thick solid black";
    document.getElementById("1").style.borderBottom = "thick solid black";
    document.getElementById("2").style.borderBottom = "thick solid black";
}
function borderRight(){
    document.getElementById("0").style.borderRight ="thick solid black";
    document.getElementById("3").style.borderRight ="thick solid black";
    document.getElementById("6").style.borderRight ="thick solid black";
}
function borderLeft(){
    document.getElementById("2").style.borderLeft="thick solid black";
    document.getElementById("5").style.borderLeft="thick solid black";
    document.getElementById("8").style.borderLeft="thick solid black";
}
function borderTop(){
    document.getElementById("6").style.borderTop="thick solid black";
    document.getElementById("7").style.borderTop="thick solid black";
    document.getElementById("8").style.borderTop="thick solid black";
    
}
borderBottom()
borderLeft()
borderTop()
borderRight()
for (const box of boxes) {
    box.addEventListener('click',clickedBox)
}
resetButton.addEventListener('click', reset)
console.log("clicked");

//style_____________________________________________________________________________







function clickedBox(e){
    
    let id =e.target.id;
  
    
    if (!space[id]){
        space[id] = currentPlayer;
        e.target.innerText= currentPlayer
        if(winning()){
            message.innerText = `${currentPlayer} wins!!`;
            debugger
            space.fill(1)
            
            return;
            
        } 
        catGame()
        currentPlayer = currentPlayer === player_O ? player_X : player_O

    }    
    
}
function winning(){
    if (space[0] === currentPlayer){
        if( space[1]  === currentPlayer && space[2] === currentPlayer){
            message.innerText = `${currentPlayer} wins!!`;
            return true;
        }
        if(space[3]=== currentPlayer && space[6]=== currentPlayer){
            message.innerText = `${currentPlayer} wins!!`;

            return true;
        }
        if(space[4]=== currentPlayer && space[8] === currentPlayer){
            message.innerText = `${currentPlayer} wins!!`;
            return true;
        }
    }

    if (space[8] === currentPlayer){
        if(space[2] === currentPlayer&& space[5] === currentPlayer){
            message.innerText = `${currentPlayer} wins!!`;
            return true;
        }
        if(space[6]=== currentPlayer && space[7]=== currentPlayer){
            message.innerText = `${currentPlayer} wins!!`;
            return true;
        }
        
    }if (space[4] === currentPlayer){
        if(space[3] === currentPlayer&& space[5]=== currentPlayer){
            message.innerText = `${currentPlayer} wins!!`;
            return true;
        }
        if(space[1]=== currentPlayer && space[7] === currentPlayer){
            message.innerText = `${currentPlayer} wins!!`;
            return true;
        }
        if(space[2]=== currentPlayer && space[6] === currentPlayer){
            message.innerText = `${currentPlayer} wins!!`;
            return true;
        }
    }
};
function catGame(){

    if (!space.includes(null)){
        message.innerText = `cat game`;
    }
    
}
     
    
function reset(){
    boxes.forEach((el, i) => {
        el.innerText = ""
        space[i] = null
    })
    currentPlayer = player_O
    console.log('player: ', currentPlayer)
    console.log('dataSet: ', space)
   message.innerText= "Tic Tac Toe"
   out2.innerHTML= ""
   out1.innerHTML= ""
  


}
    
