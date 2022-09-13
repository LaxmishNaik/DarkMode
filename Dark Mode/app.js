const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  //   console.log('hello world');
  document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles
  .map((article) => {
    //   console.log(article);
    const { title, date, length, snippet } = article;
    // format date
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>Jan 04 2022</span>
            <span>${length} min read</span>
          </div>
          <p>${snippet}</p>
        </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;

// console.log(articles);
