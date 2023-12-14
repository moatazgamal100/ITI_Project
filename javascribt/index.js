class person { 
    constructor(full_name, mony, sleep_mood, health_rate) {
        this.full_name = full_name;
        this.mony = mony;
        this.sleep_mood = sleep_mood;
        this.health_rate = health_rate;
    }
    sleep (hours) {
        if (hours == 7) {
            this.sleep_mood = "happy"
        }
        else if (hours > 7) {
            this.sleep_mood = "lazy"
        }
        else if (hours < 7) {
            this.sleep_mood = "tired"
        }
        return this.sleep_mood
    }
    eat (meals) {
        let heal = 0;
        if (meals == 3) {
            heal = 100;
            this.health_rate = heal ;
        }
        else if (meals == 2) {
            heal = 75;
            this.health_rate = heal ;
        }
        else if (meals == 1) {
            heal = 50;
            this.health_rate = heal;
        }
        return this.health_rate+ " health rate";
    }
    buy (items) {
        return this.mony - (items * 10);
    }
} 

class Employee extends person{
    constructor(full_name, mony, sleep_mood, health_rate,id,email,workMood,salary,isManger) {
        super(full_name, mony, sleep_mood, health_rate)
        this.id = id;
        this.email = email;
        this.workMood = workMood;
        this.salary = (salary < 1000) ? 1000:salary;
        this.isManger = isManger;
    }
    work(hours) {
        if (hours == 8) {
            this.workMood = "happy"
        }
        else if (hours > 8) {
            this.workMood = "tired"
        }
        else if (hours < 8) {
            this.workMood = "lazy"
        }
        return this.workMood
    }
}

let moataz = new Employee("ahmed gamal", 100, "mood", " health rate", 1, "moatazgamal100100@gmail.com", "work", 10000, "mngr");

console.log(moataz.buy(2));
console.log(moataz.eat(2));
console.log(moataz.sleep(5));
console.log(moataz.work(5));

class Office{
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    getAllEmployees() {
        return this.employees;
    }
    getEmployee(empid) {
        var returnElement = this.employees.find(function (ele) {
            if (ele.id === empid) {
                return true;
                
            }
            else{
                return false;
            }
        })
        if (returnElement.isManger === true) {
            
            delete returnElement.salary
            return returnElement;
            
        }
        else if (returnElement.isManger === false) {
            return returnElement;
        }
    }
    hire(Employee) {
        this.employees.push(Employee);
    }
    fire(empid) {
        this.employees = this.employees.filter(function (em) {
            em.id !== empid;
        })
    }
}
let off = new Office('ITI');
let arr=[]
while (true) {
    let addCondition = confirm("Do you need to add new employee")
    while (addCondition == true) {
        let action = prompt('Enter your action ( mngr, nrml, q):');
        let ismanger = false;
        if (action == "mngr") {
            ismanger = true;
        }
        
        if (action === 'q') {
            break;
        }

        let name = prompt('Enter your Name:');
        let id = prompt('ID :');
        arr.push(id);
        let email = prompt('Email :');
        let salary = parseInt(prompt('Salary:'));
        let emp = new Employee(name, 100, "mood", " health rate", id,email, "work", salary, ismanger);


        off.hire(emp);
        
    }
    if (addCondition == false) {
        break
    }
    
    
}

console.log(off.getAllEmployees());

let empId = prompt('Enter employee ID to display details:');
let check=0
for (let empIddd of arr) {
    if (empIddd == empId) {
        let employeeDetails = off.getEmployee(empId);
        console.log(employeeDetails);
        check = 1;
    }
}
if (check == 0) {
        console.log('Employee not found.');
}