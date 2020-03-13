// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardParent = document.querySelector(".cards-container");

function getData() {
  axios.get(`https://lambda-times-backend.herokuapp.com/articles`).then(res => {
    const object = res.data.articles;
    //  console.log(object);
    for (let key in object) {
      let arr = object[key];
      arr.forEach(lang => {
        cardParent.appendChild(createCard(lang));
      });
    }
  });
}

getData();

function createCard(obj) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  span.textContent = obj.authorName;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(span);
  imgContainer.appendChild(img);

  return card;
}
