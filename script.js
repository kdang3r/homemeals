// Recipe data
const recipes = [
  {
    id: 1,
    name: "Pasta with Marinara Sauce",
    ingredients: ["pasta", "tomatoes", "garlic", "onion", "olive oil", "basil", "salt", "pepper"],
    difficulty: "easy",
    time: 20,
    category: "Italian"
  },
  {
    id: 2,
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrots", "bell peppers", "soy sauce", "ginger", "garlic", "rice", "sesame oil"],
    difficulty: "easy",
    time: 25,
    category: "Asian"
  },
  {
    id: 3,
    name: "Caprese Salad",
    ingredients: ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
    difficulty: "easy",
    time: 10,
    category: "Salad"
  },
  {
    id: 4,
    name: "Quinoa Bowl with Roasted Vegetables",
    ingredients: ["quinoa", "sweet potatoes", "broccoli", "chickpeas", "olive oil", "lemon", "salt", "pepper"],
    difficulty: "medium",
    time: 40,
    category: "Bowl"
  },
  {
    id: 5,
    name: "Black Bean Tacos",
    ingredients: ["black beans", "tortillas", "avocado", "tomatoes", "onion", "cilantro", "lime", "cheese"],
    difficulty: "easy",
    time: 15,
    category: "Mexican"
  },
  {
    id: 6,
    name: "Creamy Risotto",
    ingredients: ["arborio rice", "onion", "garlic", "white wine", "vegetable broth", "parmesan", "butter", "olive oil", "heavy whipping cream"],
    difficulty: "medium",
    time: 45,
    category: "Italian"
  },
  {
    id: 7,
    name: "Greek Salad",
    ingredients: ["cucumber", "tomatoes", "red onion", "feta cheese", "olives", "olive oil", "lemon", "oregano"],
    difficulty: "easy",
    time: 15,
    category: "Salad"
  },
  {
    id: 8,
    name: "Vegetable Curry",
    ingredients: ["potatoes", "cauliflower", "chickpeas", "coconut milk", "curry powder", "onion", "garlic", "ginger", "rice"],
    difficulty: "medium",
    time: 35,
    category: "Indian"
  },
  {
    id: 9,
    name: "Spinach and Feta Omelette",
    ingredients: ["eggs", "spinach", "feta cheese", "onion", "butter", "salt", "pepper"],
    difficulty: "easy",
    time: 15,
    category: "Breakfast"
  },
  {
    id: 10,
    name: "Lentil Soup",
    ingredients: ["lentils", "carrots", "celery", "onion", "garlic", "vegetable broth", "tomatoes", "cumin", "salt", "pepper"],
    difficulty: "easy",
    time: 30,
    category: "Soup"
  },
  {
    id: 11,
    name: "Eggplant Parmesan",
    ingredients: ["eggplant", "tomatoes", "mozzarella", "parmesan", "basil", "garlic", "olive oil", "flour", "eggs", "panko", "tomato paste"],
    difficulty: "hard",
    time: 60,
    category: "Italian"
  },
  {
    id: 12,
    name: "Avocado Toast",
    ingredients: ["bread", "avocado", "lemon", "salt", "pepper", "red pepper flakes"],
    difficulty: "easy",
    time: 5,
    category: "Breakfast"
  },
  {
    id: 13,
    name: "Chickpea Salad Sandwich",
    ingredients: ["chickpeas", "mayonnaise", "celery", "onion", "lemon", "bread", "lettuce", "salt", "pepper"],
    difficulty: "easy",
    time: 15,
    category: "Sandwich"
  },
  {
    id: 14,
    name: "Vegetable Lasagna",
    ingredients: ["lasagna noodles", "zucchini", "spinach", "ricotta", "mozzarella", "tomatoes", "garlic", "onion", "basil", "olive oil"],
    difficulty: "hard",
    time: 75,
    category: "Italian"
  },
  {
    id: 15,
    name: "Pad Thai (Vegetarian)",
    ingredients: ["rice noodles", "tofu", "bean sprouts", "carrots", "eggs", "peanuts", "lime", "soy sauce", "sugar", "garlic", "hot sauce"],
    difficulty: "medium",
    time: 30,
    category: "Asian"
  },
  {
    id: 16,
    name: "Stuffed Bell Peppers",
    ingredients: ["bell peppers", "rice", "black beans", "corn", "onion", "garlic", "cheese", "tomatoes", "cumin", "salt", "pepper"],
    difficulty: "medium",
    time: 50,
    category: "Mexican"
  },
  {
    id: 17,
    name: "Cauliflower Fried Rice",
    ingredients: ["cauliflower", "carrots", "peas", "eggs", "soy sauce", "garlic", "ginger", "sesame oil", "green onions"],
    difficulty: "easy",
    time: 20,
    category: "Asian"
  },
  {
    id: 18,
    name: "Zucchini Noodles with Pesto",
    ingredients: ["zucchini", "basil", "pine nuts", "parmesan", "garlic", "olive oil", "salt", "pepper"],
    difficulty: "easy",
    time: 15,
    category: "Italian"
  },
  {
    id: 19,
    name: "Falafel Wrap",
    ingredients: ["chickpeas", "onion", "garlic", "cumin", "coriander", "flour", "pita bread", "tahini", "cucumber", "tomatoes"],
    difficulty: "medium",
    time: 45,
    category: "Middle Eastern"
  },
  {
    id: 20,
    name: "Butternut Squash Soup",
    ingredients: ["butternut squash", "onion", "garlic", "vegetable broth", "coconut milk", "nutmeg", "salt", "pepper", "olive oil"],
    difficulty: "easy",
    time: 35,
    category: "Soup"
  },
  {
    id: 21,
    name: "Korean Tofu Stir Fry",
    ingredients: ["tofu", "broccoli", "carrots", "bell peppers", "gochujang", "soy sauce", "garlic", "ginger", "sesame oil", "rice"],
    difficulty: "medium",
    time: 30,
    category: "Asian"
  },
  {
    id: 22,
    name: "Spicy Tofu Tacos",
    ingredients: ["tofu", "tortillas", "avocado", "tomatoes", "onion", "cilantro", "lime", "hot sauce", "cheese"],
    difficulty: "easy",
    time: 20,
    category: "Latin"
  },
  {
    id: 23,
    name: "Creamy Pasta with Tomato Sauce",
    ingredients: ["pasta", "tomatoes", "tomato paste", "garlic", "onion", "olive oil", "basil", "heavy whipping cream", "parmesan", "salt", "pepper"],
    difficulty: "medium",
    time: 25,
    category: "Italian"
  }
];

