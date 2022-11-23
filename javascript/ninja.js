/**
 * Create a Ninja class

add an attribute: name

add an attribute: health

add a attribute: speed - give a default value of 3

add a attribute: strength - give a default value of 3

add a method: sayName() - This should log that Ninja's name to the console

add a method: showStats() - This should show the Ninja's name, strength, speed, and health.

add a method: drinkSake() - This should add +10 Health to the Ninja
 */


class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(`My name is ${this.name}`)
    }
    showStats(){
        console.log(`Speed = ${this.speed}, Strength = ${this.strength}, Health = ${this.health}`)
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10
    }

    speakWisdom(){
        super.drinkSake()
        console.log("one plus one equals two")
    }

}    



const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();