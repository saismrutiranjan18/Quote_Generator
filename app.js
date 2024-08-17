let quote = document.getElementById("quote");
let author = document.getElementById("author2");
let btn = document.getElementById("btn");
let category = 'happiness'

let getQuote = () => {
   fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
  method: 'GET',
  headers: {
    'X-Api-Key': 'sjnIGOS9RA1ahpUWaEOBKg==5MCbIndPKjXwdmP9'
    }
  })
    .then(response => response.json())
    .then((data) => {
        quote.innerText = data[0].quote;
        author.innerText = data[0].author;
    })
    .catch(error => console.error('Error:', error));
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);