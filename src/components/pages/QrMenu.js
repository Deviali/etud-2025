import React, { useState } from "react";
import "./QrMenu.css";
import MenuItems from "../../constants/MenuItems";
import DrinksItems from "../../constants/DrinksItems";
import images from "../../constants/images";
import { RxCross1 } from "react-icons/rx";

function QrMenu() {
  const [selectedCategory, setSelectedCategory] = useState("Salads&Bruschettas");
  const [highlightedItem, setHighlightedItem] = useState(null);

  const handleBurgersClick = () => setSelectedCategory("Burgers&sandwiches");
  const handleSaladsClick = () => setSelectedCategory("Salads&Bruschettas");
  const handleNewsClick = () => setSelectedCategory("new");
  const handleSnacksClick = () => setSelectedCategory("Snacks");
  const handleDrinksClick = () => setSelectedCategory("softdrinks");
  const handleAlchoClick = () => setSelectedCategory("alchohol");
  const handleWinesClick = () => setSelectedCategory("wines");
  const handleCocktailsClick = () => setSelectedCategory("cocktails");
  const handleJACKCocktailsClick = () => setSelectedCategory("Jack Daniels Cocktails");

  const handleBoxClick = (item) => setHighlightedItem(item);
  const handleCloseHighlight = () => setHighlightedItem(null);

  // Truncate description to 100 characters for qr-list only
  const truncateDescription = (desc) => {
    if (desc && desc.length > 100) {
      return desc.slice(0, 100) + "...";
    }
    return desc;
  };

  const currentItems = (() => {
    switch (selectedCategory) {
      case "Salads&Bruschettas":
        return MenuItems.SALADS_BRUSCHETTAS;
      case "Burgers&sandwiches":
        return MenuItems.BURGERS_SANDWICHES;
      case "new":
        return MenuItems.New;
      case "Snacks":
        return MenuItems.Snacks_Sets;
      case "softdrinks":
        return DrinksItems.SOFTS;
      case "alchohol":
        return DrinksItems.Whiskey.concat(
          DrinksItems.Tequila,
          DrinksItems.Aperitif,
          DrinksItems.Gin,
          DrinksItems.Liqueur,
          DrinksItems.Vermouth,
          DrinksItems.Vodka,
          DrinksItems.Rum,
          DrinksItems.BEERS
        );
      case "wines":
        return DrinksItems.Wines.concat(DrinksItems.Prosecco);
      case "cocktails":
        return DrinksItems.Coktails.concat(DrinksItems.Shots);
        case "Jack Daniels Cocktails":
          return DrinksItems.Jack_Daniels_Cocktails;
      default:
        return [];
    }
  })();

  return (
    <div className="qr">
      <div className="qr-Navbar">
        <div className="Navbar-logo">
          <img src={images.etudlogo} alt="Etuds Logo" />
        </div>
      </div>
      <div className="button-holders-qr">
        <div
          className={`button ${
            selectedCategory === "Salads&Bruschettas" ? "active-button" : ""
          }`}
          onClick={handleSaladsClick}
        >
          Salads & Bruschettas
        </div>
        <div
          className={`button ${
            selectedCategory === "Burgers&sandwiches" ? "active-button" : ""
          }`}
          onClick={handleBurgersClick}
        >
          Burgers & Sandwiches
        </div>
        <div
          className={`button ${selectedCategory === "new" ? "active-button" : ""}`}
          onClick={handleNewsClick}
        >
          New Items
        </div>
        <div
          className={`button ${
            selectedCategory === "Snacks" ? "active-button" : ""
          }`}
          onClick={handleSnacksClick}
        >
          Snacks
        </div>
        <div
          className={`button ${
            selectedCategory === "softdrinks" ? "active-button" : ""
          }`}
          onClick={handleDrinksClick}
        >
          Soft Drinks
        </div>
        <div
          className={`button ${
            selectedCategory === "alchohol" ? "active-button" : ""
          }`}
          onClick={handleAlchoClick}
        >
          Alcoholic Drinks
        </div>
        <div
          className={`button ${
            selectedCategory === "wines" ? "active-button" : ""
          }`}
          onClick={handleWinesClick}
        >
          Wines & Prosecco
        </div>
        <div
          className={`button ${
            selectedCategory === "Jack Daniels Cocktails" ? "active-button" : ""
          }`}
          onClick={handleJACKCocktailsClick}
        >
          Jack Daniels Cocktails
        </div>
        <div
          className={`button ${
            selectedCategory === "cocktails" ? "active-button" : ""
          }`}
          onClick={handleCocktailsClick}
        >
          Cocktails
        </div>
      </div>
      <div className="qr-list">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => {
            if (!item.title) return null;
            return (
              <div className="qr-box" key={index} onClick={() => handleBoxClick(item)}>
                <div className="qr-text">
                  <h1 className="p__raleway">{item.title}</h1>
                  <p className="p__raleway">{truncateDescription(item.desc_eng)}</p>
                  <p className="p__raleway">{item.price}</p>
                </div>
                {item.imgUrl && (
                  <div className="qr-img">
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="qr-box">
            <div className="qr-text">
              <h1 className="p__raleway">No Items Available</h1>
              <p className="p__raleway">Select a category to view items</p>
            </div>
          </div>
        )}
      </div>
      {highlightedItem && (
        <div className="qr-highlight" onClick={handleCloseHighlight}>
          <div className="qr-highlight-box" onClick={(e) => e.stopPropagation()}>
            {highlightedItem.imgUrl && (
              <div className="highlight-img">
                <img src={highlightedItem.imgUrl} alt={highlightedItem.title} />
              </div>
            )}
            <div className="qr-text">
              <h1 className="p__raleway">{highlightedItem.title}</h1>
              <p className="p__raleway">{highlightedItem.desc_eng}</p> {/* No truncation here */}
              <p className="p__raleway">{highlightedItem.price}</p>
            </div>
            <button className="close-button" onClick={handleCloseHighlight}>
              <RxCross1 size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QrMenu;