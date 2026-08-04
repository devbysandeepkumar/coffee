import dalgonaImg from '../../../assets/coffee/dalgona.png';
import latteImg from '../../../assets/coffee/latte.png';
import americanoImg from '../../../assets/coffee/americano.png';
import macchiatoImg from '../../../assets/coffee/macchiato.png';
import frappeImg from '../../../assets/coffee/frappe.png';
import cappuccinoImg from '../../../assets/coffee/cappuccino.png';

export const coffees = [
  {
    id: "01",
    title: "Mochaccino",
    subtitle: "Dalgona",
    description:
      "Dalgona coffee is a Korean beverage made by whipping equal proportions of instant coffee powder, sugar, and hot water until it becomes creamy, then adding it to cold or hot milk.",
    price: "$20.5",
    image:dalgonaImg,
  },

  {
    id: "02",
    title: "Classic",
    subtitle: "Latte",
    description:
      "A smooth and creamy coffee made with rich espresso and steamed milk, perfect for your daily coffee break.",
    price: "$18.5",
    image: latteImg,
  },

  {
    id: "03",
    title: "Cold",
    subtitle: "Americano",
    description:
      "A bold and refreshing coffee made with espresso and cold water over ice, perfect for a hot day.",
    price: "$16.5",
    image: americanoImg,
  },

  {
    id: "04",
    title: "Caramel",
    subtitle: "Macchiato",
    description:
      "A delightful blend of vanilla-flavored milk, espresso, and caramel sauce, topped with a caramel drizzle.",
    price: "$22.0",
    image: macchiatoImg,
  },

  {
    id: "05",
    title: "Mocha",
    subtitle: "Frappe",
    description:
      "A rich and indulgent iced coffee blended with chocolate, milk, and ice, topped with whipped cream.",
    price: "$23.5",
    image: frappeImg,
  },

  {
    id: "06",
    title: "Vanilla",
    subtitle: "Cappuccino",
    description:
      "A classic cappuccino with a sweet touch of vanilla, offering a perfect balance of foam, milk, and espresso.",
    price: "$19.5",
    image: cappuccinoImg,
  },
];
