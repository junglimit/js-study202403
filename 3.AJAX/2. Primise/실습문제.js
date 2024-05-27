
const URL = 'https://yts.mx/api/v2/list_movies.json'

const $movieList = document.querySelector('.movie-list');
const renderPosts = postList => {
  

  postList.forEach(post => {

    const $template = document.getElementById('single-post');

    const $divImg = document.importNode($template.content, true);
   
    $divImg.querySelector('img-box').textContent = post.large_cover_image;

    $divImg.querySelector('title').textContent = post.title;
    $divImg.querySelector('year').textContent = post.year;
    $divImg.querySelector('rating').textContent = post.rating;

    $movieList.appendChild($div);
  });
}


fetch(URL)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    renderPosts(json);
  })
  
