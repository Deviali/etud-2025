import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './Menu.css';
import Navbar from './../Navbar';
import images from '../../constants/images';
import Slider from './../Slider';
import MenuItems from '../../constants/MenuItems';
import DrinksItems from '../../constants/DrinksItems';
function Menu() {
  const imageItems = [
    images.barfiller1, // Example image from your constants
    images.barfiller2,
    images.special1,
  ];
  // State to track which dataset to show (food or drinks)
  const [selectedCategory, setSelectedCategory] = useState("tasty");
  
  const handleSnacksClick = () => setSelectedCategory("Snacks");
  const handleFoodClick = () => setSelectedCategory("tasty");
  const handleDrinksClick = () => setSelectedCategory("softdrinks");
  const handleAlchoClick = () => setSelectedCategory("alchohol");
  const handleWinesClick = () => setSelectedCategory("wines");
  const handleCocktailsClick = () => setSelectedCategory("cocktails");


  const currentItems = (() => {
    switch (selectedCategory) {
      case "tasty":
        return MenuItems.SALADS_BRUSCHETTAS
          .concat(MenuItems.BURGERS_SANDWICHES)
          .concat(MenuItems.New);
      case "Snacks":
        return MenuItems.Snacks_Sets;
      case "softdrinks":
        return DrinksItems.SOFTS;
      case "alchohol":
        return DrinksItems.Whiskey
        .concat(DrinksItems.Tequila)
        .concat(DrinksItems.Aperitif)
        .concat(DrinksItems.Gin)
        .concat(DrinksItems.Liqueur)
        .concat(DrinksItems.Vermouth)
        .concat(DrinksItems.Vodka)
        .concat(DrinksItems.Rum)
        .concat(DrinksItems.BEERS);
      case "wines":
        return DrinksItems.Wines
        .concat(DrinksItems.Prosecco);
      case "cocktails":
        return DrinksItems.Coktails
        .concat(DrinksItems.Shots)
        .concat(DrinksItems.Jack_Daniels_Cocktails);

      default:
        return [];
    }
  })();


  return (
    <div className='Menu'>
      <Navbar/> 
      <Slider items={imageItems} TextForMiddle='Menu Of ETud' autoPlayInterval={3000}/>
      <div className="button-holder">
      <Link to='/qr-menu' className="button">QR Menu
        </Link>
        <div className="row">
         <div className={`button ${selectedCategory === "tasty" ? "active-button" : ""}`}onClick={handleFoodClick}>Tasty</div>
         <div className={`button ${selectedCategory === "Snacks" ? "active-button" : ""}`}onClick={handleSnacksClick}>For The Table</div>
         <div className={`button ${selectedCategory === "alchohol" ? "active-button" : ""}`}onClick={handleAlchoClick}>Alchoholic Drinks</div>
        </div>
        <div className="row">
          <div className={`button ${selectedCategory === "wines" ? "active-button" : ""}`}onClick={handleWinesClick}>Wines & Prosecco</div>
          <div className={`button ${selectedCategory === "cocktails" ? "active-button" : ""}`}onClick={handleCocktailsClick}>Cocktails</div>
        </div>       
        <div className={`button ${selectedCategory === "softdrinks" ? "active-button" : ""}`}onClick={handleDrinksClick}>Soft Drinks</div>

      </div>

      <div className="show-Menu">
        {selectedCategory ? (
          currentItems.length > 0 ? (
            <>
              {currentItems.map((item, index) => {
                if (item.nameofArray) {
                  // Display nameofarray as a header
                  return (
                    <React.Fragment key={index}>
                      <p className="h__catorze">{item.nameofArray}</p>
                      <div className="line-break-menu"></div>
                    </React.Fragment>
                  );
                } else {
                  // Display regular items
                  return (
                    <React.Fragment key={index}>
                      <p className="p__catorze menu-title">{item.title}</p>
                      <p className="p__catorze">
                        {item.desc_eng} {item.price}
                      </p>
                    </React.Fragment>
                  );
                }
              })}
            </>
          ) : (
            <p className="p__catorze">No items available for this category.</p>
          )
        ) : (
          // Default state (no dataset selected)
          <>
            <p className="h__catorze">name of dataset</p>
            <div className="line-break-menu"></div>
            <p className="p__catorze menu-title">title</p>
            <p className="p__catorze">desc_eng price</p>
            <p className="p__catorze menu-title">title</p>
            <p className="p__catorze">desc_eng price</p>
            <p className="p__catorze menu-title">title</p>
            <p className="p__catorze">desc_eng price</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Menu