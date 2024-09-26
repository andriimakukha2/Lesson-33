async function fetchData(searchParams) {
  const API_KEY = '21eac196'

  let endpoint = `http://www.omdbapi.com/?apikey=${API_KEY}`

  for(let key in searchParams) {
    endpoint += `&${key}=${searchParams[key]}`
  }

  try {
    let request = await fetch(endpoint)
    if(!request.ok) {
      throw new Error('Failed to fetch data')
    }

    let data = await request.json()
    if(data.Response === 'False') {
      console.log('test')
      throw new Error(data.Error)
    }

    renderSearchResults(data)
  } catch (err) {
    console.error(err)
  }


}

const params = new URLSearchParams(window.location.search);
if(params.has('requestInfo')){
  fetchData(JSON.parse(params.get('requestInfo')))
}

function renderSearchResults(data) {
  data.Search.forEach((item, index) => {
    const article = document.createElement('article');
    const img = document.createElement('img');
    img.src = item.Poster;
    img.setAttribute('alt', item.Title);
    img.classList.add('mb-6')

    article.appendChild(img);

    const h2 = document.createElement('h2');
    h2.innerText = item.Title;
    h2.classList.add('text-4xl');
    article.appendChild(h2);


    const hr = document.createElement('hr');
    hr.className = 'my-2';
    article.appendChild(hr);

    const div = document.createElement('div');
    div.className = "flex justify-between items-center mb-4"

    const year = document.createElement('p');
    year.innerText = item.Year;
    year.classList.add('text-2xl');
    div.appendChild(year)

    const ganre = document.createElement('p');
    ganre.innerText = item.Type;
    ganre.classList.add('text-2xl');
    div.appendChild(ganre)

    article.appendChild(div);

    const link = document.createElement('a');
    link.className = 'duration-300 hover:underline hover:text-yellow-500'
    link.href = `${window.location.origin}/movie.html?id=${item.imdbID}`;
    link.innerText = 'Read more >'

    article.appendChild(link);

    document.querySelector('#searchResults').appendChild(article)
  })
}
