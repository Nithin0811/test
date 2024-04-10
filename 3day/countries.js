var xhr=new XMLHttpRequest();
xhr.open ("GET","https://restcountries.com/v3.1/all", true);
xhr.onload = function() {
//   console.log("XMLHttpRequest - status", xhr.status);
var countries = JSON.parse(xhr.responseText);
console.log(countries);
for (var i = 0; i < countries.length; i++) {
    console.log(countries[i].name.commom + ":" + countries[i].flag);
    console.log("population: ",countries[i].populations)
    console.log("regions: ",countries[i].regions);
}
};
xhr.send();