// Always available ingredients (automatically included)
const alwaysAvailableIngredients = ["olive oil", "salt", "pepper", "flour", "sugar"];

// Ingredient categories (excluding always available items)
const ingredientCategories = {
  "Vegetables": [
    "broccoli", "carrots", "bell peppers", "tomatoes", "onion", "garlic", "spinach",
    "zucchini", "eggplant", "cauliflower", "sweet potatoes", "potatoes", "cucumber",
    "celery", "corn", "peas", "bean sprouts", "butternut squash"
  ],
  "Grains & Legumes": [
    "rice", "pasta", "quinoa", "black beans", "chickpeas", "lentils", "arborio rice",
    "rice noodles", "lasagna noodles", "bread", "pita bread", "tortillas"
  ],
  "Dairy & Eggs": [
    "eggs", "mozzarella", "feta cheese", "cheese", "parmesan", "ricotta", "butter",
    "coconut milk", "mayonnaise", "tofu", "heavy whipping cream"
  ],
  "Pantry Staples": [
    "soy sauce", "balsamic vinegar", "lemon", "lime",
    "vegetable broth", "white wine", "breadcrumbs", "sesame oil",
    "tahini", "olives", "peanuts", "pine nuts", "tomato paste", "gochujang", "hot sauce", "panko"
  ],
  "Herbs & Spices": [
    "basil", "cilantro", "ginger", "cumin", "curry powder", "oregano", "coriander",
    "nutmeg", "red pepper flakes", "green onions"
  ]
};

// Emoji mapping for ingredients
function getIngredientEmoji(ingredient) {
  const emojiMap = {
    // Vegetables
    "broccoli": "🥦", "carrots": "🥕", "bell peppers": "🫑", "tomatoes": "🍅",
    "onion": "🧅", "garlic": "🧄", "spinach": "🥬", "zucchini": "🥒",
    "eggplant": "🍆", "cauliflower": "🥦", "sweet potatoes": "🍠", "potatoes": "🥔",
    "cucumber": "🥒", "celery": "🥬", "corn": "🌽", "peas": "🫛",
    "bean sprouts": "🌱", "butternut squash": "🎃",
    // Grains & Legumes
    "rice": "🍚", "pasta": "🍝", "quinoa": "🌾", "black beans": "🫘",
    "chickpeas": "🫘", "lentils": "🫘", "arborio rice": "🍚", "rice noodles": "🍜",
    "lasagna noodles": "🍝", "bread": "🍞", "pita bread": "🫓", "tortillas": "🌮",
    // Dairy & Eggs
    "eggs": "🥚", "mozzarella": "🧀", "feta cheese": "🧀", "cheese": "🧀",
    "parmesan": "🧀", "ricotta": "🧀", "butter": "🧈", "coconut milk": "🥥",
    "mayonnaise": "🥄", "tofu": "🫘", "heavy whipping cream": "🥛",
    // Pantry Staples
    "soy sauce": "🍶", "balsamic vinegar": "🫙", "lemon": "🍋", "lime": "🍋",
    "vegetable broth": "🍲", "white wine": "🍷", "breadcrumbs": "🍞", "sesame oil": "🫒",
    "tahini": "🥄", "olives": "🫒", "peanuts": "🥜", "pine nuts": "🌲",
    "tomato paste": "🍅", "gochujang": "🌶️", "hot sauce": "🌶️", "panko": "🍞",
    // Herbs & Spices
    "basil": "🌿", "cilantro": "🌿", "ginger": "🫚", "cumin": "🌿",
    "curry powder": "🌶️", "oregano": "🌿", "coriander": "🌿", "nutmeg": "🌰",
    "red pepper flakes": "🌶️", "green onions": "🧅",
    // Always available (for display)
    "olive oil": "🫒", "salt": "🧂", "pepper": "🌶️", "flour": "🌾", "sugar": "🍬"
  };
  return emojiMap[ingredient.toLowerCase()] || "🐢";
}

// Helper functions
function getDifficultyOrder(difficulty) {
  const order = { easy: 1, medium: 2, hard: 3 };
  return order[difficulty] || 3;
}

// App state
let currentMode = 'recipes';
let selectedRecipes = [];
let sortBy = 'difficulty';
let selectedIngredients = [];
let selectedCuisine = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupModeToggle();
  setupRecipesMode();
  setupIngredientsMode();
  renderRecipes();
  renderIngredients();
  setupCuisineFilter();
});

// Setup cuisine filter (called after ingredients mode is set up)
function setupCuisineFilter() {
  document.querySelectorAll('.cuisine-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      document.querySelectorAll('.cuisine-btn').forEach(b => b.classList.remove('active'));
      // Add active to clicked button
      btn.classList.add('active');
      selectedCuisine = btn.dataset.cuisine;
    });
  });
}

// Mode toggle
function setupModeToggle() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      switchMode(mode);
    });
  });
}

function switchMode(mode) {
  currentMode = mode;
  
  // Update toggle buttons
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  
  // Show/hide mode content
  document.getElementById('recipes-mode').style.display = mode === 'recipes' ? 'block' : 'none';
  document.getElementById('ingredients-mode').style.display = mode === 'ingredients' ? 'block' : 'none';
}

// Recipes mode setup
function setupRecipesMode() {
  // Sort buttons
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sortBy = btn.dataset.sort;
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRecipes();
    });
  });
}

function renderRecipes() {
  const grid = document.getElementById('recipes-grid');
  
  // Sort recipes
  const sorted = [...recipes].sort((a, b) => {
    if (sortBy === 'difficulty') {
      return getDifficultyOrder(a.difficulty) - getDifficultyOrder(b.difficulty);
    } else {
      return a.time - b.time;
    }
  });
  
  grid.innerHTML = sorted.map(recipe => {
    const isSelected = selectedRecipes.includes(recipe.id);
    return `
      <div class="recipe-card ${isSelected ? 'selected' : ''}" data-recipe-id="${recipe.id}">
        <div class="recipe-header">
          <h3>${recipe.name}</h3>
          <div class="recipe-badges">
            <span class="badge difficulty-${recipe.difficulty}">${recipe.difficulty}</span>
            <span class="badge time">${recipe.time} min</span>
          </div>
        </div>
        <p class="recipe-category">${recipe.category}</p>
        ${isSelected ? '<div class="checkmark">✓</div>' : ''}
      </div>
    `;
  }).join('');
  
  // Add click handlers
  grid.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', () => {
      const recipeId = parseInt(card.dataset.recipeId);
      toggleRecipe(recipeId);
    });
  });
  
  updateGroceryList();
}

function toggleRecipe(recipeId) {
  if (selectedRecipes.includes(recipeId)) {
    selectedRecipes = selectedRecipes.filter(id => id !== recipeId);
  } else {
    selectedRecipes.push(recipeId);
  }
  renderRecipes();
}

function updateGroceryList() {
  const section = document.getElementById('grocery-section');
  
  if (selectedRecipes.length === 0) {
    section.style.display = 'none';
    return;
  }
  
  // Generate grocery list
  const allIngredients = new Set();
  selectedRecipes.forEach(recipeId => {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
      recipe.ingredients.forEach(ing => allIngredients.add(ing));
    }
  });
  
  const groceryList = Array.from(allIngredients).sort();
  const selectedRecipesData = selectedRecipes.map(id => recipes.find(r => r.id === id));
  
  section.innerHTML = `
    <h2>Your Selected Recipes (${selectedRecipes.length})</h2>
    <div class="selected-recipes">
      ${selectedRecipesData.map(recipe => `
        <div class="selected-recipe-item">
          <strong>${recipe.name}</strong>
          <span class="recipe-meta">${recipe.difficulty} • ${recipe.time} min</span>
        </div>
      `).join('')}
    </div>
    <h2>Grocery List</h2>
    <div class="grocery-list">
      ${groceryList.map(ingredient => `
        <div class="grocery-item">${ingredient}</div>
      `).join('')}
    </div>
  `;
  
  section.style.display = 'block';
}

// Ingredients mode setup
function setupIngredientsMode() {
  document.getElementById('generate-btn').addEventListener('click', generateMealPlan);
}

function renderIngredients() {
  const container = document.getElementById('ingredients-categories');
  
  container.innerHTML = Object.entries(ingredientCategories).map(([category, ingredients]) => `
    <div class="category-section">
      <h3 class="category-title">${category}</h3>
      <div class="ingredients-grid">
        ${ingredients.map(ingredient => {
          const isSelected = selectedIngredients.includes(ingredient.toLowerCase());
          const emoji = getIngredientEmoji(ingredient);
          return `
            <button class="ingredient-btn ${isSelected ? 'selected' : ''}" data-ingredient="${ingredient.toLowerCase()}">
              <span class="ingredient-emoji">${emoji}</span>
              <span class="ingredient-name">${ingredient}</span>
              ${isSelected ? '<span class="check">✓</span>' : ''}
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
  
  // Add click handlers
  container.querySelectorAll('.ingredient-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const ingredient = btn.dataset.ingredient;
      toggleIngredient(ingredient);
    });
  });
}

function toggleIngredient(ingredient) {
  if (selectedIngredients.includes(ingredient)) {
    selectedIngredients = selectedIngredients.filter(ing => ing !== ingredient);
  } else {
    selectedIngredients.push(ingredient);
  }
  renderIngredients();
}

function generateMealPlan() {
  if (selectedIngredients.length === 0) {
    alert('Please select at least one ingredient!');
    return;
  }
  
  const numMeals = parseInt(document.getElementById('numMeals').value) || 7;
  
  // Combine selected ingredients with always available ingredients
  const allAvailableIngredients = [...selectedIngredients, ...alwaysAvailableIngredients.map(ing => ing.toLowerCase())];
  
  // Filter recipes by cuisine if selected
  let filteredRecipes = recipes;
  if (selectedCuisine !== 'all') {
    // Map cuisine filter to recipe categories
    const cuisineMap = {
      'Asian': ['Asian'],
      'Latin': ['Mexican', 'Latin'],
      'Italian': ['Italian']
    };
    const allowedCategories = cuisineMap[selectedCuisine] || [];
    filteredRecipes = recipes.filter(recipe => 
      allowedCategories.includes(recipe.category)
    );
  }
  
  // Score each recipe (using all available ingredients including always available)
  const recipeScores = filteredRecipes.map(recipe => {
    const matchingIngredients = recipe.ingredients.filter(ing =>
      allAvailableIngredients.includes(ing.toLowerCase())
    );
    const score = matchingIngredients.length / recipe.ingredients.length;
    return {
      recipe,
      score,
      matchingCount: matchingIngredients.length,
      totalIngredients: recipe.ingredients.length
    };
  });
  
  // Sort by score
  recipeScores.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.matchingCount - a.matchingCount;
  });
  
  // Select top N recipes
  const selected = recipeScores.slice(0, numMeals).map(item => item.recipe);
  
  // Calculate additional ingredients (excluding always available)
  const allNeededIngredients = new Set();
  selected.forEach(recipe => {
    recipe.ingredients.forEach(ing => allNeededIngredients.add(ing));
  });
  
  const additional = Array.from(allNeededIngredients).filter(ing =>
    !allAvailableIngredients.includes(ing.toLowerCase())
  ).sort();
  
  // Render results
  const resultsDiv = document.getElementById('ingredients-results');
  resultsDiv.innerHTML = `
    <h2>Your Meal Plan (${selected.length} meals)</h2>
    <div class="generated-recipes">
      ${selected.map(recipe => {
        const matchingIngredients = recipe.ingredients.filter(ing =>
          allAvailableIngredients.includes(ing.toLowerCase())
        );
        const matchPercentage = Math.round(
          (matchingIngredients.length / recipe.ingredients.length) * 100
        );
        
        return `
          <div class="generated-recipe-card">
            <div class="recipe-title-row">
              <h3>${recipe.name}</h3>
              <div class="recipe-badges">
                <span class="badge difficulty-${recipe.difficulty}">${recipe.difficulty}</span>
                <span class="badge time">${recipe.time} min</span>
              </div>
            </div>
            <p class="recipe-category">${recipe.category}</p>
            <div class="match-indicator">
              <span class="match-label">Uses ${matchPercentage}% of your ingredients</span>
              <div class="match-bar">
                <div class="match-fill" style="width: ${matchPercentage}%"></div>
              </div>
            </div>
            <div class="recipe-ingredients">
              <strong>Ingredients:</strong>
              <div class="ingredients-list">
                ${recipe.ingredients.map(ing => {
                  const isSelected = allAvailableIngredients.includes(ing.toLowerCase());
                  const isAlwaysAvailable = alwaysAvailableIngredients.map(i => i.toLowerCase()).includes(ing.toLowerCase());
                  const emoji = getIngredientEmoji(ing);
                  return `
                    <span class="ingredient-tag ${isSelected ? 'has-ingredient' : 'needs-ingredient'} ${isAlwaysAvailable ? 'always-available' : ''}">
                      <span class="ingredient-emoji-small">${emoji}</span>
                      ${ing} ${isSelected ? '✓' : ''} ${isAlwaysAvailable ? '(always available)' : ''}
                    </span>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
    ${additional.length > 0 ? `
      <div class="additional-ingredients-section">
        <h2>Additional Ingredients Needed</h2>
        <p class="section-description">
          These are the ingredients you'll need to purchase to make all the meals above
        </p>
        <div class="additional-ingredients-list">
          ${additional.map(ingredient => `
            <div class="additional-ingredient">${ingredient}</div>
          `).join('')}
        </div>
      </div>
    ` : `
      <div class="no-additional-ingredients">
        <p>🎉 Great news! You have all the ingredients needed for these meals!</p>
      </div>
    `}
  `;
  
  resultsDiv.style.display = 'block';
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


