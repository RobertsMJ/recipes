export function addRecipe(rec) {
  recipes[rec.id] = rec;
  console.log(recipes);
}

export const recipes = {
  123: {
    id: 123,
    name: "Chili",
    description: "Easy chili recipe, very tasty, would recommend 8/10",
    directions: [
      "Heat oil in large frying pan over med. heat until shimmering",
      "Add diced onions and peppers with salt and cook until softened",
      "Add garlic, chili powder, and cumin to softened vegetables and cook until fragrant (~1 minute)",
      "Add ground beef and salt to vegetables and cook until meat is browned",
      "Transfer mixture to slow cooker along with diced tomatoes with juices, tomato sauce, and beans",
      "Cover and cook for 8 hours on low/6 hours on high",
      "(Optional) Add jalapeños or green chiles",
    ],
    ingredients: [
      {
        id: 1,
        name: "Vegetable Oil",
        qty: 3,
        unit: "tbsp",
      },
      {
        id: 2,
        name: "Yellow Onion",
        qty: 2,
        unit: "units",
      },
      {
        id: 3,
        name: "Red Pepper",
        qty: 1,
        unit: "units",
      },
      {
        id: 4,
        name: "Garlic Cloves",
        qty: 6,
        unit: "units",
      },
      {
        id: 5,
        name: "Chili Powder",
        qty: 0.25,
        unit: "cups",
      },
      {
        id: 6,
        name: "Ground Cumin",
        qty: 1,
        unit: "tbsp",
      },
      {
        id: 7,
        name: "Ground Beef",
        qty: 2,
        unit: "lbs",
      },
      {
        id: 8,
        name: "Kosher Salt",
        qty: 1.5,
        unit: "tsp",
      },
      {
        id: 9,
        name: "Diced Tomatoes",
        qty: 28,
        unit: "oz",
      },
      {
        id: 10,
        name: "Tomato Sauce",
        qty: 14,
        unit: "oz",
      },
      {
        id: 11,
        name: "Kidney Beans",
        qty: 15,
        unit: "oz",
      },
      {
        id: 12,
        name: "Jalapeños",
        qty: 0.25,
        unit: "cups",
      },
    ],
  },
  456: {
    id: 456,
    name: "Test",
    description: "Test description",
  },
};
