import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import Navbar from "./../Navbar";
import Slider from "./../Slider";
import images from "../../constants/images";
import { database } from "../../firebase.js";
import { ref, onValue } from "firebase/database";

function Menu() {
  const [categoryMap, setCategoryMap] = useState({});
  const [menuCategories, setMenuCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("SaladsBruschettas");
  const [language, setLanguage] = useState("eng"); // Language state

  // Static images for the slider
  const imageItems = [images.barfiller1, images.barfiller2, images.special1];

  // Static translations for button labels
  const categoryTranslations = {
    SaladsBruschettas: { eng: "Tasty", az: "Dadlı" },
    Snacks: { eng: "For The Table", az: "Masa üçün" },
    SoftDrinks: { eng: "Soft Drinks", az: "Alkoqolsuz İçkilər" },
    AlcoholicDrinks: { eng: "Alcoholic Drinks", az: "Alkoqollu İçkilər" },
    WinesProsecco: { eng: "Wines & Prosecco", az: "Şərablar və Prosecco" },
    Cocktails: { eng: "Cocktails", az: "Kokteyllər" },
  };

  // Static category mappings for grouped categories
  const categoryMapStatic = {
    SaladsBruschettas: ["SALADS_BRUSCHETTAS"],
    BurgersSandwiches: ["BURGERS_SANDWICHES"],
    NewItems: ["New"],
    Snacks: ["Snacks_Sets"],
    SoftDrinks: ["SOFTS"],
    AlcoholicDrinks: [
      "Whiskey",
      "Tequila",
      "Aperitif",
      "Gin",
      "Liqueur",
      "Vermouth",
      "Vodka",
      "Rum",
      "BEERS",
    ],
    WinesProsecco: ["Wines", "Prosecco"],
    Cocktails: ["Coktails", "Shots", "Jack_Daniels_Cocktails"],
  };

  // Fetch data from Firebase
  useEffect(() => {
    const menuRef = ref(database, "menu");
    onValue(
      menuRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dynamicCategories = {};
          Object.keys(data).forEach((key) => {
            if (!Object.values(categoryMapStatic).flat().includes(key)) {
              const displayName = data[key][0]?.nameofArray || key;
              dynamicCategories[displayName] = key;
            }
          });
          setCategoryMap({
            ...dynamicCategories,
            ...categoryMapStatic,
          });
          setMenuCategories(data);
        } else {
          setCategoryMap(categoryMapStatic);
          setMenuCategories({});
        }
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
  }, []);

  // Category click handlers
  const handleSnacksClick = () => setSelectedCategory("Snacks");
  const handleFoodClick = () => setSelectedCategory("SaladsBruschettas");
  const handleDrinksClick = () => setSelectedCategory("SoftDrinks");
  const handleAlchoClick = () => setSelectedCategory("AlcoholicDrinks");
  const handleWinesClick = () => setSelectedCategory("WinesProsecco");
  const handleCocktailsClick = () => setSelectedCategory("Cocktails");

  // Language toggle handlers
  const toggleEng = () => setLanguage("eng");
  const toggleAZ = () => setLanguage("az");

  // Get current items based on selected category
  const currentItems = (() => {
    if (loading || error) return [];
    const categoryKey = categoryMap[selectedCategory];
    if (Array.isArray(categoryKey)) {
      let items = [];
      categoryKey.forEach((key) => {
        if (menuCategories[key]) {
          items = items.concat(menuCategories[key].slice(1)); // Skip header
        }
      });
      return items;
    } else {
      return menuCategories[categoryKey]
        ? menuCategories[categoryKey].slice(1) // Skip header
        : [];
    }
  })();

  // Get category display name based on language
  const getCategoryDisplayName = (category) => {
    const translation = categoryTranslations[category];
    if (translation) {
      return translation[language];
    }
    const categoryKey = categoryMap[category];
    if (Array.isArray(categoryKey)) {
      return categoryTranslations[category]?.[language] || category;
    }
    const categoryData = menuCategories[categoryKey];
    return language === "eng"
      ? categoryData?.[0]?.nameofArray || category
      : categoryData?.[0]?.nameofArray_az || category;
  };

  if (loading) return <div className="qr loading">Loading menu . . .</div>;
  if (error) return <div className="qr loading">Error: {error}</div>;

  return (
    <div className="Menu">
      <Navbar />
      <Slider items={imageItems} TextForMiddle={language === "eng" ? "Menu Of ETud" : "ETud Menyusu"} autoPlayInterval={3000} />
      <div className="language-toggle menu-language">
        <button
          className={`language-button ${language === "eng" ? "active-language" : ""}`}
          onClick={toggleEng}
        >
          EN
        </button>
        <button
          className={`language-button ${language === "az" ? "active-language" : ""}`}
          onClick={toggleAZ}
        >
          AZ
        </button>
      </div>
      <div className="button-holder">
        <Link to="/qr-menu" className="button">
          {language === "eng" ? "QR Menu" : "QR Menyu"}
        </Link>
        <div className="row">
          <div
            className={`button ${selectedCategory === "SaladsBruschettas" ? "active-button" : ""}`}
            onClick={handleFoodClick}
          >
            {getCategoryDisplayName("SaladsBruschettas")}
          </div>
          <div
            className={`button ${selectedCategory === "Snacks" ? "active-button" : ""}`}
            onClick={handleSnacksClick}
          >
            {getCategoryDisplayName("Snacks")}
          </div>
          <div
            className={`button ${selectedCategory === "AlcoholicDrinks" ? "active-button" : ""}`}
            onClick={handleAlchoClick}
          >
            {getCategoryDisplayName("AlcoholicDrinks")}
          </div>
        </div>
        <div className="row">
          <div
            className={`button ${selectedCategory === "WinesProsecco" ? "active-button" : ""}`}
            onClick={handleWinesClick}
          >
            {getCategoryDisplayName("WinesProsecco")}
          </div>
          <div
            className={`button ${selectedCategory === "Cocktails" ? "active-button" : ""}`}
            onClick={handleCocktailsClick}
          >
            {getCategoryDisplayName("Cocktails")}
          </div>
        </div>
        <div
          className={`button ${selectedCategory === "SoftDrinks" ? "active-button" : ""}`}
          onClick={handleDrinksClick}
        >
          {getCategoryDisplayName("SoftDrinks")}
        </div>
      </div>

      <div className="show-Menu">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => {
            if (item.nameofArray) {
              // Display nameofArray as a header
              return (
                <React.Fragment key={index}>
                  <p className="h__catorze">
                    {language === "eng" ? item.nameofArray : item.nameofArray_az || item.nameofArray}
                  </p>
                  <div className="line-break-menu"></div>
                </React.Fragment>
              );
            } else {
              // Display regular items
              return (
                <React.Fragment key={index}>
                  <p className="p__catorze menu-title">
                    {language === "eng" ? item.title : item.title_az || item.title}
                  </p>
                  <p className="p__catorze">
                    {language === "eng" ? item.desc_eng : item.desc_az || item.desc_eng} {item.price}
                  </p>
                </React.Fragment>
              );
            }
          })
        ) : (
          <p className="p__catorze">
            {language === "eng" ? "No items available for this category." : "Bu kateqoriyada məhsul yoxdur."}
          </p>
        )}
      </div>
    </div>
  );
}

export default Menu;