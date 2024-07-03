import breakfast from "./assets/images/breakfast.png";
import lunch from "./assets/images/lunch.png";
import drinks from "./assets/images/drinks.png";
import pastas from "./assets/images/Pastas.png";
import salads from "./assets/images/Salads.png";
import desserts from "./assets/images/desserts.png";
import soups from "./assets/images/soup.png";
import favorite1 from "./assets/images/favorite1.png";
import favorite2 from "./assets/images/favorite2.png";

export const categories = [
  {
    id: "001",
    name: "Breakfast",
    image: breakfast,
  },
  {
    id: "002",
    name: "Lunch",
    image: lunch,
  },
  {
    id: "003",
    name: "Drinks",
    image: drinks,
  },
  {
    id: "004",
    name: "Pastas",
    image: pastas,
  },
  {
    id: "005",
    name: "Salads",
    image: salads,
  },
  {
    id: "006",
    name: "Desserts",
    image: desserts,
  },
  {
    id: "007",
    name: "Soups",
    image: soups,
  },
];

export const favorites = [
  {
    id: "001",
    name: "Chorizo & mozzarella gnocchi bake",
    image: favorite1,
    caloryLevel: 350,
    preparationDuration: "45",
  },
  {
    id: "002",
    name: "Huevos Rancheros",
    image: favorite2,
    caloryLevel: 125,
    preparationDuration: "20",
  },
];
