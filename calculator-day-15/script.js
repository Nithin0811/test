const element = document.createElement("div");
element.innerHTML = `<div class = "container">
    <h1 id = "title">Calculator</h1>
    <p id = "description">Creating a calculator using DOM</p>
    <div class="calculator-container">
        <div class="calc">
            <input id="result" type="text" placeholder="0">
            <button onClick="Clear()" class="fun-color btn">AC</button>
            <button onClick="del()" class="fun-color btn">DEL</button>
            <button onClick="display('.')" class="fun-color btn">.</button>
            <button onClick="display('*')" class="fun-color btn" id="mul">*</button>
            <button onClick="display('7')" class="btn">7</button>
            <button onClick="display('8')" class="btn">8</button>
            <button onClick="display('9')" class="btn">9</button>
            <button onClick="display('/')" class=" fun-color btn" id="modulus">/</button>
            <button onClick="display('4')" class="btn">4</button>
            <button onClick="display('5')" class="btn">5</button>
            <button onClick="display('6')" class="btn">6</button>
            <button onClick="display('-')" class="fun-color btn" id="subtract">-</button>
            <button onClick="display('1')" class="btn">1</button>
            <button onClick="display('2')" class="btn">2</button>
            <button onClick="display('3')" class="btn">3</button>
            <button onClick="display('+')" class="fun-color btn" id="add">+</button>
            <button onClick="display('0')" class="btn" id="add">0</button>
            <button onClick="display('00')" class="btn">00</button>
            <button onClick="calculate()" class="fun-color btn equal" id="equal">=</button>
        </div>
    </div>
<div>`;
document.body.append(element);
const resultScreen = document.getElementById("result")
function display(num){
    resultScreen.value += num ;
}
function calculate(){
    try{
        resultScreen.value = eval(resultScreen.value) 
    }
    catch(err){
        alert('ivalid')
    }
}
function Clear(){
    resultScreen.value = "";
}
function del(){
    resultScreen.value = resultScreen.value.slice(0, -1);
}