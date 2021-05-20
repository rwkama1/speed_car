# Speed of a car

## Description

Calculate the speed of a car

## Solution

```Javascript

class Car
{
    constructor(pdistancekilometers,ptimehours)
    {
        this.distancekilometers=pdistancekilometers;
        this.timehours=ptimehours;
    }
    speed_car=()=>
    {
    let speed;
    speed=this.distancekilometers/this.timehours;
    return speed
    }
   
}

```
## Usage

```Javascript

 let Car=require("./Car").Car;

 let car=new Car(50,1.5);
console.log("Distance in kilometers: "+car.distancekilometers);
console.log("                                              ");
console.log("Time in hours: "+car.timehours);
console.log("                                              ");
console.log("The speed of the car is "+car.speed_car()+" kilometers per hour");

```