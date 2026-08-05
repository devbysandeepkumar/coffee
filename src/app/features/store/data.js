import dalgonaImg from "../../../assets/coffee/dalgona.png";
import latteImg from "../../../assets/coffee/latte.png";
import americanoImg from "../../../assets/coffee/americano.png";
import macchiatoImg from "../../../assets/coffee/macchiato.png";
import frappeImg from "../../../assets/coffee/frappe.png";
import cappuccinoImg from "../../../assets/coffee/cappuccino.png";

export const coffees = [
  {
    id: "01",
    title: "Mochaccino",
    subtitle: "Dalgona",
    description:
      "Dalgona coffee is a Korean beverage made by whipping equal proportions of instant coffee powder, sugar, and hot water until it becomes creamy, then adding it to cold or hot milk.",
    price: "$20.5",
    image: dalgonaImg,

    servings: "1 Cup",
    prepTime: "10 min",
    difficulty: "Easy",

    ingredients: [
      "2 tbsp instant coffee",
      "2 tbsp sugar",
      "2 tbsp hot water",
      "1 cup milk",
      "1 tsp cocoa powder",
      "Ice cubes (optional)",
    ],

    tools: [
      "Mixing bowl",
      "Whisk or hand mixer",
      "Measuring spoon",
      "Coffee glass",
    ],

    steps: [
      "Add instant coffee, sugar, and hot water to a bowl.",
      "Whisk until thick, creamy, and fluffy.",
      "Fill a glass with hot or cold milk.",
      "Spoon the whipped coffee mixture over the milk.",
      "Sprinkle cocoa powder on top and serve.",
    ],
  },

  {
    id: "02",
    title: "Classic",
    subtitle: "Latte",
    description:
      "A smooth and creamy coffee made with rich espresso and steamed milk, perfect for your daily coffee break.",
    price: "$18.5",
    image: latteImg,

    servings: "1 Cup",
    prepTime: "10 min",
    difficulty: "Easy",

    ingredients: [
      "1 shot espresso",
      "180 ml milk",
      "Sugar or syrup (optional)",
    ],

    tools: [
      "Espresso machine or coffee maker",
      "Milk frother",
      "Milk jug",
      "Coffee cup",
    ],

    steps: [
      "Prepare one shot of espresso.",
      "Heat and froth the milk.",
      "Pour the espresso into a cup.",
      "Slowly pour the steamed milk over the espresso.",
      "Finish with a thin layer of milk foam.",
    ],
  },

  {
    id: "03",
    title: "Cold",
    subtitle: "Americano",
    description:
      "A bold and refreshing coffee made with espresso and cold water over ice, perfect for a hot day.",
    price: "$16.5",
    image: americanoImg,

    servings: "1 Cup",
    prepTime: "5 min",
    difficulty: "Easy",

    ingredients: [
      "2 shots espresso",
      "150 ml cold water",
      "Ice cubes",
    ],

    tools: [
      "Espresso machine or coffee maker",
      "Tall glass",
      "Measuring cup",
      "Spoon",
    ],

    steps: [
      "Prepare two shots of espresso.",
      "Fill a tall glass with ice cubes.",
      "Add cold water to the glass.",
      "Pour the espresso over the water and ice.",
      "Stir gently and serve.",
    ],
  },

  {
    id: "04",
    title: "Caramel",
    subtitle: "Macchiato",
    description:
      "A delightful blend of vanilla-flavored milk, espresso, and caramel sauce, topped with a caramel drizzle.",
    price: "$22.0",
    image: macchiatoImg,

    servings: "1 Cup",
    prepTime: "10 min",
    difficulty: "Easy",

    ingredients: [
      "1 shot espresso",
      "180 ml milk",
      "1 tbsp vanilla syrup",
      "1 tbsp caramel sauce",
    ],

    tools: [
      "Espresso machine or coffee maker",
      "Milk frother",
      "Milk jug",
      "Coffee glass",
      "Spoon",
    ],

    steps: [
      "Add vanilla syrup to the glass.",
      "Heat and froth the milk.",
      "Pour the steamed milk into the glass.",
      "Slowly add the espresso over the milk.",
      "Drizzle caramel sauce over the top.",
      "Serve immediately.",
    ],
  },

  {
    id: "05",
    title: "Mocha",
    subtitle: "Frappe",
    description:
      "A rich and indulgent iced coffee blended with chocolate, milk, and ice, topped with whipped cream.",
    price: "$23.5",
    image: frappeImg,

    servings: "1 Cup",
    prepTime: "10 min",
    difficulty: "Easy",

    ingredients: [
      "1 shot espresso",
      "120 ml milk",
      "1 tbsp chocolate syrup",
      "1 cup ice",
      "Whipped cream",
      "Chocolate sauce",
    ],

    tools: [
      "Coffee maker",
      "Blender",
      "Measuring cup",
      "Tall glass",
      "Spoon",
    ],

    steps: [
      "Prepare the espresso and let it cool slightly.",
      "Add espresso, milk, chocolate syrup, and ice to a blender.",
      "Blend until smooth and creamy.",
      "Pour the mixture into a tall glass.",
      "Top with whipped cream.",
      "Drizzle chocolate sauce over the top.",
    ],
  },

  {
    id: "06",
    title: "Vanilla",
    subtitle: "Cappuccino",
    description:
      "A classic cappuccino with a sweet touch of vanilla, offering a perfect balance of foam, milk, and espresso.",
    price: "$19.5",
    image: cappuccinoImg,

    servings: "1 Cup",
    prepTime: "8 min",
    difficulty: "Easy",

    ingredients: [
      "1 shot espresso",
      "120 ml milk",
      "1 tbsp vanilla syrup",
      "Cocoa or cinnamon powder",
    ],

    tools: [
      "Espresso machine or coffee maker",
      "Milk frother",
      "Milk jug",
      "Cappuccino cup",
    ],

    steps: [
      "Prepare one shot of espresso.",
      "Mix the vanilla syrup with the espresso.",
      "Steam and froth the milk.",
      "Pour the steamed milk over the espresso.",
      "Add a thick layer of milk foam.",
      "Sprinkle cocoa or cinnamon powder on top.",
    ],
  },
];
