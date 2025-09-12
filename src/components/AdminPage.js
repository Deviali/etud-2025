import React, { useState, useEffect } from "react";
import { database, auth, storage } from "../firebase.js"; // Adjust path
import { ref, onValue, update, push, remove } from "firebase/database";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import "./AdminPage.css"; 
// import "./pages/QrMenu.css";
import { RxCross1 } from "react-icons/rx";

function AdminPage() {
    const [categoryMap, setCategoryMap] = useState({});
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [authError, setAuthError] = useState(null);
    const [menuCategories, setMenuCategories] = useState({});
    const [loading, setLoading] = useState(true);
    const [dataError, setDataError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Salads&Bruschettas");
    const [editingItem, setEditingItem] = useState(null);
    const [editForm, setEditForm] = useState({});
    const [newImage, setNewImage] = useState(null);
    const [saveProgress, setSaveProgress] = useState(0);
    const [newItemForm, setNewItemForm] = useState(null);
    const [newCategoryForm, setNewCategoryForm] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [newCategoryNameAz, setNewCategoryNameAz] = useState("");
    const [newCategoryType, setNewCategoryType] = useState("food"); // New state for category type

  

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Fetch menu data from Firebase
  useEffect(() => {
    if (!user) return;
    const menuRef = ref(database, "menu"); 
    onValue(
      menuRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setMenuCategories(data);
        } else {
          setMenuCategories({});
        }
        setLoading(false);
      },
      (error) => {
        setDataError(error.message);
        setLoading(false);
      }
    );
  }, [user]);

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthError(null);
    } catch (error) {
      setAuthError(error.message);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Category handlers
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Map category names to Firebase node keys
  useEffect(() => {
    const menuRef = ref(database, "menu");
    onValue(
      menuRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setMenuCategories(data);
          // Create dynamic categoryMap
          const dynamicCategories = {};
          Object.keys(data).forEach((key) => {
            const displayName = data[key][0]?.nameofArray || key;
            dynamicCategories[displayName] = key;
          });
          setCategoryMap({
            ...dynamicCategories,
            alchohol: ["Whiskey", "Tequila", "Aperitif", "Gin", "Liqueur", "Vermouth", "Vodka", "Rum", "BEERS"],
            wines: ["Wines", "Prosecco"],
            cocktails: ["Coktails", "Shots"],
          });
        } else {
          setMenuCategories({});
          setCategoryMap({});
        }
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
  }, []);

  // Get current items based on selected category
  const currentItems = (() => {
    if (loading || dataError || !user) return [];
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
      return menuCategories[categoryKey] ? menuCategories[categoryKey].slice(1) : [];
    }
  })();

  // Start editing an item
  const handleEditClick = (item, index) => {
    setEditingItem({ item, index, category: categoryMap[selectedCategory] });
    setEditForm({
      title: item.title || "",
      title_az: item.title_az || "",
      price: item.price || "",
      desc_eng: item.desc_eng || "",
      desc_az: item.desc_az || "",
      imgUrl: item.imgUrl || "",
    });
    setNewImage(null);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewImage(e.target.files[0]);
    }
  };

  // Handle remove image
  const handleRemoveImage = async () => {
    if (!editForm.imgUrl || !window.confirm("Are you sure you want to remove this image?")) {
      return;
    }

    try {
      const imageRef = storageRef(storage, editForm.imgUrl);
      await deleteObject(imageRef);
      console.log("Image removed successfully");
    } catch (error) {
      console.error("Error removing image:", error);
    }

    // Clear the imgUrl in the form
    setEditForm((prev) => ({ ...prev, imgUrl: "" }));
  };

  // Save edited item
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingItem) return;

    const { item, index, category } = editingItem;
    let updatedImgUrl = editForm.imgUrl;
    setSaveProgress(10);

    // Handle image upload
    if (newImage) {
      if (item.imgUrl && !window.confirm("Are you sure you want to replace the existing image?")) {
        setSaveProgress(0);
        return;
      }

      // Delete old image if it exists
      if (item.imgUrl) {
        try {
        setSaveProgress(30);
          const oldImageRef = storageRef(storage, item.imgUrl);
          await deleteObject(oldImageRef);
        } catch (error) {
        setSaveProgress(0);
          console.error("Error deleting old image:", error);
        }
      }

      // Upload new image
      try {
        setSaveProgress(60);
        const imageRef = storageRef(storage, `images/${newImage.name}-${Date.now()}`);
        await uploadBytes(imageRef, newImage);
        updatedImgUrl = await getDownloadURL(imageRef);
        setSaveProgress(80);
      } catch (error) {
        console.error("Image upload error:", error);
        setSaveProgress(0);
        return;
      }
    }

    // Update item in Firebase
    const updatedItem = { ...editForm, imgUrl: updatedImgUrl };
    const categoryRef = Array.isArray(category)
      ? ref(database, `menu/${category[0]}/${index + 1}`) // Adjust for multi-category
      : ref(database, `menu/${category}/${index + 1}`); // +1 to skip header

      try {
        await update(categoryRef, updatedItem);
        setSaveProgress(100);
        setTimeout(() => {
          setEditingItem(null);
          setNewImage(null);
          setSaveProgress(0);
        }, 500); // Brief delay to show 100%
      } catch (error) {
        console.error("Error updating item:", error);
        setSaveProgress(0);
      }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingItem(null);
    setNewImage(null);
    setSaveProgress(0);
  };

  // Start new item form
  const handleNewItemClick = (category) => {
    setNewItemForm({ category });
    setEditForm({
      title: "",
      title_az: "",
      price: "",
      desc_eng: "",
      desc_az: "",
      imgUrl: "",
    });
    setNewImage(null);
  };

  // Save new item with incremented key
  const handleSaveNewItem = async (e) => {
    e.preventDefault();
    if (!newItemForm) return;

    const { category } = newItemForm;
    let updatedImgUrl = editForm.imgUrl;
    setSaveProgress(10);

    // Handle image upload
    if (newImage) {
      try {
        setSaveProgress(50);
        const imageRef = storageRef(storage, `images/${newImage.name}-${Date.now()}`);
        await uploadBytes(imageRef, newImage);
        updatedImgUrl = await getDownloadURL(imageRef);
        setSaveProgress(80);
      } catch (error) {
        console.error("Image upload error:", error);
        setSaveProgress(0);
        return;
      }
    }

     // Find the highest numeric key in the category
     const categoryKey = Array.isArray(category) ? category[0] : category;
     const categoryRef = ref(database, `menu/${categoryKey}`);
     let newIndex = 1; // Start at 1 to skip header (index 0)
     if (menuCategories[categoryKey]) {
       const keys = Object.keys(menuCategories[categoryKey]).filter((key) => key !== "0" && !isNaN(key));
       if (keys.length > 0) {
         newIndex = Math.max(...keys.map(Number)) + 1;
       }
     }
 
     // Add new item to Firebase with incremented key
     const newItem = { ...editForm, imgUrl: updatedImgUrl };
     const itemRef = ref(database, `menu/${categoryKey}/${newIndex}`);
 
     try {
       await update(itemRef, newItem);
       setSaveProgress(100);
       setTimeout(() => {
         setNewItemForm(null);
         setNewImage(null);
         setSaveProgress(0);
       }, 500);
     } catch (error) {
       console.error("Error adding new item:", error);
       setSaveProgress(0);
     }
   };

  // Cancel new item
  const handleCancelNewItem = () => {
    setNewItemForm(null);
    setNewImage(null);
    setSaveProgress(0);
  };

  // Delete an item
  const handleDeleteItem = async (index, category) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    const categoryRef = Array.isArray(category)
      ? ref(database, `menu/${category[0]}/${index + 1}`)
      : ref(database, `menu/${category}/${index + 1}`);

    try {
      await remove(categoryRef);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

   // Start new category form
   const handleNewCategoryClick = () => {
    setNewCategoryForm(true);
    setNewCategoryName("");
    setNewCategoryNameAz("");
    setNewCategoryType("food");
  };

   // Save new category with incremented key
   const handleSaveNewCategory = async (e) => {
    e.preventDefault();
    if (!newCategoryName || !newCategoryNameAz) return;

    // Find the highest numeric key in /menu
    const menuRef = ref(database, "menu");
    let newCategoryKey = "0";
    if (menuCategories) {
      const keys = Object.keys(menuCategories).filter((key) => !isNaN(key));
      if (keys.length > 0) {
        newCategoryKey = String(Math.max(...keys.map(Number)) + 1);
      }
    }

    const categoryRef = ref(database, `menu/${newCategoryKey}`);
    try {
      await update(categoryRef, [[
        { nameofArray: newCategoryName, nameofArray_az: newCategoryNameAz },
        { type: newCategoryType }
      ]]);
      setNewCategoryForm(false);
      setNewCategoryName("");
      setNewCategoryNameAz("");
      setNewCategoryType("food");
    } catch (error) {
      console.error("Error creating new category:", error);
    }
  };

  // Cancel new category
  const handleCancelNewCategory = () => {
    setNewCategoryForm(false);
    setNewCategoryName("");
    setNewCategoryNameAz("");
    setNewCategoryType("food");
  };




  // Render login form if not authenticated
  if (!user) {
    return (
      <div className="admin-login">
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {authError && <p className="error">{authError}</p>}
        </form>
      </div>
    );
  }

  // Render admin page
  return (
    <div className="admin">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {/* <button className="new-category-button" onClick={handleNewCategoryClick}>
        New Category
      </button> */}
      {loading && <div>Loading menu...</div>}
      {dataError && <div>Error: {dataError}</div>}
      {!loading && !dataError && (
        <>
          <div className="button-holders-admin">
            {Object.keys(categoryMap).map((category) => (
              <div key={category} className="category-section">
                <div
                  className={`button button-admin${selectedCategory === category ? "active-button button-admin" : ""}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </div>
                <button
                  className="new-item-button"
                  onClick={() => handleNewItemClick(categoryMap[category])}
                >
                  New Item
                </button>
              </div>
            ))}
          </div>
          <div className="admin-list">
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => {
                if (!item.title) return null;
                return (
                  <div className="admin-box" key={index}>
                    <div className="admin-text">
                      <h1 className="p__raleway admin-text-size">{item.title}</h1>
                      <p className="p__raleway admin-text-size">{item.desc_eng}</p>
                      <p className="p__raleway admin-text-size">{item.price}</p>
                    </div>
                    {item.imgUrl && (
                      <div className="admin-img">
                        <img src={item.imgUrl} alt={item.title} />
                      </div>
                    )}
                    <div className="action-buttons">
                      <button
                        className="edit-button"
                        onClick={() => handleEditClick(item, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteItem(index, categoryMap[selectedCategory])}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="admin-box">
                <div className="admin-text">
                  <h1 className="p__raleway">No Items Available</h1>
                  <p className="p__raleway">Select a category to view items</p>
                </div>
              </div>
            )}
          </div>
          {(editingItem || newItemForm) && (
            <div className="edit-form-overlay">
              <div className="edit-form">
                <h2>{editingItem ? "Edit Item" : "New Item"}</h2>
                <form onSubmit={editingItem ? handleSaveEdit : handleSaveNewItem}>
                  <input
                    type="text"
                    name="title"
                    value={editForm.title}
                    onChange={handleInputChange}
                    placeholder="Title (English)"
                    required
                  />
                  <input
                    type="text"
                    name="title_az"
                    value={editForm.title_az}
                    onChange={handleInputChange}
                    placeholder="Title (Azerbaijani)"
                    required
                  />
                  <input
                    type="text"
                    name="price"
                    value={editForm.price}
                    onChange={handleInputChange}
                    placeholder="Price"
                    required
                  />
                  <textarea
                    name="desc_eng"
                    value={editForm.desc_eng}
                    onChange={handleInputChange}
                    placeholder="Description (English)"
                    required
                  />
                  <textarea
                    name="desc_az"
                    value={editForm.desc_az}
                    onChange={handleInputChange}
                    placeholder="Description (Azerbaijani)"
                    required
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {editForm.imgUrl && (
                    <div className="current-image">
                      <p>Current Image:</p>
                      <img src={editForm.imgUrl} alt="Current" width="100" />
                      <button
                        type="button"
                        className="remove-image-button"
                        onClick={handleRemoveImage}
                      >
                        Remove Photo
                      </button>
                    </div>
                  )}
                  {saveProgress > 0 && (
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${saveProgress}%` }}
                      ></div>
                    </div>
                  )}
                  <div className="form-buttons">
                    <button type="submit">Save</button>
                    <button
                      type="button"
                      onClick={editingItem ? handleCancelEdit : handleCancelNewItem}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {newCategoryForm && (
            <div className="edit-form-overlay">
              <div className="edit-form">
                <h2>New Category</h2>
                <form onSubmit={handleSaveNewCategory}>
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="Category Name"
                    required
                  />
                  <div className="form-buttons">
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancelNewCategory}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AdminPage;