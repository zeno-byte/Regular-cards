const recipes = {
    "BEEF,LAMB, AND VEAL": [
        "Filet au Poivre, 221-222",
        "Hamburgers (with Variations), 215-217",
        "Lamb Chops with Mint Persillade, 224",
        "Low-Carb Chili, 218",
        "Parmesan-Crusted Lamb Chops, 223",
        "Pot Roast of Beef,219",
        "Rack of Lamb with Cabernet, 225",
        "Tenderloin of Beef Stuffed with Roasted Peppers, Spinach, and Pine Nuts, 220",
        "Veal with Fennel and Wild Mushrooms in Mustard Cream, 226",
    ],
    "BREAKFAST": [
        "Bacon and Eggs, 165",
        "Broccoli-Cheddar Brunch, 163",
        "Five-Minute Omelet, 166",
        "Poached Eggs with Artichoke Bottoms and Hollandaise, 160-161",
        "Quick Breakfast Omelet, 120, 164",
        "Ricotta Pie, 162",
        "Salmon and Spinach Omelet, 157",
        "Scrambled Eggs with Zucchini and Cheddar, 167",
        "Shrimp and Sour Cream Omelet, 158",
        "Western Omelet, 159",
    ],
    "DESSERTS": [
        "Chocolate Mousse, 272-273",
        "Ginger Cinnamon Custard, 271",
        "Peanut Butter Cookies, 274; Fudge Variation, 274",
        "Peanut Butter Pie, 269",
        "Pumpkin Pie, 268",
        "Sweet Ricotta Torte, 270",
        "Vanilla Cream Soda, 276",
        "Walnut Sweetmeats, 275; Pecan Variation, 275",
    ],
    "LUNCH": [
        "Buffalo-Style Wings, 173",
        "Cheese Puff Sandwich, 172",
        "Deviled Eggs, 168",
        "Ham and Broccoli Quiche, 171",
        "Roasted Red Pepper Frittata, 170",
        "Salami and Provolone Layered Torte, 169",
    ],
    "PORK": [
        "Baked Pork Chops, 227",
        "Mushrooms Stuffed with Sausage and Ricotta, 231",
        "Pork Chops with Peppers, 230",
        "Pork Roast with Rosemary and Sage, 228-229",
    ],
    "POULTRY": [
        "Barbecued Chicken and Shrimp with Grilled Onion Guacamole, 203",
        "Chicken and Garlic, 208-209",
        "Chicken with Fresh Herbs, 210-211",
        "Chicken with Mushrooms in a Champagne Cream Sauce, 206-207",
        "Fried Chicken, 202",
        "Grilled Chicken with Provençal Spices, 212",
        "Peanut Chicken Stir-Fry,204-205; Tofu Variation, 205",
        "Roast Chicken with Herbs, 200-201",
        "Roast Turkey, 213",
        "Stuffing for Poultry, 214",
    ],
    "SALADS": [
        "Antipasto, 177",
        "With Artichokes, Hearts of Palm, Bacon, and Blue Cheese, 181",
        "Avocado, Mozzarella, Basil, and Yellow Tomato, 179",
        "Caesar, with Gruyere Croutons, 180",
        "Crab, on Belgian Endive, 186",
        "Lobster, 178",
        "Marinated Chicken, 185",
        "Minted Cucumber, 184",
        "Niçoise, 187",
        "Roasted Red Pepper with Grilled Chicken, 182-183",
        "With Sesame Seeds and Candied Hazelnuts, 188",
        "Shrimp, 174-175",
        "Smoked Salmon on Cucumbers, 176",
        "Turkey, 189",
    ],
    "SAUCES,DIPS, AND DRESSINGS": [
        "Aioli,253",
        "Blue Cheese Dressing, 262",
        "Chili Sauce for Burgers, 216",
        "Cranberry Relish, 267",
        "Creamy Dressing, 265",
        "Dijon Vinaigrette, 264",
        "Gorgonzola Sauce, 251",
        "Grilled Onion Guacamole, 260",
        "Hazelnut Poppy Seed Dressing, 266",
        "Herb Butter for Burgers, 216",
        "Hollandaise Sauce,250",
        "Horseradish Dill Mayonnaise, 263",
        "Italian-Style Red Sauce, 258-259",
        "Mushroom Cream Sauce, 256-257",
        "Mushroom Topping for Burgers, 217",
        "Mustard Sorrel Sauce, 252",
        "Parmesan Dip, 261",
        "Pesto, 254",
        "White Clam Sauce, 255",
        "Wine Sauce for Burgers, 215",
    ],
    "SEAFOOD": [
        "Flounder with Merlot, 235",
        "Flounder with Spinach and Pine Nuts in Lemon Thyme Butter, 234",
        "Grilled Swordfish with Artichoke and Hearts of Palm Salsa, 236-237",
        "Grilled Swordfish with Ginger Orange Marinade, 238",
        "Pan-Fried Salmon, 232",
        "Salmon Teriyaki, 233",
        "Shrimp with Macadamia Crust, 239; Coconut and Macadamia Crust Variation, 239",
    ],
    "SOUPS": [
        "Chestnut-Squash, 191",
        "Chilled Cucumber, 190",
        "Clam Chowder, 195",
        "Cream of Artichoke, with Toasted Walnuts, 196-197; Crab Meat Variation, 197",
        "Italian Wedding (Escarole with Meatballs), 192-193",
        "Mushroom, with Parmesan Cheese, 194",
        "Turkey, 198-199",
    ],
    "VEGETABLES": [
        "Broccoli with Garlic and Parmesan, 241",
        "Butternut Squash with Cognac, 247",
        "Green Beans with Parmesan, 243",
        "Marinated Mushrooms, 244",
        "Mashed Cauliflower, 242",
        "Mushrooms Sautéed with Wine and Garlic, 245",
        "Parmesan-Crusted Zucchini, 249",
        "Roasted, 240",
        "Sautéed Spinach with Garlic and Pine Nuts, 246",
        "Spaghetti Squash, 248,257",
    ],
};

const generatePlanButton = document.getElementById("generate-plan");
const planElement = document.getElementById("plan");

generatePlanButton.addEventListener("click", generateDailyPlan);

function generateDailyPlan() {
    let plan = "";
    for (const title in recipes) {
        if (recipes.hasOwnProperty(title)) {
            const recipesForTitle = recipes[title];
            const randomRecipeIndex = Math.floor(Math.random() * recipesForTitle.length);
            const randomRecipe = recipesForTitle[randomRecipeIndex];
            plan += `${title}:\n${randomRecipe}\n\n`;
        }
    }
    planElement.textContent = `Your Daily Diet Plan:\n${plan}`;
}

// Generate a plan on page load
generateDailyPlan();
