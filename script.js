/* .js files add interaction to your website */
/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps. As a student, my learning now depends on my access to the internet. For example, " + learning + ". Please support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps.";
}


//Move these variables to the top
var factList = ["More than 43 million Americans struggle with mental illness",
"1 in 5 young people (age 13-18) has or will develop a mental illness in their lifetime",
"Youth depression rates have risen from 5.9% to 8.2% since 2012. Depression symptoms can impact performance in school and interfere with personal relationships.[3]",
"Most Americans lack access to adequate mental health treatment. 56% of American adults with mental illness did not receive care in the last year.[4]",
"Mental illnesses can affect people of any age, race, religion, or income. A mental illness is a medical condition that disrupts a person’s thinking, feeling, mood, and ability to relate to others and daily functioning.[5]",
"Many factors contribute to the development of a mental health condition, including life experiences (such as trauma or a history of abuse), biological factors, and family history of mental illness.[6]",
"Depression is the leading cause of disability worldwide.[7]",
"Members of LGBTQ+ community are almost 3 times more likely to experience a mental health condition such as major depression or generalized anxiety disorder.[8]",
"Common signs of mental health issues include: extreme mood swings, changes in eating habits, excessive worrying or fear, problems concentrating, and avoiding friends or social activities.[9]",
"1/2 of all mental illnesses show early signs before a person turns 14 years old, and 3/4 of mental illnesses begin before age 24.[10]"

];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

