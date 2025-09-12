import React, { useState, useEffect, useRef } from "react";
import "./QrMenu.css";
import images from "../../constants/images";
import { RxCross1 } from "react-icons/rx";
import { database } from "../../firebase.js";
import { ref, onValue } from "firebase/database";

function QrMenu() {
  const [categoryMap, setCategoryMap] = useState({});
  const [categoryTypes, setCategoryTypes] = useState({}); 
  const [selectedCategory, setSelectedCategory] = useState("SaladsBruschettas");
  const [menuCategories, setMenuCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [language, setLanguage] = useState("eng");
  const menuRef = useRef(null);

  // Static translations for all categories
  const categoryTranslations = {
    SaladsBruschettas: { eng: "Salads & Bruschettas", az: "Salatlar və Brusketta" },
    BurgersSandwiches: { eng: "Burgers & Sandwiches", az: "Burgerlər və Sendviçlər" },
    NewItems: { eng: "New Items", az: "Yeni Məhsullar" },
    Snacks_Sets: { eng: "Snacks", az: "Qəlyanaltılar" },
    "SOFTS": { eng: "Soft Drinks", az: "Alkoqolsuz İçkilər" },
    AlcoholicDrinks: { eng: "Alcoholic Drinks", az: "Alkoqollu İçkilər" },
    "WinesProsecco": { eng: "Wines & Prosecco", az: "Şərablar və Prosecco" },
    Cocktails: { eng: "Cocktails", az: "Kokteyllər" },
    "JackDanielsCocktails": { eng: "Jack Daniels Cocktails", az: "Jack Daniels Kokteylləri" },
  };
  const subCategories = [
    "SALADS_BRUSCHETTAS",
    "BURGERS_SANDWICHES",
    "Jack_Daniels_Cocktails",
    "New",
    "Whiskey",
    "Tequila",
    "Aperitif",
    "Gin",
    "Liqueur",
    "Vermouth",
    "Vodka",
    "Rum",
    "BEERS",
    "Wines",
    "Prosecco",
    "Coktails",
    "Shots",
  ];
  // Static types for grouped categories
  const groupedCategoryTypes = {
    AlcoholicDrinks: "drink",
    WinesProsecco: "drink",
    Cocktails: "drink",
    JackDanielsCocktails: "drink",
  };

  // Fetch data from Firebase and build categoryMap
  useEffect(() => {
    const menuRef = ref(database, "menu");
    onValue(
      menuRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dynamicCategories = {};
          const types = {};
          Object.keys(data).forEach((key) => {
            if (!subCategories.includes(key)) {
              const displayName = data[key][0]?.[0]?.nameofArray || key;
              dynamicCategories[displayName] = key;
              types[displayName] = data[key][0]?.[1]?.type || "food"; // Default to food if type is missing
            }
          });
          setCategoryMap({
            
            SaladsBruschettas:["SALADS_BRUSCHETTAS"],
            BurgersSandwiches:["BURGERS_SANDWICHES"],
            NewItems:["New"],
            Snacks_Sets:["Snacks_Sets"],
            ...dynamicCategories,
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
            Cocktails: ["Coktails", "Shots"],
            JackDanielsCocktails: ["Jack_Daniels_Cocktails"],
          });
          setCategoryTypes({
            ...types,
            ...groupedCategoryTypes,
          });
          setMenuCategories(data);
        } else {
          setCategoryMap({});
          setCategoryTypes({});
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
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Category handler
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    scrollToTop();
  };

  const handleBoxClick = (item) => setHighlightedItem(item);
  const handleCloseHighlight = () => setHighlightedItem(null);

  // Toggle language between 'eng' and 'az'
  const toggleEng = () => {
    setLanguage("eng");
  };
  const toggleAZ = () => {
    setLanguage("az");
  };

  // Truncate description to 75 characters for qr-list only
  const truncateDescription = (desc) => {
    if (desc && desc.length > 75) {
      return desc.slice(0, 75) + "...";
    }
    return desc;
  };
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

  // Sort categories: food first, then drink
  const sortedCategories = Object.keys(categoryMap).sort((a, b) => {
    const typeA = categoryTypes[a] || "food";
    const typeB = categoryTypes[b] || "food";
    if (typeA === "food" && typeB === "drink") return -1;
    if (typeA === "drink" && typeB === "food") return 1;
    // return a.localeCompare(b); // Alphabetical within same type
    return a;
  });

  if (loading) return <div className="qr loading">Loading menu . . .</div>;
  if (error) return <div className="qr loading">Error: {error}</div>;

  return (
    <div className="qr">
      <div className="qr-Navbar">
        <div className="Navbar-logo">
          <img src={images.etudlogo} alt="Etuds Logo" />
        </div>
        {/* Language Toggle Button */}
        <div className="language-toggle">
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
      </div>
      <div className="qr-service">
        <p className="p__raleway">
          {language === "eng"
            ? "5% service charge not included"
            : "5% xidmət haqqı qiymətlərə daxil deyildir"}
        </p>
      </div>
      <div className="button-holders-qr">
        {sortedCategories.map((category) => (
          <div key={category} className={`button  p__Aldo fw-15 ${selectedCategory === category ? "active-button  p__Aldo fw-15" : ""}`}
          onClick={() => handleCategoryClick(category)}>
              {getCategoryDisplayName(category)}
          </div>
        ))}
      </div>
      <div className="qr-list">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => {
            if (!item.title) return null;
            return (
              <div className="qr-box" key={index} onClick={() => handleBoxClick(item)}>
                <div className="qr-text">
                  <h1 className="p__raleway qr-text-size">
                    {language === "eng" ? item.title : item.title_az}
                  </h1>
                  <p className={`p__raleway qr-text-size ${item.imgUrl ? "mg-t-0" : ""}`}>
                    {truncateDescription(language === "eng" ? item.desc_eng : item.desc_az)}
                  </p>
                  <p className="p__raleway qr-text-size">{item.price}</p>
                </div>
                {item.imgUrl && (
                  <div className="qr-img">
                    <img src={item.imgUrl} alt={language === "eng" ? item.title : item.title_az} />
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="qr-box">
            <div className="qr-text">
              <h1 className="p__raleway">
                {language === "eng" ? "No Items Available" : "Məhsul Yoxdur"}
              </h1>
              <p className="p__raleway">
                {language === "eng" ? "Select a category to view items" : "Məhsulları görmək üçün kateqoriya seçin"}
              </p>
            </div>
          </div>
        )}
      </div>
      {highlightedItem && (
        <div className="qr-highlight" onClick={handleCloseHighlight}>
          <div className="qr-highlight-box" onClick={(e) => e.stopPropagation()}>
            {highlightedItem.imgUrl && (
              <div className="highlight-img">
                <img
                  src={highlightedItem.imgUrl}
                  alt={language === "eng" ? highlightedItem.title : highlightedItem.title_az}
                />
              </div>
            )}
            <div className="qr-text">
              <h1 className="p__raleway">
                {language === "eng" ? highlightedItem.title : highlightedItem.title_az}
              </h1>
              <p className="p__raleway">
                {language === "eng" ? highlightedItem.desc_eng : highlightedItem.desc_az}
              </p>
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