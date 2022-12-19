const api = 'https://thatsthespir.it/api';
const btn = document.getElementById('btn');

btn.addEventListener('click', newQuote);
function newQuote() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const blockquote = document.createElement('blockquote');
        blockquote.textContent = data.quote
        document.body.appendChild(blockquote);

        const divAutor = document.createElement('p');
        divAutor.textContent = data.author;
        document.body.appendChild(divAutor);

        const pPerma = document.createElement('a');
        const linkText = document.createTextNode("Lien vers la citation.")
        pPerma.appendChild(linkText);
        pPerma.title = "Lien vers la citation.";
        pPerma.href = data.permalink;
        document.body.appendChild(pPerma);

        const imgPhoto = document.createElement('img');
        imgPhoto.src = data.photo;
        document.body.appendChild(imgPhoto);
        console.log(data);
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
  }

  newQuote()