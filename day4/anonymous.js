//print odd numbers in array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
b = function() {
let c = [];
for (let i = 0; i < a.length; i++) {
if (a[i] % 2 != 0) {
c.push(a[i]);
}
}
console.log(c);
};
b();
(function() {
let c = [];
for (let i = 0; i < a.length; i++) {
if (a[i] % 2 != 0) {
c.push(a[i]);
}
}
console.log(c);
})();

// Convert all the strings to title caps in a string array
b = function(vj) {

    var sentence = vj.toLowerCase().split();
    
    for (let i = 0; i < sentence.length; i++) {
    
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    
    }
    
    console.log(sentence.join());
    
    return sentence;
    
    }
    b("i am the one super one");
    (function(vj) {

        var sentence = vj.toLowerCase().split();
        
        for (let i = 0; i < sentence.length; i++) {
        
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        
        }
        
        console.log(sentence.join());
        
        return sentence;
        
        })("i am the one super one"); 

//Sum of all numbers in an array
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
b = function() {
let sum = 0;
for (let i = 0; i < a.length; i++) {
sum = sum + a[i];
}
return sum;
}
console.log(b());
(function() {

    let sum = 0;
    
    for (let i = 0; i < a.length; i++) {
    
    sum = sum + a[i];
    
    }
    
    console.log(sum);
    
    })();


//Return all the prime numbers in an array
let p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
b = function(...p) {

    for (let i = 0; i < p.length; i++) {
    
    for (let j = 2; j <= p[i]-1; j++) {
    
    if (p[i] % j == 0) {
    
    return false;
    
    }
    
    }
    
    return p[i] > 1;
    
    }
    
    };
    
    console.log(p.filter(b));
    (prime = function(a) {

        for (let j = 2; j <= p-1; j++) {
        
        if (p % j == 0) {
        
        return false;
        
        }
        
        }
        
        return p > 1
        
        }) ();
        
        console.log(p.filter(prime))

//Remove duplicates from an array
let arr1 = [1, 2, 2, 2, 4, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 22, 4, 4, 567, 67, 78, 78, 45, 67, 45, 45, 45, 78, 67, 56, 54];
let dup = function(arr1) {
    let newarr1 = [...new Set(arr1)];
console.log(newarr1);
}
dup(arr1);
(function(arr1) {
let newarr1 = [...new Set(arr1)];
console.log(newarr1);
})(arr1)

//Rotate an array by k times
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 3;
let rot = function(arr) {
for (let i = 0; i < k; i++) {
arr.unshift(arr.pop());
}
console.log(arr);
}
rot(arr);
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(arr) {
for (let i = 0; i < k; i++) {
arr.unshift(arr.pop());
}
console.log(arr);
})(arr);