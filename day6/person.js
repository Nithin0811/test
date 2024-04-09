class Person{
    constructor(name,heigth,weigth,age,qualification,city,state,nationality){
        this.name=name;
        this.heigth=heigth;
        this.weigth=weigth;
        this.age=age;
        this.qualification=qualification;
        this.city=city;
        this.state=state;
        this.nationality=nationality;
    }
    details(){
        console.log(`
        name:${this.name}
        height:${this.heigth}
        weight:${this.weigth}
        age:${this.age}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}
        nationality:${this.nationality}`)
    }
}
let Person1=new Person("Nithin","5.5","74","21","BBA CA","Tirupur","TamilNadu","Indian")
Person1.details()
