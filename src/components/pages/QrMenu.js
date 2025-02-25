import React, { useState } from "react";
import './QrMenu.css';
import MenuItems from '../../constants/MenuItems';
import DrinksItems from '../../constants/DrinksItems';
import images from "../../constants/images";
import { RxCross1 } from 'react-icons/rx';


function QrMenu() {
  const [selectedCategory, setSelectedCategory] = useState("Salads&Bruschettas");
  const [highlightedItem, setHighlightedItem] = useState(null); // State for highlighted item

  const handleBurgersClick = () => setSelectedCategory("Burgers&sandwiches");
  const handleSaladsClick = () => setSelectedCategory("Salads&Bruschettas");
  const handleNewsClick = () => setSelectedCategory("new");
  const handleSnacksClick = () => setSelectedCategory("Snacks");
  const handleDrinksClick = () => setSelectedCategory("softdrinks");
  const handleAlchoClick = () => setSelectedCategory("alchohol");
  const handleWinesClick = () => setSelectedCategory("wines");
  const handleCocktailsClick = () => setSelectedCategory("cocktails");

  // Handle qr-box click to show highlight
  const handleBoxClick = (item) => setHighlightedItem(item);

  // Close highlight
  const handleCloseHighlight = () => setHighlightedItem(null);

  const currentItems = (() => {
    switch (selectedCategory) {
      case "Salads&Bruschettas": return MenuItems.SALADS_BRUSCHETTAS;
      case "Burgers&sandwiches": return MenuItems.BURGERS_SANDWICHES;
      case "new":return MenuItems.New ;
      case "Snacks": return MenuItems.Snacks_Sets;
      case "softdrinks": return DrinksItems.SOFTS;
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
        .concat(DrinksItems.Shots);
      default:
        return [];
    }
  })();



  return (
    <div className='qr'>
      <div className="qr-Navbar">
        <div className="Navbar-logo">
          <img src={images.etudlogo}  alt="Etuds Logo" />
        </div>
      </div>
      <div className="button-holders-qr">
         <div className="button"onClick={handleSaladsClick}>Salads & Bruschettas</div>
         <div className="button"onClick={handleBurgersClick}>Burgers & sandwiches</div>
         <div className="button"onClick={handleNewsClick}>New Items</div>
         <div className="button"onClick={handleSnacksClick}>Snacks</div>
         <div className="button"onClick={handleDrinksClick}>Soft Drinks</div>
         <div className="button"onClick={handleAlchoClick}>Alchoholic Drinks</div>
         <div className="button"onClick={handleWinesClick}>Wines & Prosecco</div>
         <div className="button"onClick={handleCocktailsClick}>Cocktails</div>
         
      </div>
      <div className="qr-list">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) =>{
                      if (!item.title) return null;
                      return(
                        <div className="qr-box" key={index}  onClick={() => handleBoxClick(item)}>
                            <div className="qr-text">
                                <h1 className="p__raleway">{item.title}</h1>
                                <p className="p__raleway">{item.desc_eng}</p>
                                <p className="p__raleway">{item.price}</p>
                            </div>
                            <div className="qr-img">
                                <img
                                    src={item.imgUrl || images.etudFavicon}
                                    alt={item.title}
                                />
                            </div>
                        </div>
                    );
                  })
                ) : (
                    <div className="qr-box">
                        <div className="qr-text">
                            <h1 className="p__raleway">No Items Available</h1>
                            <p className="p__raleway">Select a category to view items</p>
                        </div>
                        <div className="qr-img">
                            <img src={images.etudFavicon} alt="Placeholder" />
                        </div>
                    </div>
                )}
      </div>
      {highlightedItem && (
                <div className="qr-highlight" onClick={handleCloseHighlight}>
                    <div className="qr-highlight-box" onClick={(e) => e.stopPropagation()}>
                        <div className="highlight-img">
                            <img
                                src={highlightedItem.imgUrl || images.etudFavicon}
                                alt={highlightedItem.title}
                            />
                        </div>
                        <div className="qr-text">
                            <h1 className="p__raleway">{highlightedItem.title}</h1>
                            <p className="p__raleway">{highlightedItem.desc_eng}</p>
                            <p className="p__raleway">{highlightedItem.price}</p>
                        </div>
                        <button className="close-button" onClick={handleCloseHighlight}>
                          <RxCross1 size={24} />
                        </button>
                    </div>
                </div>
            )}
    </div>
  )
}

export default QrMenu



{/* <div className="qr-list">
        <div className="qr-box">  
          <div className="qr-text">
            <h className="p__raleway">{title}</h>
            <p className="p__raleway">{desc_eng}</p>
            <p className="p__raleway">{price}</p>
          </div>
          <div className="qr-img"><img src={imgUrl} alt="imgUrl" /></div>
        </div>
      </div> */}