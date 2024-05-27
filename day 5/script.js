"use strict";

// Create your own resume data in JSON format
var resume = {
  my_Name: "Nithin S",
  Email: "nithinsankar0804@gmail.com",
  Date_of_birth: "08.04.2004",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil", "French"],
  Age: 21,
  Marks: { "BBA": "84%", "Higher secondary": "82%", SSLC: "80%" },
  Qualification: "BBA Computer Application",
  Software_proficiency: [
    "javascript",
    "mongodb",
    "mysql",
    "HTML",
    "css",
    "Ms office",
  ],
  Key_strength: ["short leaning curve", "creative", "apdaptive"],
  Personal_hobbies: ["Gaming"],
};

var resume_JSON_Format = JSON.stringify(resume);
console.log(resume_JSON_Format);

// For the given JSON iterate over all for loops (for, for in, for of, forEach)
var json_data = {
  my_Name: "Nithin S",
  Email: "nithinsankar0804@gmail.com",
  Date_of_birth: "08.04.2004",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil", "French"],
  Age: 21,
  Marks: { "BBA": "84%", "Higher secondary": "82%", SSLC: "80%" },
};
const count = Object.keys(json_data);

// for loop
for (let i = 0; i < count.length; i++) {
  console.log(json_data[count[i]]);
}

// for in
for (let keys in json_data) {
  console.log(json_data[keys]);
}

// for Of
for (let i of count) {
  console.log(json_data[i]);
}

// for each
count.forEach(values);
function values(item) {
  console.log(json_data[item]);
}