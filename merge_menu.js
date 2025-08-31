const fs = require('fs');

try {
  const menuItems = require('./src/constants/MenuItems').MenuItems || require('./src/constants/MenuItems').default;
  const drinks = require('./src/constants/DrinksItems').Drinks || require('./src/constants/DrinksItems').default;

  if (!menuItems || !drinks) {
    throw new Error('MenuItems or Drinks is undefined. Check exports in MenuItems.js and DrinksItems.js.');
  }

  const combinedMenu = {
    menu: {
      ...menuItems,
      ...drinks
    }
  };

  fs.writeFileSync('menu.json', JSON.stringify(combinedMenu, null, 2), 'utf8');
  console.log('Menu data combined and saved to menu.json');
} catch (error) {
  console.error('Error:', error.message);
}