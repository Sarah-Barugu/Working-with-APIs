'use strict'
//creating variables to link back to the HTML container in which the fetched API is appended
const title = document.querySelector("h1")
const by = document.querySelector("h2")
const type = document.querySelector("h3")
const url = document.querySelector("a")
// This is the root url for the Rest API
const baseUrl = "https://hacker-news.firebaseio.com/v0";
// This url makes sure the result is returned in JSON
const newStoriesUrl = `${baseUrl}/topstories.json`;
// This url makes can be modified to get a particular news
const itemUrl = `${baseUrl}/item/`;

// This is a config object for the fetch function
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};
//   This request get the first 500 request
fetch(newStoriesUrl, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//   This fetch get the post with an ID of 32494485
fetch(itemUrl + "32485179" + ".json", options)
  .then((response) => response.json())
  .then((feedback) => {
    title.innerHTML = feedback.title
    by.innerHTML = feedback.by
    type.innerHTML = feedback.type
    url.innerHTML = feedback.url
//feedback.fact for catfact
  })
  .catch((err) => console.error(err));

  


//   1. Make an app that goes to 
// https://catfact.ninja/fact
// Let the fetch function go to the API every 5 seconds, get a fact and append it to h1 tag on the html
// Do this inside a new file called catfact.html



