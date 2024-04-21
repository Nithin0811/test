let count = 1;
function validate(){
  let table = document.getElementById('datastored')
  let row = table.insertRow(count)
    const fname = document.getElementById("fname").value
    const lname = document.querySelector("#lname").value
    const address = document.querySelector("#address").value
    const pincode = document.querySelector("#pincode").value
    const genderselect = document.querySelector("#gender-select").value
    var food = "";
    let foodcount = 0;
    //console.log(document.getElementById("food1"))
    if(document.getElementById("food1").checked == true){
        food = food + " " + document.getElementById("food1").value
        foodcount++
    }
    if(document.getElementById("food2").checked == true){
        food = food + " " + document.getElementById("food2").value
        foodcount++
    }
    if(document.getElementById("food3").checked == true){
        food = food + " " + document.getElementById("food3").value
        foodcount++
    }
    if(document.getElementById("food4").checked == true){
        food = food + " " + document.getElementById("food4").value
        foodcount++
    }
    if(document.getElementById("food5").checked == true){
        food = food + " " + document.getElementById("food5").value
        foodcount++
    }
    //console.log(food)
    const state = document.querySelector("#state").value
    const country = document.querySelector("#country").value
    
    if(fname && lname && address&& food && foodcount >=2 && pincode && state && country && genderselect){
        let cell1 = row.insertCell(0)
    cell1.innerHTML = fname
    let cell2 = row.insertCell(1)
    cell2.innerHTML = lname
    let cell3 = row.insertCell(2)
    cell3.innerHTML = address
    let cell4 = row.insertCell(3)
    cell4.innerHTML = pincode
    let cell5 = row.insertCell(4)
    cell5.innerHTML = genderselect
    let cell6 = row.insertCell(5)
    cell6.innerHTML = food 
    let cell7 = row.insertCell(6)
    cell7.innerHTML = state
    let cell8 = row.insertCell(7)
    cell8.innerHTML = country 
    }
    else if(foodcount< 2){
        alert("atleat 2 item "); return false;
    }
    else{
        alert(" fill all the details"); return false;
    }
    
   var form = document.getElementById("forms")
   form.reset();
}



