//a)
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movie("KGF","Homable Flims","pg13");
var movie2=new movie('Leo','7 Screen','r');
console.log(movie1,movie2);


//b)
class movies{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movies("KGF2","studio");
var movie2=new movies('Jailer','Sun Pictures','r');
console.log(movie1,movie2);


//d)
class flim{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new flim('Thunivu','Zee Studios','PG13');

console.log(movie1)
 