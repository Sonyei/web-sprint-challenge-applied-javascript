// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


function cardMake({Object}) {
    const cardWrapper = document.createElement('div')
    const title = document.createElement('div')
    const writer = document.createElement('div')
    const imageWrapper = document.createElement('div')
    const images = document.createElement('img')
    const credit = document.createElement('span')

    cardWrapper.classList.add('card')
    title.classList.add('headline')
    writer.classList.add('author')
    imageWrapper.classList.add('img-container')

    title.textContent = Object.headline
    credit.textContent = `By`, + Object.authorName
    images = img.src = Object.authorPhoto

    cardWrapper.append(title, writer)
    writer.appendChild(imageWrapper, credit)

    cardWrapper.addEventListener('click', event => {
        console.log(Object.headline)
    })

return cardWrapper
}


axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {

})