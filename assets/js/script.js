const api = 'https://thatsthespir.it/api';
const btn = document.getElementById('btn');

btn.addEventListener('click', newQuote);
function newQuote() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const divContent = document.createElement('div');
        divContent.classList.add('content');
        
        const blockquote = document.createElement('blockquote');
        blockquote.textContent = data.quote

        const divAutor = document.createElement('p');
        divAutor.textContent = data.author;

        const pPerma = document.createElement('a');
        const linkText = document.createTextNode("Link to the quote.")
        pPerma.appendChild(linkText);
        pPerma.title = "Link to the quote.";
        pPerma.href = data.permalink;
        
        const imgPhoto = document.createElement('img');
        imgPhoto.src = data.photo;
        imgPhoto.setAttribute('alt', "Image corresponding to the quote.")

        const divTout = document.getElementsByClassName('tout');

        console.log(data);
        divContent.appendChild(imgPhoto);
        divContent.appendChild(blockquote);
        divContent.appendChild(divAutor);
        divContent.appendChild(pPerma);
        divTout[0].appendChild(divContent);
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
  }

  newQuote()