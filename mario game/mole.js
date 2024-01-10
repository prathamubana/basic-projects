let curretmoletile;
let currplantile;
let score=0;
let gameover=false;
window.onload=function(){
    setGame();
}

function setGame(){
    for(let i=0;i<9;i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selecttile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setmole,1000);
    setInterval(setplant,1000);
}

function getRandomTile(){
    let num=Math.floor(Math.random()*9);
    return num.toString();
}

function setmole(){
    if(gameover){
        return;
    }
    if(curretmoletile){
        curretmoletile.innerHTML="";
    }

    let mole =document.createElement("img");
    mole.src="./monty-mole.png";
    let num=getRandomTile();
    if(currplantile && currplantile.id ==num){
        return;
    }
    curretmoletile=document.getElementById(num);
    curretmoletile.appendChild(mole);

}

function setplant(){
    if(gameover){
        return;
    }
    if(currplantile){
        currplantile.innerHTML="";
    }

    let plant =document.createElement("img");
    plant.src="./piranha-plant.png";
    let num=getRandomTile();
    if(curretmoletile && curretmoletile.id ==num){
        return;
    }
    currplantile=document.getElementById(num);
    currplantile.appendChild(plant);
}

function selecttile(){
    if(gameover){
        return;
    }
    if(this==curretmoletile){
        score +=10;
        document.getElementById("score").innerText=score.toString();
    }
    else if(this == currplantile){
        document.getElementById("score").innerText ="GAME OVER: "+ score.toString();
        gameover=true;
    }
}