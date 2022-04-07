

const boxes =document.querySelectorAll(".box");
console.log(boxes)
//const board = document.getElementById("gameBoard")
//console.dir(board)
const resetButton = document.getElementById('resetButton')
console.dir(resetButton)
const message = document.getElementById('gameText')
console.dir(message)
const player_O = 'o' 
const player_X = 'x'
let currentPlayer = player_O
let space=[null,null,null, null,null,null,null,null,null]

let clicks = 0



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
//style______________________________________________________________________________




function clickedBox(e){
    
    console.log(space);
    let id =e.target.id;
    console.log(e);
    
    if (!space[id]){
        space[id] = currentPlayer;
        e.target.innerText= currentPlayer
    }
    if(winning()){
        message.innertext = `${currentPlayer} wins!!`;
        reset();
        return;
        
    } draw()
    currentPlayer = currentPlayer === player_O ? player_X : player_O;
    // if (currentPlayer)
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

function draw(){

    if (!space.includes(null)){
        message.innerText = `cat game`;
    }
    //for (let i = 0; clicks <9 ; i++)
   
//     if(space !== null){
        
//         clicks ++;
//         console.log(clicks);
//     }
//     if (clicks === 9){
//         message.innerText = `cat game`;
//         //reset()
//     }
// }
}
     
    
function reset(){

    space = new Array (9*null)

}
    
//}


//_________________________________________

// function updateTextOnDomNode(text, node){
//     node.innerText=text
// }

// function updateSpace(index, value){
//     space[index]=value
// }

// updateSpace(3, "s")
// console.log(space);