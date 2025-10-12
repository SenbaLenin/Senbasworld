let chutneyData = [];
let currentIndex = 0;
const batchSize = 10;

function createChutneyCard(chutney) {
  const card = document.createElement('div');
  card.className = 'chutney-card';
  card.setAttribute('data-name', chutney.name.toLowerCase());

  if (chutney.image) {
    const img = document.createElement('img');
    img.src = chutney.image;
    img.alt = chutney.name
    img.className = 'chutney-img';
    card.appendChild(img);
  }

  const title = document.createElement('h2');
  title.textContent = chutney.name;

  const button = document.createElement('button');
  button.className = 'toggle-btn';
  button.textContent = 'View Details';

  const details = document.createElement('div');
  details.className = 'chutney-details';

  if (chutney.ingredients) {
    const ing = document.createElement('p');
    ing.innerHTML = `<strong>Ingredients:</strong> ${chutney.ingredients}`;
    details.appendChild(ing);
  }

  if (chutney.tempering) {
    const temp = document.createElement('p');
    temp.innerHTML = `<strong>Tempering:</strong> ${chutney.tempering}`;
    details.appendChild(temp);
  }

  if (chutney.method) {
    const meth = document.createElement('p');
    meth.innerHTML = `<strong>Method:</strong> ${chutney.method}`;
    details.appendChild(meth);
  }

  button.addEventListener('click', () => {
    details.classList.toggle('show');
    button.textContent = details.classList.contains('show') ? 'Hide Details' : 'View Details';
  });

  card.appendChild(title);
  card.appendChild(button);
  card.appendChild(details);

  return card;
}

function loadNextBatch(container) {
  const nextItems = chutneyData.slice(currentIndex, currentIndex + batchSize);
  nextItems.forEach(chutney => {
    container.appendChild(createChutneyCard(chutney));
  });
  currentIndex += batchSize;
}

function setupLazyScroll(container) {
  window.addEventListener('scroll', () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (nearBottom && currentIndex < chutneyData.length) {
      loadNextBatch(container);
    }
  });
}

function setupSearch(searchInput, container) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.chutney-card');

    cards.forEach(card => {
      const name = card.getAttribute('data-name');
      card.style.display = name.includes(query) ? 'block' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('chutney-container');
  const searchInput = document.getElementById('search');

  fetch('chutneys.json')
    .then(response => response.json())
    .then(data => {
      chutneyData = data;
      loadNextBatch(container);
      setupLazyScroll(container);
      setupSearch(searchInput, container);
    });
});

