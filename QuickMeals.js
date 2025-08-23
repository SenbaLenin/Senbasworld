// Import Recipe Categories
// =============================
// Each category is a JS module exporting an array of recipe objects.
// You can add more categories by creating new JS files and importing them here.
import { LightBright} from './recipes/LightBright.js';
import { RiceDelights } from './recipes/RiceDelights.js';

// =============================
// Load recipe content into page
// =============================
function loadContent(file, title = '') {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("File not found");
      return response.text();
    })
    .then(html => {
      // Keep main title fixed; recipe title in separate span to avoid layout shifts
  document.getElementById('recipeTitle').innerHTML =
  title ? `&nbsp;⭐ ${title} ⭐` : '';
      document.getElementById('main-content').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('main-content').innerHTML =
        `<h2>Error</h2><p>Could not load content.</p>`;
      console.error(error);
    });
}

// =============================
// Toggle submenu visibility
// =============================
function toggleSubmenu(button) {
  button.classList.toggle('active');
  const submenu = button.nextElementSibling;
  if (submenu) submenu.classList.toggle('show');
}

// =============================
// Filter menu items
// =============================
function filterMenu() {
  const input = document.getElementById('menuSearch').value.toLowerCase();
  const items = document.querySelectorAll('#menuList a, #menuList button');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? '' : 'none';
  });
}

// =============================
// Build the category menu
// =============================
function buildMenu() {
  const menuList = document.getElementById('menuList');
  const categories = [
    { title: 'Light & Bright', data: LightBright },
    { title: 'Rice Delights ', data: RiceDelights }
  ];

  categories.forEach(category => {
    const catBtn = document.createElement('button');
    catBtn.textContent = `${category.title} ▾`;
    catBtn.addEventListener('click', () => toggleSubmenu(catBtn));
    menuList.appendChild(catBtn);

    const submenu = document.createElement('div');
    submenu.classList.add('submenu');

    category.data.forEach(item => {
      const link = document.createElement('a');
      link.textContent = item.title;
      link.href = item.detailsFile;
      link.addEventListener('click', e => {
        e.preventDefault();
        loadContent(item.detailsFile, item.title);
      });
      submenu.appendChild(link);
    });

    menuList.appendChild(submenu);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildMenu();
  document.getElementById('menuSearch').addEventListener('keyup', filterMenu);
});
