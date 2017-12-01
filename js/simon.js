
class Simon {
    
    constructor() {
    this.colors = [];    
    this.colorChoices = ["Red", "Green", "Blue", "Yellow"];
    this.correctGuesses = 0;
    
    }
    
    newGame(){
        this.colors =[];
        this.correctGuesses = 0;
    }
    
    get getColors (){
        return this.colors;
    }
    
    addColor(){
    
    let randIndex = Math.floor(Math.random() * this.colorChoices.length);
    this.colors.push(this.colorChoices[randIndex]);
        
    }
    
    verifySelection(selected){
        if(this.colors && (this.colors.length >= this.correctGuesses)){
            if(this.colors[this.correctGuesses] === selected){
                this.correctGuesses++;
                return true;
            }else{
                this.correctGuesses = 0;
                return false;
            }
        }else{
            return false;
        }
    }
    
    
}

export default Simon;

