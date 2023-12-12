///////JavaScript lap 4 OOP////////////////////////////
////////Constructor function///////////////////////////////


 // Constructor function
function Person1(fullName, money, sleepMood, healthRate)
{

this.fullName = fullName;
this.money = money;
this.sleepMood = sleepMood;
this.healthRate = healthRate;

this.sleep = function(sleepHours) {

    if (sleepHours = 7){
        this.sleepMood = "happy";
    }
    else if (sleepHours < 7)
    {
        this.sleepMood="tired";
    }
    else{
        this.sleepMood="lazy";
    }

    return sleepMood;
};

this.eat = function(meals) {
    switch (meals){

        case 3 : this.healthRate = 100
        break;
        case 2 : this.healthRate = 75
        break;
        case 1 : this.healthRate = 50 
        break;
    }
    return healthRate;
    };

this.buy = function(item) {
    
        item = parseInt(item);
    
};
}

var Moataz = new Person1('moataz gamal', 100, "lazy", 100);
// TEST
Moataz.sleep(8);
Moataz.eat(3);
Moataz.buy(1);
// TEST
console.log(Moataz.money);
console.log(Moataz.healthRate);
console.log(Moataz.fullName);
console.log(Moataz.sleepMood);
///////////////////////////////////////////////////////////////////
// Problem Solved Using →→→  classes
// Class definition
class Person2 {
    constructor(fullName, money, sleepMood, healthRate) {
        // Attributes
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }

    // Methods
    sleep(sleepHours) {
        if (sleepHours === 7) {
            this.sleepMood = 'happy';
        } else if (sleepHours < 7) {
            this.sleepMood = 'tired';
        } else {
            this.sleepMood = 'lazy';
        }

        return this.sleepMood;
    }

    eat(meals) {
        switch (meals) {
            case 3:
                this.healthRate = 100;
                break;
            case 2:
                this.healthRate = 75;
                break;
            case 1:
                this.healthRate = 50;
                break;
        }
        return this.healthRate;
    }

    buy(item) {
        item = parseInt(item);
        this.money -= item * 10;
    }
}

const moataz = new Person2('Moataz gamal', 100, 'lazy', 100);

// TEST
moataz.sleep(8);
moataz.eat(3);
moataz.buy(1);

//TEST
console.log(moataz.money);
console.log(moataz.healthRate);
console.log(moataz.fullName);
console.log(moataz.sleepMood);
///////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
const Person3 = {
    init(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    },

    sleep(hours) {
        if (hours === 7) {
        this.sleepMood = "happy";
        } else if (hours < 7) {
        this.sleepMood = "tired";
        } else if (hours > 7) {
        this.sleepMood = "lazy";
        }
    },

    eat(meals) {
        if (meals = 3) {
        this.healthRate = 100;
        } else if (meals = 2) {
        this.healthRate = 75;
        } else  (meals = 1) 
        this.healthRate = 50;
        
    },

    buy(items) {
        var itemCost = 10 * items;
    
        this.money -= itemCost;

    }

    };

// TEST
moataz.sleep(8);
moataz.eat(3);
moataz.buy(1);

//TEST
console.log(moataz.money);
console.log(moataz.healthRate);
console.log(moataz.fullName);
console.log(moataz.sleepMood);
/////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////
function createPerson(fullName, money, sleepMood, healthRate) {
    var person = {
        fullName,
        money,
        sleepMood,
        healthRate,

        sleep(hours) {
        if (hours = 7) {
            this.sleepMood = "happy";
        } else if (hours < 7) {
            this.sleepMood = "tired";
        } else {
            this.sleepMood = "lazy";
        }
        },

        eat(meals) {
        if (meals = 3) {
            this.healthRate = 100;
        } else if (meals = 2) {
            this.healthRate = 75;
        } else (meals = 1) 
            this.healthRate = 50;
        
        },

        buy(items) {
        this.money -= items * 10;
        },
    };

    return person;
    }

// TEST
moataz.sleep(8);
moataz.eat(3);
moataz.buy(1);

//TEST
console.log(moataz.money);
console.log(moataz.healthRate);
console.log(moataz.fullName);
console.log(moataz.sleepMood);
