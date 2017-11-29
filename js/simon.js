
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
    
    get colors (){
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

class Employee {
  constructor() {
    this.alive = true;
  }

  setSkills(skills=[]) {
    const defaultSkills = ['JavaScript'];
    this.skills = skills.concat(defaultSkills);
  }

  sayHello() {
    window.setTimeout(() => {
      console.log('Hello World!');
    }, 2000);
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}