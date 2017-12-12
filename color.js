var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons =document.querySelectorAll(".mode");

init();
function init(){
    //mode buttons event listeners
    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        //turn-operator : same as an if statement where 1st this equals smth ? run this: otherwise run this;
        this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
//        if(this.textContent === "Easy"){
//            numberOfSquares = 3;
//        }else{
//            numberOfSquares = 6;
//        }
        reset();

        })
    }
    for(var i=0; i< squares.length; i++){
        //add eventListener - click to each square
        squares[i].addEventListener("click", function(){
            //grab color of clicked square and compare it to pickedColor
            var clickedSquare = this.style.backgroundColor;
            if(clickedSquare === pickedColor){
                message.textContent = "Correct!";
                changeColors(clickedSquare);
             h1.style.backgroundColor=clickedSquare;
                resetButton.textContent="Play Again?";
            } else {
                this.style.backgroundColor="#f5fbff";
                message.textContent = "Try Again";
            }
        });
    }
    
}


function reset(){
    //generate new colors
    colors=generateRandomColors(numberOfSquares);
    //pick a new random color from arr
    pickedColor=pickColor();
    
    message.textContent="";
    //change colorDisplay to match picked Color
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    //change colors of squares
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display="block";
           squares[i].style.background = colors[i];
           }else{
               squares[i].style.display ="none";
           }
        squares[i].style.backgroundColor=colors[i];
        }
    //change header color back to default
    h1.style.backgroundColor="#274c5e";
}

resetButton.addEventListener("click", function(){
    reset();
});

//change RGB text in heading by RGB value picked
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;

//loop through squares and add color and "click" event
for(var i=0; i< squares.length; i++){
    //add eventListener - click to each square
    squares[i].addEventListener("click", function(){
        //grab color of clicked square and compare it to pickedColor
        var clickedSquare = this.style.backgroundColor;
        if(clickedSquare === pickedColor){
            message.textContent = "Correct!";
            changeColors(clickedSquare);
            h1.style.backgroundColor=clickedSquare;
            resetButton.textContent="Play Again?";
            
        } else {
            this.style.backgroundColor="#f5fbff";
            message.textContent = "Try Again";
        }
    });
}


//change all colors to pickedColor after correct guess
function changeColors(color){
    //loop through each square to match pickedColor
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
};

//function for picking random index color for pickedcolor [0]-[5]
function pickColor(){
    var random= Math.floor(Math.random() * colors.length);
    return colors[random]
};

function generateRandomColors(num){
    //make an array add num random colors to array, return that array
    var arr =[];
    for(var i=0; i<num; i++){
        //get random color  and push into arr
        arr.push(randomColor())
    }
    return arr;
}; 

// called inside generateRandomColors(num) f.
function randomColor() {
    //pick a "red" from 0-255,
    var red = Math.floor(Math.random()*256);
    //"green"
    var green = Math.floor(Math.random()*256);
    //"blue"
    var blue = Math.floor(Math.random()*256);
   return "rgb(" + red +", " + green +", "+ blue+")";
}