# Senba's World - Recipes

Welcome to **Senba's World** – a simple, flexible, and attractive recipe web app!  
Browse South Indian, North Indian, snacks, and chutney recipes, or discover favorite sites and contact information, all in a single-page experience.

## Features

- **Navigation Bar:** Quickly jump between Home, recipes, About, Favorites, and Contact sections using the top navigation bar.
- **Recipe Categories:** Explore recipes organized by categories (South Indian, North Indian, Snacks, Chutney).
- **Sidebar Search:** Instantly filter recipes in a category with a live search box in the sidebar.
- **Recipe Details:** Click on a recipe to load details from separate HTML files (using AJAX/fetch).
- **Favorites:** A list of favorite external sites for quick access.
- **Responsive Design:** Layout adapts for desktop and mobile screens using CSS and media queries.
- **Simple Customization:** Easily add new recipes by updating the `recipes` object and providing their HTML files.

## Getting Started

1. **Clone or Download the Repository**

2. **Directory Structure**
   ```
   project-root/
   ├── index.html
   └── recipes/
       ├── SouthIndian/
       │   ├── IdliPodi.html
       │   ├── SambarPodi.html
       │   └── Tomatochutney.html
       ├── NorthIndian/
       │   └── ChennaMasala.html
       └── Kalachanasundal.html
   ```

3. **Open `index.html` in Your Browser**

   Double-click the `index.html` file to launch the app.  
   *(No server required for most browsers; if recipes don't load, you may need to serve via a local web server due to browser security restrictions.)*

## Adding or Editing Recipes

1. **Add the Recipe File:**  
   Create a new HTML file for your recipe in the appropriate subfolder under `recipes/`.

2. **Update the Script:**  
   In the `<script>` section of `index.html`, add your recipe to the relevant category in the `recipes` object:
   ```js
   SouthIndian: [
     {
       id: 'IdliPodi',
       title: 'Idli podi',
       detailsFile: 'recipes/SouthIndian/IdliPodi.html'
     },
     // Add new recipe here
   ]
   ```

3. **Reload the Page:**  
   Your new recipe will show up in the sidebar for its category!

## Customization

- **Styling:**  
  All CSS is included in the `<style>` tag in `index.html`. You can modify colors, fonts, or layout as you wish.
- **Navigation Items:**  
  Modify or add navigation bar links in the `<nav>` section and update the `showContent` function as needed.

## Credits

- Images: Unsplash (see Hero image)
- Created by [Senba](mailto:senbaleni@gmail.com)

## License

This project is for personal and educational use.  

---

*Enjoy cooking with Senba's World!*
