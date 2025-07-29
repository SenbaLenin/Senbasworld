# 🍲 Senba’s World – Recipes 
<div style="display: flex; align-items: center; gap: 20px;">
  <img src="images/Senba2.jpg" alt="Senba photo" width="100" style="border-radius: 50%;">
  <div>
    <h3>Senba</h3>
    <p>Recipe Curator & Culinary Enthusiast</p>
  </div>
</div>
Welcome to **Senba’s World**, a clean, responsive, and flexible recipe web app. Easily browse South Indian, North Indian, snack, and chutney recipes — plus favorites and contact info — all in one seamless single-page experience.

## ✨ Features

- **Intuitive Navigation Bar**  
  Effortlessly switch between Home, Recipes, About, Favorites, and Contact sections.

- **Categorized Recipes**  
  Recipes are neatly organized by region and type (South Indian, North Indian, Snacks, Chutneys).

- **Live Sidebar Search**  
  Filter recipes dynamically as you type using the sidebar search.

- **Interactive Recipe Details**  
  Click a recipe to load its full details from dedicated HTML files via AJAX.

- **Favorites Section**  
  Quick access to a curated list of external recipe and culinary sites.

- **Responsive Design**  
  Fluid layout adapts seamlessly across desktop and mobile devices using CSS media queries.

- **Easy Customization**  
  Add or edit recipes by updating the `recipes` object and supplying HTML files.

---

## 🧑‍🍳 Adding & Editing Recipes

1. **Create Your Recipe HTML**  
   Save your recipe in the appropriate `recipes/` subfolder.

2. **Update the JavaScript**  
   Add your new recipe to the corresponding array in the `recipes` object:
   ```javascript
   SouthIndian: [
     {
       id: 'IdliPodi',
       title: 'Idli Podi',
       detailsFile: 'recipes/SouthIndian/IdliPodi.html'
     },
     // Add your new recipe entry here
   ]
   ```

3. **Refresh & Enjoy**  
   Reload the page to see your recipe appear instantly in the sidebar.

---

## 🎨 Customization Tips

- **Style & Layout**  
  All CSS resides in the `<style>` section of `index.html`. Tweak fonts, colors, or layout to match your taste.

- **Navigation**  
  Add or modify nav items in the `<nav>` section and update the `showContent` function to reflect your changes.

---

## 📸 Credits & Licensing

- **Author**: [Senba](mailto:senbaleni@gmail.com)  
- **License**: For personal and educational use. Feel free to modify or redistribute.

---

_Enjoy cooking with Senba’s World — your one-stop culinary companion!_
