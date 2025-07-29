import { SouthIndian } from './recipes/SouthIndianRecipes.js';
import { NorthIndian } from './recipes/NorthIndianRecipes.js';
import { Snacks } from './recipes/SnacksRecipes.js';
import { Soup } from './recipes/SoupRecipes.js';
import { Chutney } from './recipes/ChutneyRecipes.js';
import { Sweets } from './recipes/Sweets.js';

const recipes = { SouthIndian, NorthIndian, Snacks, Soup, Chutney,Sweets };

const recipeCategoryInfo = {
  SouthIndian: {
    img: "images/Senba2.jpg",
    text: "South Indian cuisine is known for its rich flavors and variety of spices. Enjoy dosas, idlis, sambar, chutneys, and much more. Discover the authentic taste of the south!"
  },
  NorthIndian: {
    img: "images/Roja.jpg",
    text: "North Indian cuisine features hearty curries, assorted breads, vibrant flavors, and aromatic spices. Savor the taste of paneer, dal, and classic gravies."
  },
  Snacks: {
    img: "images/snack1.jpg",
    text: "Enjoy quick and tasty snacks from all over India! Find recipes for crispy, spicy, and delightful snacks for any occasion."
  },
  Soup: {
    img: "images/soup2.jpg",
    text: "Warm up with our collection of delicious soups. From light broths to hearty stews, find your new favorite soup recipe."
  },
  Chutney: {
    img: "images/chutney.jpg",
    text: "Add flavor to your meal with our tangy, spicy, and sweet chutney recipes. Perfect companions for snacks and main courses."
    }, 
  Sweets: {
    img: "images/Southindian1.jpg",
    text: "Indian sweets—fondly known as mithai—are not just desserts; they’re woven into the soul of celebration,tradition, and hospitality across the world"
    }
 
};

