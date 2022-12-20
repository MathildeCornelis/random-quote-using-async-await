const api = 'https://thatsthespir.it/api';
const btn = document.getElementById('btn');

btn.addEventListener('click', newQuote);
function newQuote() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const blockquote = document.createElement('blockquote');
        blockquote.textContent = data.quote

        const divAutor = document.createElement('p');
        divAutor.textContent = data.author;

        const pPerma = document.createElement('a');
        const linkText = document.createTextNode("Lien vers la citation.")
        pPerma.appendChild(linkText);
        pPerma.title = "Lien vers la citation.";
        pPerma.href = data.permalink;
        
        const imgPhoto = document.createElement('img');
        imgPhoto.src = data.photo;

        const divContent = document.getElementById('content');  
        
        const divTout = document.getElementById('tout');

        console.log(data);
        divContent.appendChild(imgPhoto);
        divContent.appendChild(blockquote);
        divContent.appendChild(divAutor);
        divContent.appendChild(pPerma);
        divTout.appendChild(divContent)
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
  }

  newQuote()