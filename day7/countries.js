// get all the countries from the Asian continent/region using the filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}

//get all the countries with a population of less than 2 lakhs using filter function
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all");
request1.send();
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    const pop = result1.filter((element)=>{
        return element.population<200000;
    })
console.log(pop);}


//print the following details name,capital,flag using for Eachfunction
var requestt = new XMLHttpRequest();
requestt.open("GET","https://restcountries.com/v3.1/all");
requestt.send();
requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
   resultt.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}

//print the total population of country using reduce function
var reques = new XMLHttpRequest();
reques.open("GET","https://restcountries.com/v3.1/all");
reques.send();
reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}

//print the country which uses US dollar as currency
var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function(){
    var res=JSON.parse(req.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }