//creating a html element 
const num1 = document.createElement("h1")
// This is the root url for the Rest API
const baseUrl = "https://catfact.ninja";
// This url makes can be modified to get a particular fact
const factUrl = `${baseUrl}/fact`;
// This is a configuration object for the fetch function
const options = {
  method : 'GET',
  headers : {
    Accept : "application/json"
  },
};
//setting the display to 4 seconds interval
setInterval(() => {
  // This  fetch request gets the request
  fetch(factUrl, options) 
    .then((feedback) => feedback.json())
    .then((feedback) => {
      //inserting the created element in the innerHTML
        num1.innerHTML = feedback.fact
        document.body.appendChild(num1)
  })
.catch ((err) => console.error(err)); 
}, 4000);

