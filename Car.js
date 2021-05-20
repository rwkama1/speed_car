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
module.exports={Car}