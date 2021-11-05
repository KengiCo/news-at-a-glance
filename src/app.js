const appHook = document.querySelector("#app");

fetch("http://127.0.0.1:8000/results")
  .then((response) => response.json())
  .then((data) => {
      data.forEach(article => {
        const title = `<a class="anchor" target="_blank" href="${article.link}"><div class="box"> ${article.title} </div></a>`
        appHook.insertAdjacentHTML("beforeend", title)
      })
  })
  .catch((err) => console.log(err));