function showContent(page) {
  const mainContent = document.getElementById('mainContent');
  let content = '';
  let sidebar = '';
  let isRecipeCategory = false;

  if (recipes[page]) {
    isRecipeCategory = true;
    setActiveLink(`${page}-link`);
    sidebar = `
      <input id="searchBox" type="text" placeholder="Search recipes..." onkeyup="searchSidebar('${page}', this.value)">
      <ul id="sidebarList">
        ${recipes[page].map(r =>
          `<li><a href="#" onclick="showRecipe('${page}', '${r.id}'); return false;">${r.title}</a></li>`
        ).join('')}
      </ul>
    `;
    // Get category info for detailed main content
    const info = recipeCategoryInfo[page];
    content = `
      <div style="display:flex;align-items:center;justify-content:center;gap:32px;">
        <div style="flex:1;min-width:200px;">
          <h2 style="margin-top:0">${page.replace(/([A-Z])/g, ' $1').trim()} Recipes</h2>
          <p>${info.text}</p>
          <p style="margin:40px 0;">Select a recipe to view details.</p>
        </div>
        <div style="flex-shrink:0;">
          <img src="${info.img}" alt="${page} cuisine" style="max-width:300px;width:100%;border-radius:8px;">
        </div>
      </div>
    `;
  }

  switch(page) { 
case 'home':
  setActiveLink('home-link');
  content = `
    <div style="display: flex; align-items: center; gap: 20px; justify-content: center; margin-top: 20px;">
      <img src="images/Senba2.jpg" alt="Portrait of Senba" style="width: 100px; height: 100px; border-radius: 50%;">
      <h2 style="margin: 0;">Welcome to Senba's World!</h2>
    </div>
    <div class="hero-image" style="margin-top: 30px;">
      <img src="images/kitchen1.jpg" alt="Modern kitchen with natural lighting">
    </div>
    <p style="text-align: center;">Select a menu item to see more content here.</p>
  `;
  break;
case 'About':
      setActiveLink('About-link');
      content = `
        <link rel="stylesheet" href="asset/about.css">
        <h2>About Senba's World</h2>
        <p>This website is a collection of my favorite recipes, sites, and more!</p>
        <div class="slideshow-container">
          <div class="slide fade">
            <img src="images/Roja2.jpg" alt="Image 1">
            <div class="caption">Caption for Image 1</div>
          </div>
          <div class="slide fade">
            <img src="images/balaji2.jpg" alt="Image 2">
            <div class="caption">Caption for Image 2</div>
          </div>
          <div class="slide fade">
            <img src="images/Leni2.jpg" alt="Image 3">
            <div class="caption">Caption for Image 3</div>
          </div>
         <div class="slide fade">
            <img src="images/Pooja1.jpg" alt="Image 3">
            <div class="caption">Caption for Image 3</div>
          </div>
        </div>  
     <div class="slide fade">
            <img src="images/Senba1.jpg" alt="Image 3">
            <div class="caption">Caption for Image 3</div>
          </div>
        </div>     
      `;
      document.getElementById("mainContent").innerHTML = content;
      initSlideshow(); // ← Manually call the slideshow function
      break;

 case 'Favorites':
      setActiveLink('Favorites-link');
      content = `
        <div class="hero-image">
          <img src="images/veg.avif" alt="Senba">
        </div>
        <h2>Favorite Sites</h2>
        <ul>
          <li><a href="https://www.youtube.com/" target="_blank">YouTube</a></li>
          <li><a href="https://www.dinamalar.com/" target="_blank">Dinamalar</a></li>
        </ul>
      `;
      break;
  
 case 'Contact':
  setActiveLink('Contact-link');
  content = `
    <div style="display: flex; align-items: center; gap: 20px;">
      <img src="images/Senba2.jpg" alt="Senba photo" style="width: 100px; height: 100px; border-radius: 50%;">
      <div>
        <h2>Connect with Me</h2>
        <p>Email: <a href="mailto:senbaleni@gmail.com">Senba's world</a></p>
      </div>
    </div>
  `;
  break;
    default:
      if (!isRecipeCategory) {
        setActiveLink();
        content = `<h2>Content not found.</h2>`;
      }
  }

  if (isRecipeCategory) {
    mainContent.innerHTML = `
      <div style="display:flex;align-items:flex-start;">
        <aside id="sidebar">
          ${sidebar}
        </aside>
        <main id="recipeContent" style="flex:1;">
          ${content}
        </main>
      </div>
    `;
  } else {
    mainContent.innerHTML = content;
  }
}

// The searchSidebar function should be global for onkeyup to work
window.searchSidebar = function(category, query) {
  query = query.toLowerCase();
  const ul = document.getElementById('sidebarList');
  if (!ul) return;
  const items = ul.getElementsByTagName('li');
  let found = false;
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('no-results')) continue;
    const text = items[i].textContent.toLowerCase();
    if (text.includes(query)) {
      items[i].style.display = '';
      found = true;
    } else {
      items[i].style.display = 'none';
    }
  }
  let noResults = ul.querySelector('.no-results');
  if (!found) {
    if (!noResults) {
      noResults = document.createElement('li');
      noResults.className = 'no-results';
      noResults.textContent = 'No results found.';
      ul.appendChild(noResults);
    }
  } else if (noResults) {
    ul.removeChild(noResults);
  }
};

window.showRecipe = function(category, recipeId) {
  const recipe = recipes[category].find(r => r.id === recipeId);
  const recipeContent = document.getElementById('recipeContent');
  if (recipeContent && recipe && recipe.detailsFile) {
    fetch(recipe.detailsFile)
      .then(res => res.text())
      .then(html => {
        recipeContent.innerHTML = html;
      })
      .catch(() => {
        recipeContent.innerHTML = '<p>Could not load recipe details.</p>';
      });
  } else if (recipeContent) {
    recipeContent.innerHTML = '<p>Recipe details missing.</p>';
  }
};

function setActiveLink(id) {
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.remove('active');
    a.removeAttribute('aria-current');
  });
  if (id) {
    const activeLink = document.getElementById(id);
    if (activeLink) {
      activeLink.classList.add('active');
      activeLink.setAttribute('aria-current', 'page');
    }
  }
}

window.showContent = showContent;

window.onload = function() {
  showContent('home');
};


