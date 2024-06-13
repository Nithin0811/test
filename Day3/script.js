"use strict";

// Create your own resume data in JSON format
var resume = {
  my_Name: "Nithin S",
  Email: "nithinsankar0804@gmail.com",
  Date_of_birth: "08.04.2004",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil"],
  Age: 20,
  Marks: { "BBA": "CGPA 7.35", "Higher secondary": "82%", SSLC: "79%" },
  Qualification: "BBA [Computer Applications]",
  Years_of_Experience: 0,
  Software_proficiency: [
    "javascript",
    "node",
    "React",
    "HTML",
    "css",
    "Ms office",
  ],
  Key_strength: ["short leaning curve", "creative", "apdaptive"],
  Personal_hobbies: ["Gaming", "Movie watching"],
};

var resume_JSON_Format = JSON.stringify(resume);
console.log(resume_JSON_Format);

// For the given JSON iterate over all for loops (for, for in, for of, forEach)
var json_data = {
  my_Name: "Nithin S",
  Email: "nithinsankar0804@gmail.com",
  Date_of_birth: "08.04.1996",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil"],
  Age: 20,
  Marks: { "BBA": "CGPA 7.35", "Higher secondary": "82%", SSLC: "79%" },
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